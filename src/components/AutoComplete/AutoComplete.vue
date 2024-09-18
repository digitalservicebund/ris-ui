<script lang="ts" setup>
import IconChevron from "~icons/mdi/chevron-down";
import AutoComplete, { type AutoCompleteProps } from "primevue/autocomplete";
import { computed, mergeProps } from "vue";
import ProgressSpinner from "primevue/progressspinner";

const props =
  defineProps<
    Pick<
      AutoCompleteProps,
      "modelValue" | "dataKey" | "optionLabel" | "suggestions"
    >
  >(); // these props will have to be passed through to the wrapped component explicitly, the rest will be forwarded through $attrs

const modelValueKey = computed(() => {
  if (
    typeof props.modelValue === "string" ||
    typeof props.modelValue === "number"
  ) {
    return props.modelValue;
  }
  if (props.dataKey) {
    return props.modelValue ? props.modelValue[props.dataKey] : undefined;
  }
  return props.modelValue;
});

const getOptionKey = (option: unknown) => {
  if (props.dataKey && option)
    return (option as Record<string, unknown>)[props.dataKey];
  return option;
};

const getOptionLabel = (option: unknown) => {
  if (typeof props.optionLabel === "function") return props.optionLabel(option);
  if (props.optionLabel && option) {
    // simple property access
    return (option as Record<string, unknown>)[props.optionLabel];
  }
  return option;
};

const isActiveOption = (option: unknown) => {
  return getOptionKey(option) === modelValueKey.value;
};
</script>

<template>
  <AutoComplete
    v-bind="mergeProps($attrs, props)"
    unstyled
    class="relative w-full"
    input-class="w-full h-48 pl-20 pr-48 bg-white border-radius-0 shadow-[inset_0_0_0_2px] hover:shadow-[inset_0_0_0_4px] focus:shadow-[inset_0_0_0_4px] shadow-blue-800 hover:shadow-blue-800 focus:shadow-blue-800 outline-none border-none"
    dropdown-class="absolute inset-y-0 right-20"
    panel-class="bg-white px-8 py-12 max-h-56 overflow-auto"
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
    <template #option="slotProps">
      <div
        :data-variant="isActiveOption(slotProps.option) && 'active'"
        class="flex h-48 items-center gap-8 px-12 py-16 data-[variant=active]:border-l-4 data-[variant=active]:border-blue-800 data-[variant=active]:bg-blue-200"
      >
        {{ getOptionLabel(slotProps.option) }}
      </div>
    </template>
  </AutoComplete>
</template>
