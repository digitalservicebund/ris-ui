import { describe, it, expect } from "vitest";
import RisPaginator from "./RisPaginator.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { PageState } from "primevue";

describe("RisPaginator", () => {
  it("renders correctly with default props", async () => {
    render(RisPaginator);

    expect(screen.getByRole("button", { name: "Zurück" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Weiter" })).toBeInTheDocument();
  });

  it("renders customed button labels and pagination", async () => {
    render(RisPaginator, {
      props: {
        prevButtonLabel: "Previous",
        nextButtonLabel: "Next",
        first: 0,
        rows: 10,
        totalRecords: 100,
      },
    });

    expect(
      screen.getByRole("button", { name: "Previous" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
    expect(screen.getByText("Seite 1 von 10")).toBeInTheDocument();
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
