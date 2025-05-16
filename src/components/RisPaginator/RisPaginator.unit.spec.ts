import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import RisPaginator from "./RisPaginator.vue";

describe("RisPaginator", () => {
  it("renders correctly with default props", async () => {
    const wrapper = shallowMount(RisPaginator);

    expect(wrapper.findComponent("paginator-stub").exists()).toBe(true);
  });
});
