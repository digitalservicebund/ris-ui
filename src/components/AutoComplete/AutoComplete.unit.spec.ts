import { describe, it, expect } from "vitest";
import { mount, shallowMount, type VueWrapper } from "@vue/test-utils";

import { ComponentPublicInstance, nextTick } from "vue";
import AutoComplete from "./AutoComplete.vue";
import { type AutoCompleteProps } from "primevue/autocomplete";
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
      dataKey: "id",
      optionLabel: "name",
      suggestions: [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
      ],
      // emptySearchMessage: "No results"
    };
    const wrapper = mount(AutoComplete, {
      props,
      global: { plugins: [PrimeVue] },
    });
    const autoComplete = wrapper.findComponent(AutoComplete);

    expect(autoComplete.props("modelValue")).toBe("test");
    expect(autoComplete.props("dataKey")).toBe("id");
    expect(autoComplete.props("optionLabel")).toBe("name");
    expect(autoComplete.props("suggestions")).toEqual(props.suggestions);
  });

  it("computes modelValueKey correctly", async () => {
    const wrapper = shallowMount(AutoComplete, {
      props: {
        modelValue: "test",
      } as AutoCompleteProps,
      global: { plugins: [PrimeVue] },
    });

    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.modelValueKey).toBe("test");

    await wrapper.setProps({
      modelValue: { id: 1, name: "Test" },
      dataKey: "id",
    });

    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.modelValueKey).toBe(1);
  });

  it("getOptionKey works correctly", async () => {
    const wrapper = mount(AutoComplete, {
      global: { plugins: [PrimeVue] },
    }) as VueWrapper<ComponentPublicInstance & typeof AutoComplete>;
    expect(wrapper.vm.getOptionKey("option 1")).toBe("option 1");

    await wrapper.setProps({ dataKey: "id" });
    const option = { id: 1, name: "Test" };
    expect(wrapper.vm.getOptionKey(option)).toBe(1);
  });

  it("getOptionLabel works correctly", async () => {
    const wrapper = mount(AutoComplete, {
      global: { plugins: [PrimeVue] },
    });

    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.getOptionLabel("option")).toBe("option");

    await wrapper.setProps({ optionLabel: "name" });
    const option = { id: 1, name: "Test" };

    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.getOptionLabel(option)).toBe("Test");

    await wrapper.setProps({
      optionLabel: (opt: Record<string, unknown>) => `${opt.id} - ${opt.name}`,
    });

    // @ts-expect-error: Accessing private property for testing
    expect(wrapper.vm.getOptionLabel(option)).toBe("1 - Test");

    await wrapper.setProps({
      optionLabel: undefined,
    });
  });

  it("identifies the correct options as active", async () => {
    const wrapper = await mount(AutoComplete, {
      props: {
        modelValue: 2,
        suggestions: [
          { id: 1, name: "Option 1" },
          { id: 2, name: "Option 2" },
          { id: 3, name: "Option 3" },
        ],
        dataKey: "id",
        optionLabel: "name",
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
