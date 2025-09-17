<script setup lang="ts">
import { tw } from "@/lib/tags";
import Accordion from "primevue/accordion";
import AccordionContent from "primevue/accordioncontent";
import AccordionHeader from "primevue/accordionheader";
import AccordionPanel from "primevue/accordionpanel";
import { computed, ref } from "vue";
import MaterialSymbolsExpandCircleDownOutlineRounded from "~icons/material-symbols/expand-circle-down-outline-rounded";
import MaterialSymbolsExpandCircleDownRounded from "~icons/material-symbols/expand-circle-down-rounded";
import MaterialSymbolsExpandCircleUpOutlineRounded from "~icons/material-symbols/expand-circle-up-outline-rounded";
import MaterialSymbolsExpandCircleUpRounded from "~icons/material-symbols/expand-circle-up-rounded";

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

const accordionHeaderClasses = tw`ris-label2-bold flex flex-row items-center gap-8 text-blue-800`;
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
          <MaterialSymbolsExpandCircleUpRounded v-if="isHovered" />
          <MaterialSymbolsExpandCircleUpOutlineRounded v-else />
          <div>{{ props.headerExpanded }}</div>
        </div>

        <div
          v-else
          :class="accordionHeaderClasses"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <MaterialSymbolsExpandCircleDownRounded v-if="isHovered" />
          <MaterialSymbolsExpandCircleDownOutlineRounded v-else />
          <div>{{ props.headerCollapsed }}</div>
        </div>
      </AccordionHeader>
      <AccordionContent>
        <slot />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
