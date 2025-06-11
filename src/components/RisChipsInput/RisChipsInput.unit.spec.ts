import { fireEvent, render, screen } from "@testing-library/vue";
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

    expect(
      screen.getByRole("listitem", { name: "banane" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("listitem", { name: "apple" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Eintrag hinzufügen" }),
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

  it("focus the rerendered new chip input after a chip has been added (with mask)", async () => {
    render(RisChipsInput, {
      props: {
        modelValue: [],
        mask: "99.99.9999",
      },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByRole("textbox", { name: "Eintrag hinzufügen" });
    // Dispatching raw DOM events because user.type() throws an error in InputMask
    await fireEvent.update(input, "01.01.1970");
    await fireEvent.blur(input);

    const rerenderedInput = screen.getByRole("textbox", {
      name: "Eintrag hinzufügen",
    });
    expect(document.activeElement).toBe(rerenderedInput);
    expect(rerenderedInput).toHaveValue("");
  });
});
