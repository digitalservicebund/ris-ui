import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";
import SingleAccordion from ".";
import GravityUiCircleChevronDownFill from "~icons/gravity-ui/circle-chevron-down-fill";
import GravityUiCircleChevronDown from "~icons/gravity-ui/circle-chevron-down";
import GravityUiCircleChevronUpFill from "~icons/gravity-ui/circle-chevron-up-fill";
import GravityUiCircleChevronUp from "~icons/gravity-ui/circle-chevron-up";
import { nextTick, ref } from "vue";

describe("Accordion.vue", () => {
  it("changes icon from normal to filled on hover", async () => {
    const wrapper = mount(SingleAccordion, {
      props: {
        headerCollapsed: "Show More",
        headerExpanded: "Show Less",
      },
      slots: {
        default: '<div class="slot-content">Slot Content</div>',
      },
    });

    const header = wrapper.find(".flex.flex-row.space-x-8.py-24");
    await header.trigger("mouseover");
    expect(wrapper.findComponent(GravityUiCircleChevronDownFill).exists()).toBe(
      true,
    );
    await header.trigger("mouseleave");
    expect(wrapper.findComponent(GravityUiCircleChevronDown).exists()).toBe(
      true,
    );
    expect(header.text()).toContain("Show More");
    expect(wrapper.find(".slot-content").text()).toContain("Slot Content");
  });

  it("changes icon and header when expanded", async () => {
    const wrapper = mount(SingleAccordion, {
      props: {
        headerCollapsed: "Show More",
        headerExpanded: "Show Less",
        modelValue: true,
      },
      slots: {
        default: '<div class="slot-content">Slot Content</div>',
      },
    });

    const header = wrapper.find(".flex.flex-row.space-x-8.py-24");
    await header.trigger("mouseover");
    expect(wrapper.findComponent(GravityUiCircleChevronUpFill).exists()).toBe(
      true,
    );
    await header.trigger("mouseleave");
    expect(wrapper.findComponent(GravityUiCircleChevronUp).exists()).toBe(true);
    expect(header.text()).toContain("Show Less");
  });

  it("updates v-model when accordion is opened or closed", async () => {
    const modelValue = ref(false);
    const wrapper = mount(SingleAccordion, {
      props: {
        modelValue: modelValue.value,
        "onUpdate:modelValue": (e: boolean) => (modelValue.value = e),
        headerCollapsed: "Collapsed Header",
        headerExpanded: "Expanded Header",
      },
    });

    // Initially, the accordion should be closed
    expect(modelValue.value).toBe(false);
    expect(wrapper.text()).toContain("Collapsed Header");

    // Simulate opening the accordion
    await wrapper.find(".flex.flex-row.space-x-8.py-24").trigger("click");
    await nextTick();
    // The v-model should be updated to true, and the header should change

    expect(modelValue.value).toBe(true);
    // Manually update the modelValue
    await wrapper.setProps({ modelValue: modelValue.value });
    expect(wrapper.text()).toContain("Expanded Header");

    // Simulate closing the accordion
    await wrapper.find(".flex.flex-row").trigger("click");
    await nextTick();

    // The v-model should be updated back to false, and the header should change back
    expect(modelValue.value).toBe(false);
    // Manually update the modelValue
    await wrapper.setProps({ modelValue: modelValue.value });
    expect(wrapper.text()).toContain("Collapsed Header");
  });

  it("responds to external v-model changes", async () => {
    const modelValue = ref(false);
    const wrapper = mount(SingleAccordion, {
      props: {
        modelValue: modelValue.value,
        "onUpdate:modelValue": (e: boolean) => (modelValue.value = e),
        headerCollapsed: "Collapsed Header",
        headerExpanded: "Expanded Header",
      },
    });

    // Initially, the accordion should be closed
    expect(wrapper.text()).toContain("Collapsed Header");

    // Simulate an external update to the v-model
    modelValue.value = true;
    await wrapper.setProps({ modelValue: modelValue.value });
    await nextTick();

    // The accordion should now be open
    expect(wrapper.text()).toContain("Expanded Header");

    // Simulate closing from external source
    modelValue.value = false;
    await wrapper.setProps({ modelValue: modelValue.value });
    await nextTick();

    // The accordion should now be closed again
    expect(wrapper.text()).toContain("Collapsed Header");
  });
});
