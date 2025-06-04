import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import PrimeVue from "primevue/config";
import RisChipsInput from "./RisChipsInput.vue";
import userEvent from "@testing-library/user-event";

describe("RisChipsInput", () => {
  it("renders the chips", () => {
    render(RisChipsInput, {
      props: {
        modelValue: ["banane", "apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    expect(screen.getByText("banane")).toBeInTheDocument();
    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Chip text eingeben" }),
    ).toBeInTheDocument();
  });

  it("adds a new chip", async () => {
    const user = userEvent.setup();

    const { emitted } = render(RisChipsInput, {
      props: {
        modelValue: [],
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "New Chip{enter}");

    expect(emitted()["update:modelValue"][0]).toEqual([["New Chip"]]);
    expect(input).toHaveValue("");
  });

  it("deletes a chip", async () => {
    const user = userEvent.setup();

    const { emitted } = render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    const deleteButton = screen.getByRole("button", { name: "Löschen" });
    await user.click(deleteButton);

    expect(emitted()["update:modelValue"][0]).toEqual([[]]);
  });

  it("focuses chip input when editing an existing chip", async () => {
    const user = userEvent.setup();

    render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    expect(screen.queryByDisplayValue("apple")).not.toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: "Chip editieren" });
    await user.dblClick(editButton);

    expect(screen.getByDisplayValue("apple")).toBeInTheDocument();
  });

  it("edits an existing chip", async () => {
    const user = userEvent.setup();

    const { emitted } = render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    const editButton = screen.getByRole("button", { name: "Chip editieren" });
    await user.dblClick(editButton);
    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "banane{enter}");

    expect(emitted()["update:modelValue"].slice(-1)).toEqual([[["banane"]]]);
  });

  it("new chip input is hidden when editing an existing chip", async () => {
    const user = userEvent.setup();

    render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    expect(
      screen.getByRole("textbox", { name: "Chip text eingeben" }),
    ).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: "Chip editieren" });
    await user.dblClick(editButton);

    expect(
      screen.queryByRole("textbox", { name: "Chip text eingeben" }),
    ).not.toBeInTheDocument();
  });
});
