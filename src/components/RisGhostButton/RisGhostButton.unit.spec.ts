import { render, screen } from "@testing-library/vue";
import { describe, expect, test } from "vitest";
import RisGhostButton from "./RisGhostButton.vue";

describe("RisGhostButton", () => {
  test("renders", () => {
    render(RisGhostButton, { slots: { default: "Click me" } });
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  test("applies focus styles when forceFocus is true", () => {
    render(RisGhostButton, {
      props: { forceFocus: true },
      slots: { default: "Click me" },
    });

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("bg-blue-800", "text-white");
  });

  test("does not apply focus styles when forceFocus is false", () => {
    render(RisGhostButton, {
      props: { forceFocus: false },
      slots: { default: "Click me" },
    });

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).not.toHaveClass("bg-blue-800", "text-white");
  });

  test("does not apply focus styles when forceFocus is not provided", () => {
    render(RisGhostButton, { slots: { default: "Click me" } });

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).not.toHaveClass("bg-blue-800", "text-white");
  });
});
