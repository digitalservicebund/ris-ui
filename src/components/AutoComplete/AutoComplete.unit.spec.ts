import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";

import { nextTick } from "vue";
import AutoComplete from "./AutoComplete.vue";
import PrimeVue from "primevue/config";
import ProgressSpinner from "primevue/progressspinner";

describe("AutoComplete", () => {
  it("renders correctly with default props", async () => {
    const wrapper = shallowMount(AutoComplete);

    expect(wrapper.findComponent("auto-complete-stub").exists()).toBe(true);
  });

  it("sets props correctly", async () => {
    const props = {
      modelValue: "test",
      suggestions: [
        { id: "1", label: "Option 1" },
        { id: "2", label: "Option 2" },
      ],
      // emptySearchMessage: "No results"
    };
    const wrapper = mount(AutoComplete, {
      props,
      global: { plugins: [PrimeVue] },
    });
    const autoComplete = wrapper.findComponent(AutoComplete);

    expect(autoComplete.props("modelValue")).toBe("test");
    expect(autoComplete.props("suggestions")).toEqual(props.suggestions);
  });

  it("identifies the correct options as active", async () => {
    const wrapper = await mount(AutoComplete, {
      props: {
        modelValue: "2",
        suggestions: [
          { id: "1", label: "Option 1" },
          { id: "2", label: "Option 2" },
          { id: "3", label: "Option 3" },
        ],
      },
      global: { plugins: [PrimeVue] },
    });

    const autoComplete = wrapper.findComponent(AutoComplete);

    const suggestions = wrapper.props("suggestions")!;

    autoComplete.vm.$emit("item-select", { value: suggestions[1] });
    await nextTick();
    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.isActiveOption(suggestions[0])).toBe(false);
    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.isActiveOption(suggestions[1])).toBe(true);
  });

  it("passes props correctly", async () => {
    const wrapper = await mount(AutoComplete, {
      props: {
        emptySearchMessage: "TEST empty search message",
        class: "test-class",
      },
      global: { plugins: [PrimeVue] },
    });

    const autoComplete = wrapper.findComponent(AutoComplete);

    expect(wrapper.find('span[@role="status"]').text()).toBe(
      "TEST empty search message",
    );
    const classList = [...autoComplete.element.classList];
    expect(classList).includes("test-class");
  });

  it("renders the ProgressSpinner when loading", async () => {
    const wrapper = mount(AutoComplete, {
      props: {
        loading: true,
      },
      global: { plugins: [PrimeVue] },
    });
    await nextTick();
    expect(wrapper.findComponent(ProgressSpinner).exists()).toBe(true);
  });
});
