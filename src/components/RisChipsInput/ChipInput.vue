<script lang="ts" setup>
import { onMounted, ref, useId } from "vue";
import { InputMask, InputText } from "primevue";
import IconSubdirectoryArrowLeft from "~icons/ic/baseline-subdirectory-arrow-left";

const props = defineProps<{
  ariaLabel?: string;
  placeholder?: string;
  hasError?: boolean;
  mask?: string;
  shouldFocusOnMount?: boolean;
}>();

defineEmits<{
  complete: void;
}>();

const model = defineModel<string>({ required: true });

const inputId = useId();

const inputRef = ref<{ $el: HTMLElement } | null>(null);

function focusNativeInput() {
  const nativeInput = inputRef.value?.$el;
  if (nativeInput) {
    nativeInput.focus();
  }
}

onMounted(() => {
  if (props.shouldFocusOnMount) {
    focusNativeInput();
  }
});

defineExpose({
  focus: () => focusNativeInput(),
});
</script>

<template>
  <span class="flex items-center justify-start">
    <span :id="`enter-note-for-${inputId}`" class="sr-only">
      Enter drücken, um die Eingabe zu bestätigen
    </span>
    <InputMask
      v-if="mask"
      :id="inputId"
      ref="inputRef"
      v-model="model"
      :aria-describedby="`enter-note-for-${inputId}`"
      :aria-label="ariaLabel"
      :mask="mask"
      :placeholder="placeholder"
      :pt="{
        pcInputText: {
          root: {
            class:
              'bg-transparent inline-block w-auto outline-none field-sizing-content',
          },
        },
      }"
      @blur="$emit('complete')"
      @keydown.enter.stop.prevent="$emit('complete')"
    />
    <InputText
      v-else
      :id="inputId"
      ref="inputRef"
      v-model="model"
      :aria-describedby="`enter-note-for-${inputId}`"
      :aria-label="ariaLabel"
      :pt="{
        root: {
          class:
            'bg-transparent inline-block w-auto outline-none field-sizing-content',
        },
      }"
      :placeholder="placeholder"
      @blur="$emit('complete')"
      @keydown.enter.stop.prevent="$emit('complete')"
    />
    <span class="ml-6 text-gray-900">
      <IconSubdirectoryArrowLeft height="16px" width="16px" />
    </span>
  </span>
</template>
