<script lang="ts" setup>
import AutoComplete, {
  AutoCompleteOptionSelectEvent,
  AutoCompleteOptionUnselectEvent,
  type AutoCompleteProps,
} from "primevue/autocomplete";
import ProgressSpinner from "primevue/progressspinner";
import { ref } from "vue";
import RisGhostButton from "@/components/RisGhostButton/RisGhostButton.vue";
import IconChevron from "~icons/mdi/chevron-down";
import { Checkbox } from "primevue";

export interface AutoCompleteMultipleSuggestion {
  id: string;
  label: string;
  secondaryLabel?: string;
}

export type RisAutoCompleteMultipleProps = Pick<
  AutoCompleteProps,
  | "ariaLabel"
  | "ariaLabelledby"
  | "placeholder"
  | "loading"
  | "invalid"
  | "disabled"
> & {
  suggestions: AutoCompleteMultipleSuggestion[];
  disableDropdownTabNavigation?: boolean;
};

const props = defineProps<RisAutoCompleteMultipleProps>();
const model = defineModel<AutoCompleteMultipleSuggestion[]>({ default: [] });

const autoCompleteRef = ref<typeof AutoComplete | null>(null);
defineExpose({ autoCompleteRef });

function onSelect(event: AutoCompleteOptionSelectEvent): void {
  const selectedItem = event.value;
  const selectedId = selectedItem.id;

  const index = model.value.findIndex((v) => v.id === selectedId);

  if (index !== -1) {
    model.value = model.value.filter((v) => v.id !== selectedId);
  } else {
    model.value = [...model.value, selectedItem];
  }
}

function onUnselect(event: AutoCompleteOptionUnselectEvent): void {
  const unselectedId = event.value.id;
  model.value = model.value.filter((v) => v.id !== unselectedId);
}

function isSelected(id: string): boolean {
  return model.value.some((v) => v.id === id);
}
</script>

<template>
  <AutoComplete
    ref="autoCompleteRef"
    v-bind="$attrs"
    :model-value="model"
    :suggestions="props.suggestions"
    :disabled="props.disabled"
    :invalid="props.invalid"
    :loading="props.loading"
    :placeholder="props.placeholder"
    :aria-label="props.ariaLabel"
    :aria-labelledby="props.ariaLabelledby"
    option-label="label"
    multiple
    @option-select="onSelect"
    @option-unselect="onUnselect"
  >
    <template #loader>
      <ProgressSpinner class="absolute inset-y-0 right-8 my-auto mr-1" />
    </template>
    <template #dropdown="slotProps">
      <RisGhostButton
        aria-label="Vorschläge anzeigen"
        aria-haspopup="listbox"
        :tabindex="props.disableDropdownTabNavigation ? -1 : 0"
        @click="slotProps.toggleCallback"
      >
        <IconChevron />
      </RisGhostButton>
    </template>
    <template #option="slotProps: { option: AutoCompleteMultipleSuggestion }">
      <div
        class="flex min-h-48 flex-row items-center gap-10 border-l-4 border-transparent px-12 py-10 data-[variant=active]:-ml-4 data-[variant=active]:border-blue-800 data-[variant=active]:bg-blue-200"
      >
        <Checkbox
          :model-value="isSelected(slotProps.option.id)"
          :binary="true"
          :tabindex="-1"
          :form-control="{ novalidate: true }"
        >
        </Checkbox>
        <div class="flex flex-col justify-center">
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
      </div>
    </template>
  </AutoComplete>
</template>
