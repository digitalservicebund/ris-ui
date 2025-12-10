<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { InputMask, InputText } from "primevue";
import IconSubdirectoryArrowLeft from "~icons/ic/baseline-subdirectory-arrow-left";

const props = defineProps<{
  ariaLabel?: string;
  placeholder?: string;
  hasError?: boolean;
  mask?: string;
  shouldFocusOnMount?: boolean;
  id: string;
}>();

const emit = defineEmits<{
  complete: [void];
}>();

const model = defineModel<string>({ required: true });

const inputRef = ref<{ $el: HTMLElement } | null>(null);
const isInputFocused = ref(false);

function focusNativeInput() {
  const nativeInput = inputRef.value?.$el;
  if (nativeInput) {
    nativeInput.focus();
  }
}

function onBlur() {
  isInputFocused.value = false;
  emit("complete");
}

function onFocus() {
  isInputFocused.value = true;
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
    <span :id="`enter-note-for-${id}`" class="sr-only">
      Enter drücken, um die Eingabe zu bestätigen
    </span>
    <InputMask
      v-if="mask"
      :id="id"
      ref="inputRef"
      v-model="model"
      :aria-describedby="`enter-note-for-${id}`"
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
      @focus="onFocus"
      @blur="onBlur"
      @keydown.enter.stop.prevent="$emit('complete')"
    />
    <InputText
      v-else
      :id="id"
      ref="inputRef"
      v-model="model"
      :aria-describedby="`enter-note-for-${id}`"
      :aria-label="ariaLabel"
      :pt="{
        root: {
          class:
            'bg-transparent inline-block w-auto outline-none field-sizing-content',
        },
      }"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.enter.stop.prevent="$emit('complete')"
    />
    <span v-if="isInputFocused" class="ml-6 text-gray-900">
      <IconSubdirectoryArrowLeft height="1rem" width="1rem" />
    </span>
  </span>
</template>
