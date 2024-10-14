<script lang="ts" setup>
import IconChevron from "~icons/mdi/chevron-down";
import AutoComplete, { type AutoCompleteProps } from "primevue/autocomplete";
import ProgressSpinner from "primevue/progressspinner";
import { ref } from "vue";

export interface AutoCompleteSuggestion {
  id: string;
  label: string;
  secondaryLabel?: string;
}

/*
To keep TypeScript for the inner component's props, this wrapper component explicitly declares them
even though they are only passed through.
Ideally, they would be passed on using v-bind="mergeProps($attrs, props)" instead of being declared one-by-one,
but using this approach broke the forwarding of emits.
*/
export type Props = Pick<
  AutoCompleteProps,
  | "dropdown"
  | "ariaLabel"
  | "ariaLabelledby"
  | "delay"
  | "completeOnFocus"
  | "optionDisabled"
  | "typeahead"
  | "scrollHeight"
  | "dropdownMode"
  | "placeholder"
  | "loading"
  | "invalid"
  | "disabled"
  | "forceSelection"
  | "autoOptionFocus"
  | "selectOnFocus"
> & {
  suggestions?: AutoCompleteSuggestion[];
  initialLabel?: string;
};

const props = defineProps<Props>();
const model = defineModel<string>();

const isActiveOption = (option: AutoCompleteSuggestion) => {
  return option.id === model.value;
};

defineOptions({
  inheritAttrs: false,
});

/*
This wrapper component exposes its own v-model, which holds the ID of the currently selected item.
This is different from the PrimeVue AutoComplete behavior, where the model either holds the prefix
currently being typed by the user, or the selected object.
The outer model is changed
- in the @option-select emit, and
- in @update:model-value emit, only if the typed input resets to "".
 */

const innerValue = ref(props.initialLabel ?? model.value);
const onUpdateInnerValue = (
  newValue: string | AutoCompleteSuggestion | undefined,
) => {
  if (typeof newValue === "string") {
    innerValue.value = newValue;
  } else if (newValue && newValue.label) {
    innerValue.value = newValue.label;
  }

  if (newValue === "") {
    model.value = undefined;
  }
};

const autoCompleteRef = ref<typeof AutoComplete | null>(null);
defineExpose({ autoCompleteRef });
</script>

<template>
  <AutoComplete
    ref="autoCompleteRef"
    v-bind="$attrs"
    :suggestions="props.suggestions"
    :model-value="innerValue"
    @update:model-value="onUpdateInnerValue"
    @option-select="(e) => (model = e.value.id)"
    :dropdown="props.dropdown"
    :dropdownMode="props.dropdownMode"
    :disabled="props.disabled"
    :forceSelection="props.forceSelection"
    :placeholder="props.placeholder"
    :ariaLabel="props.ariaLabel"
    :ariaLabelledby="props.ariaLabelledby"
    :delay="props.delay"
    :completeOnFocus="props.completeOnFocus"
    :typeahead="props.typeahead"
    :scrollHeight="props.scrollHeight"
    :loading="props.loading"
    :invalid="props.invalid"
    :autoOptionFocus="props.autoOptionFocus"
    :selectOnFocus="props.selectOnFocus"
    :fluid="true"
    :optionDisabled="props.optionDisabled"
    option-label="label"
    data-key="value"
  >
    <template #loader>
      <ProgressSpinner class="absolute inset-y-0 right-12 my-auto mr-2" />
    </template>
    <template #dropdownicon>
      <IconChevron />
    </template>
    <template #option="slotProps: { option: AutoCompleteSuggestion }">
      <div
        :data-variant="isActiveOption(slotProps.option) && 'active'"
        class="flex min-h-48 flex-col justify-center gap-2 border-l-4 border-transparent px-12 py-10 data-[variant=active]:border-blue-800 data-[variant=active]:bg-blue-200"
      >
        <div class="ris-label1-regular">{{ slotProps.option.label }}</div>
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
