import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, test, vi } from "vitest";
import RisExpandableText from ".";

describe("RisExpandableText", () => {
  test("renders the text", () => {
    render(RisExpandableText, { slots: { default: "Test" } });
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders an expand button", async () => {
    // Need to mock these properties as JSDOM doesn't implement layout so they would always be 0
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(50);
    render(RisExpandableText, { slots: { default: "Test" } });

    await vi.waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Mehr anzeigen" }),
      ).toBeInTheDocument();
    });
  });

  test("expands the text", async () => {
    // Need to mock these properties as JSDOM doesn't implement layout so they would always be 0
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(50);
    const user = userEvent.setup();
    render(RisExpandableText, {
      slots: { default: "Test" },
      props: { expanded: false },
    });

    await vi.waitFor(() => screen.getByRole("button"));

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  test("collapses the text", async () => {
    // Need to mock these properties as JSDOM doesn't implement layout so they would always be 0
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(50);
    const user = userEvent.setup();
    render(RisExpandableText, {
      slots: { default: "Test" },
      props: { expanded: true },
    });

    await vi.waitFor(() => screen.getByRole("button"));

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  test("renders a collapse button", async () => {
    // Need to mock these properties as JSDOM doesn't implement layout so they would always be 0
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(50);
    render(RisExpandableText, {
      props: { expanded: true },
      slots: { default: "Test" },
    });

    await vi.waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Weniger anzeigen" }),
      ).toBeInTheDocument();
    });
  });

  test("does not render the expand/collapse button if the text is not truncated", async () => {
    // Need to mock these properties as JSDOM doesn't implement layout so they would always be 0
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(100);
    render(RisExpandableText, { slots: { default: "Test" } });

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
