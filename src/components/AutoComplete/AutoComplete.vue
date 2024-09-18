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
  | "fluid"
> & {
  suggestions?: AutoCompleteSuggestion[];
  initialLabel?: string;
};

const props = defineProps<Props>(); // these props will have to be passed through to the wrapped component explicitly, the rest will be forwarded through $attrs
const model = defineModel<string>();

const isActiveOption = (option: AutoCompleteSuggestion) => {
  return option.id === model.value;
};

defineOptions({
  inheritAttrs: false,
});

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
</script>

<template>
  <AutoComplete
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
    :fluid="props.fluid"
    option-label="label"
    data-key="value"
    class="relative w-full"
    input-class="w-full h-48 pl-20 pr-48 bg-white border-radius-0 shadow-[inset_0_0_0_2px] hover:shadow-[inset_0_0_0_4px] focus:shadow-[inset_0_0_0_4px] shadow-blue-800 hover:shadow-blue-800 focus:shadow-blue-800 outline-none border-none"
    dropdown-class="absolute inset-y-0 right-20"
    panel-class="bg-white shadow-md px-8 py-12 max-h-56 overflow-auto"
    pt:option="hover:bg-blue-100 data-[p-focus=true]:bg-blue-200"
  >
    <template #loader>
      <ProgressSpinner
        unstyled
        class="!absolute inset-y-0 right-20 my-auto mr-2"
      />
    </template>
    <template #dropdownicon>
      <IconChevron />
    </template>
    <template #option="slotProps: { option: AutoCompleteSuggestion }">
      <div
        :data-variant="isActiveOption(slotProps.option) && 'active'"
        class="flex h-48 items-center gap-8 px-12 py-16 data-[variant=active]:border-l-4 data-[variant=active]:border-blue-800 data-[variant=active]:bg-blue-200"
      >
        {{ slotProps.option.label }}
      </div>
    </template>
  </AutoComplete>
</template>
