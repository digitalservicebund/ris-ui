<script setup lang="ts">
import GravityUiCircleChevronUpFill from "~icons/gravity-ui/circle-chevron-up-fill";
import GravityUiCircleChevronUp from "~icons/gravity-ui/circle-chevron-up";
import GravityUiCircleChevronDownFill from "~icons/gravity-ui/circle-chevron-down-fill";
import GravityUiCircleChevronDown from "~icons/gravity-ui/circle-chevron-down";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import { computed, ref } from "vue";

const isHovered = ref(false);

const props = defineProps<{
  headerCollapsed: string;
  headerExpanded: string;
}>();

const activeModel = defineModel<boolean>({ default: false });

const activePanel = computed({
  get: () => {
    return activeModel.value ? "0" : "";
  },
  set: (value) => {
    activeModel.value = value === "0";
  },
});

const accordionHeaderClasses = "flex flex-row space-x-8 py-24 items-center";
</script>

<template>
  <Accordion
    v-model:value="activePanel"
    expand-icon="hidden"
    collapse-icon="hidden"
    class="p"
  >
    <AccordionPanel value="0">
      <AccordionHeader>
        <div
          v-if="activePanel === '0'"
          :class="accordionHeaderClasses"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <div class="flex flex-col gap-4">
            <GravityUiCircleChevronUpFill v-if="isHovered" />
            <GravityUiCircleChevronUp v-else />
          </div>
          <div class="flex flex-col gap-4">{{ props.headerExpanded }}</div>
        </div>
        <div
          v-else
          :class="accordionHeaderClasses"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <div class="flex flex-col gap-4">
            <GravityUiCircleChevronDownFill v-if="isHovered" />
            <GravityUiCircleChevronDown v-else />
          </div>
          <div class="flex flex-col gap-4">{{ props.headerCollapsed }}</div>
        </div>
      </AccordionHeader>
      <AccordionContent>
        <slot />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
