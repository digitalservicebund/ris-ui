import { describe, it, expect } from "vitest";
import RisPaginator from "./RisPaginator.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { PageState } from "primevue";

describe("RisPaginator", () => {
  it("hides the previous button when on first page", async () => {
    render(RisPaginator, {
      props: {
        first: 0,
        rows: 10,
        totalRecords: 100,
      },
    });

    expect(
      screen.queryByRole("button", { name: "Zurück" }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Seite 1")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Weiter" })).toBeInTheDocument();
  });

  it("hides the next button when on last page", async () => {
    render(RisPaginator, {
      props: {
        first: 90,
        rows: 10,
        totalRecords: 100,
      },
    });

    expect(screen.getByRole("button", { name: "Zurück" })).toBeInTheDocument();
    expect(screen.getByText("Seite 10")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Weiter" }),
    ).not.toBeInTheDocument();
  });

  it("renders customized button labels and pagination", async () => {
    render(RisPaginator, {
      props: {
        prevButtonLabel: "Previous",
        nextButtonLabel: "Next",
        first: 10,
        rows: 10,
        totalRecords: 100,
      },
    });

    expect(
      screen.getByRole("button", { name: "Previous" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Seite 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("emits an updated PageState on page change", async () => {
    const user = userEvent.setup();
    const { emitted } = render(RisPaginator, {
      props: {
        first: 0,
        rows: 10,
        totalRecords: 100,
      },
    });

    await user.click(screen.getByRole("button", { name: "Weiter" }));
    const emittedVal = emitted("page");

    expect(emittedVal).toBeTruthy();
    if (emittedVal) {
      const [firstEvent] = emittedVal[0] as PageState[];
      expect(firstEvent).toEqual({
        page: 1,
        first: 10,
        rows: 10,
        pageCount: 10,
      });
    }
  });
});
