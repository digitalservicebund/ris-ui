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
</script>

<template>
  <Accordion
    v-model:value="activePanel"
    expand-icon="hidden"
    collapse-icon="hidden"
  >
    <AccordionPanel value="0">
      <AccordionHeader
        :pt="{
          root: tw`ris-label2-bold flex cursor-pointer flex-row items-center gap-8 text-blue-800 outline-blue-800 focus-visible:outline-4 mb-6 outline-offset-4`,
        }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <template v-if="activePanel === '0'">
          <MaterialSymbolsExpandCircleUpRounded v-if="isHovered" />
          <MaterialSymbolsExpandCircleUpOutlineRounded v-else />
          <div>{{ props.headerExpanded }}</div>
        </template>

        <template v-else>
          <MaterialSymbolsExpandCircleDownRounded v-if="isHovered" />
          <MaterialSymbolsExpandCircleDownOutlineRounded v-else />
          <div>{{ props.headerCollapsed }}</div>
        </template>
      </AccordionHeader>

      <AccordionContent>
        <slot />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
