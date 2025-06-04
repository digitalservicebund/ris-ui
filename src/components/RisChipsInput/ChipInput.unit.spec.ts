import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import PrimeVue from "primevue/config";
import ChipInput from "./ChipInput.vue";
import { mount } from "@vue/test-utils";
import userEvent from "@testing-library/user-event";

describe("ChipInput", () => {
  it("renders correctly with InputMask when mask prop is provided", () => {
    render(ChipInput, {
      props: {
        modelValue: "",
        mask: "99-9999",
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("p-inputmask");
  });

  it("renders correctly with InputText when mask prop is not provided", () => {
    render(ChipInput, {
      props: {
        modelValue: "",
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveClass("p-inputmask");
  });

  it("emits update:modelValue event when Enter is pressed", async () => {
    const user = userEvent.setup();
    const { emitted } = render(ChipInput, {
      props: {
        modelValue: "",
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "New Chip");
    await user.keyboard("{Enter}");

    expect(emitted()["update:modelValue"]).toBeTruthy();
    expect(emitted()["update:modelValue"].slice(-1)).toEqual([["New Chip"]]);
  });

  it("emits update:modelValue event when input loses focus", async () => {
    const user = userEvent.setup();
    const { emitted } = render(ChipInput, {
      props: {
        modelValue: "",
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "New Chip");
    await user.keyboard("{Tab}");

    expect(emitted()["update:modelValue"]).toBeTruthy();
    expect(emitted()["update:modelValue"].slice(-1)).toEqual([["New Chip"]]);
  });

  it("focuses the input on mount when shouldFocusOnMount is true", async () => {
    const wrapper = mount(ChipInput, {
      props: {
        modelValue: "",
        shouldFocusOnMount: true,
      },
      global: {
        plugins: [PrimeVue],
      },
      attachTo: document.body,
    });

    const input = wrapper.find("input").element;
    expect(input).toBe(document.activeElement);
    wrapper.unmount();
  });

  it("does not focus the input on mount when shouldFocusOnMount is false", async () => {
    const wrapper = mount(ChipInput, {
      props: {
        modelValue: "",
        shouldFocusOnMount: false,
      },
      global: {
        plugins: [PrimeVue],
      },
      attachTo: document.body,
    });

    const input = wrapper.find("input").element;
    expect(input).not.toBe(document.activeElement);
    wrapper.unmount();
  });
});
