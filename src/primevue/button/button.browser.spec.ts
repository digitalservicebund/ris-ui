import { Button } from "primevue";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-vue";
import { page } from "vitest/browser";

describe("button", () => {
  it("renders", () => {
    render(Button, {
      props: {
        label: "Hello world",
      },
    });

    expect(page.getByRole("button")).toHaveAccessibleName("Hello world");
  });

  it("matches screenshot", () => {
    render(Button, {
      props: {
        label: "Test",
      },
    });

    expect(page.getByRole("button")).toMatchScreenshot();
  });
});
