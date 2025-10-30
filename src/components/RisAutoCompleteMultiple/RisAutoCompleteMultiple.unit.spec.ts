import { mount } from "@vue/test-utils";
import AutoComplete from "primevue/autocomplete";
import { ref } from "vue";
import { describe, expect, it } from "vitest";
import RisAutoCompleteMultiple from "./RisAutoCompleteMultiple.vue";
import { PrimeVue } from "@primevue/core";

const suggestions = [
  { id: "1", label: "Mars", secondaryLabel: "The red planet" },
  { id: "2", label: "Earth", secondaryLabel: "The blue planet" },
];

describe("RisAutoCompleteMultiple", () => {
  it("forwards props to AutoComplete", () => {
    const wrapper = mount(RisAutoCompleteMultiple, {
      props: {
        placeholder: "Search...",
        suggestions,
        disabled: true,
        loading: true,
        invalid: true,
      },
      global: {
        plugins: [PrimeVue],
      },
    });

    const autoComplete = wrapper.findComponent(AutoComplete);
    expect(autoComplete.props("placeholder")).toBe("Search...");
    expect(autoComplete.props("suggestions")).toEqual(suggestions);
    expect(autoComplete.props("disabled")).toBe(true);
    expect(autoComplete.props("loading")).toBe(true);
    expect(autoComplete.props("invalid")).toBe(true);
  });

  it("binds v-model correctly", async () => {
    const model = ref([]);
    const wrapper = mount(RisAutoCompleteMultiple, {
      props: {
        suggestions,
        modelValue: model.value,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "onUpdate:modelValue": (val: any) => (model.value = val),
      },
      global: {
        plugins: [PrimeVue],
      },
    });

    const autoComplete = wrapper.findComponent(AutoComplete);
    autoComplete.vm.$emit("update:modelValue", [
      { id: "1", label: "Mars", secondaryLabel: "The red planet" },
    ]);

    expect(model.value).toEqual([
      { id: "1", label: "Mars", secondaryLabel: "The red planet" },
    ]);
  });

  it("exposes autoCompleteRef", () => {
    const wrapper = mount(RisAutoCompleteMultiple, {
      props: {
        suggestions: [],
      },
      global: {
        plugins: [PrimeVue],
      },
    });

    expect(wrapper.vm.autoCompleteRef).toBeDefined();
  });
});
