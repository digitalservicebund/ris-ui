<script lang="ts" setup>
import AutoComplete, { type AutoCompleteProps } from "primevue/autocomplete";
import ProgressSpinner from "primevue/progressspinner";
import { ref } from "vue";

export interface AutoCompleteMultipleSuggestion {
  id: string;
  label: string;
  secondaryLabel?: string;
}

export type Props = Pick<
  AutoCompleteProps,
  | "ariaLabel"
  | "ariaLabelledby"
  | "placeholder"
  | "loading"
  | "invalid"
  | "disabled"
> & {
  suggestions: AutoCompleteMultipleSuggestion[];
};

const props = defineProps<Props>();
const model = defineModel<AutoCompleteMultipleSuggestion[]>();

const autoCompleteRef = ref<typeof AutoComplete | null>(null);
defineExpose({ autoCompleteRef });
</script>

<template>
  <AutoComplete
    ref="autoCompleteRef"
    v-bind="$attrs"
    v-model="model"
    :suggestions="props.suggestions"
    :disabled="props.disabled"
    :invalid="props.invalid"
    :loading="props.loading"
    :placeholder="props.placeholder"
    :aria-label="props.ariaLabel"
    :aria-labelledby="props.ariaLabelledby"
    option-label="label"
    multiple
  >
    <template #loader>
      <ProgressSpinner class="absolute inset-y-0 right-8 my-auto mr-1" />
    </template>
    <template #option="slotProps: { option: AutoCompleteMultipleSuggestion }">
      <div
        class="flex min-h-48 flex-col justify-center gap-2 border-l-4 border-transparent px-12 py-10 data-[variant=active]:-ml-4 data-[variant=active]:border-blue-800 data-[variant=active]:bg-blue-200"
      >
        <div class="ris-label1-regular">
          {{ slotProps.option.label }}
        </div>
        <div
          v-if="slotProps.option.secondaryLabel"
          class="ris-label2-regular text-gray-900"
        >
          {{ slotProps.option.secondaryLabel }}
        </div>
      </div>
    </template>
  </AutoComplete>
</template>
