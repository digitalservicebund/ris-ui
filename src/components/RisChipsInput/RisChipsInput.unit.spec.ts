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
        inputId: "custom-id",
      },
      global: { plugins: [PrimeVue] },
    });

    expect(
      screen.getByRole("listitem", { name: "banane" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("listitem", { name: "apple" })).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: "Eintrag hinzufügen" });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "custom-id");
  });

  it("adds a new chip", async () => {
    const user = userEvent.setup();

    const { emitted } = render(RisChipsInput, {
      props: {
        modelValue: [],
      },
      global: { plugins: [PrimeVue] },
    });

    await user.type(
      screen.getByRole("textbox", { name: "Eintrag hinzufügen" }),
      "New Chip{enter}",
    );

    expect(emitted()["update:modelValue"][0]).toEqual([["New Chip"]]);
    expect(
      screen.getByRole("textbox", { name: "Eintrag hinzufügen" }),
    ).toHaveValue("");
  });

  it("deletes a chip", async () => {
    const user = userEvent.setup();

    const { emitted } = render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
      },
      global: { plugins: [PrimeVue] },
    });

    const deleteButton = screen.getByRole("button", {
      name: "Eintrag löschen",
    });
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

    const editButton = screen.getByRole("button", {
      name: "Eintrag bearbeiten",
    });
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

    const editButton = screen.getByRole("button", {
      name: "Eintrag bearbeiten",
    });
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
      screen.getByRole("textbox", { name: "Eintrag hinzufügen" }),
    ).toBeInTheDocument();

    const editButton = screen.getByRole("button", {
      name: "Eintrag bearbeiten",
    });
    await user.dblClick(editButton);

    expect(
      screen.queryByRole("textbox", { name: "Eintrag hinzufügen" }),
    ).not.toBeInTheDocument();
  });

  it("focus the rerendered new chip input after a chip has been added", async () => {
    const user = userEvent.setup();

    render(RisChipsInput, {
      props: {
        modelValue: [],
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox", { name: "Eintrag hinzufügen" });
    await user.type(input, "apple{enter}");

    const rerenderedInput = screen.getByRole("textbox", {
      name: "Eintrag hinzufügen",
    });
    expect(document.activeElement).toBe(rerenderedInput);
    expect(rerenderedInput).toHaveValue("");
  });

  it("group has aria invalid set to true when hasError prop is provided", async () => {
    render(RisChipsInput, {
      props: {
        modelValue: [],
        hasError: true,
      },
      global: { plugins: [PrimeVue] },
    });

    expect(screen.getByRole("group")).toHaveAttribute("aria-invalid", "true");
  });

  it("auto-generates a unique id when inputId is not provided", () => {
    render(RisChipsInput, {
      props: {
        modelValue: [],
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox", { name: "Eintrag hinzufügen" });

    // expect a generated ID — we don’t know the exact string,
    // but we can assert that it *exists* and is not empty
    const idValue = input.getAttribute("id");
    expect(idValue).toBeTruthy();
    expect(idValue?.length).toBeGreaterThan(0);
  });

  it("applies unique IDs for the editable chip input", async () => {
    const user = userEvent.setup();

    render(RisChipsInput, {
      props: {
        modelValue: ["apple"],
        inputId: "custom-id",
      },
      global: { plugins: [PrimeVue] },
    });

    await user.dblClick(
      screen.getByRole("button", { name: "Eintrag bearbeiten" }),
    );

    const editInput = screen.getByDisplayValue("apple");
    const id = editInput.getAttribute("id");

    expect(id).toMatch(/^custom-id-/);
  });
});
