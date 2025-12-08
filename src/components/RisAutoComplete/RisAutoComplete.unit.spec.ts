import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";

import { nextTick } from "vue";
import AutoComplete, { type RisAutoCompleteProps } from "./RisAutoComplete.vue";
import PrimeVue from "primevue/config";
import ProgressSpinner from "primevue/progressspinner";
import _ from "lodash";

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
    const wrapper = mount(AutoComplete, {
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
    const props: Required<RisAutoCompleteProps> = {
      suggestions: [{ id: "1", label: "Option 1" }],
      typeahead: false,
      dropdownMode: "current",
      ariaLabel: "ARIA label",
      ariaLabelledby: "labelled by",
      delay: 3.141,
      completeOnFocus: true,
      loading: true,
      invalid: true,
      disabled: true,
      dropdown: true,
      optionDisabled: "disabled",
      scrollHeight: "h",
      placeholder: "p",
      forceSelection: true,
      autoOptionFocus: true,
      selectOnFocus: true,
      focusOnHover: true,
      appendTo: "body",
      initialLabel: "initial label",
    };
    const wrapper = mount(AutoComplete, {
      props,
      global: { plugins: [PrimeVue] },
    });

    const autoComplete = wrapper.findComponent(AutoComplete);

    // initalLabel gets special handling, being used to populate the internal modelValue if a certain item is already set
    expect(autoComplete.props("modelValue")).toBe(props.initialLabel);
    expect(autoComplete.props()).toMatchObject(_.omit(props, ["initialLabel"]));
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
