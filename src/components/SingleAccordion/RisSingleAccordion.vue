<script setup lang="ts">
import MaterialSymbolsExpandCircleDownRounded from "~icons/material-symbols/expand-circle-down-rounded";
import MaterialSymbolsExpandCircleDownOutlineRounded from "~icons/material-symbols/expand-circle-down-outline-rounded";
import MaterialSymbolsExpandCircleUpRounded from "~icons/material-symbols/expand-circle-up-rounded";
import MaterialSymbolsExpandCircleUpOutlineRounded from "~icons/material-symbols/expand-circle-up-outline-rounded";
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
            <MaterialSymbolsExpandCircleUpRounded v-if="isHovered" />
            <MaterialSymbolsExpandCircleUpOutlineRounded v-else />
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
            <MaterialSymbolsExpandCircleDownRounded v-if="isHovered" />
            <MaterialSymbolsExpandCircleDownOutlineRounded v-else />
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
