<script setup lang="ts">
import MdiContentCopy from "~icons/mdi/content-copy";
import MdiCheck from "~icons/mdi/check";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    /** Visible text. */
    text: string;

    /**
     * Value that should be copied. If no value is provided, copying will
     * copy the `text` by default.
     */
    value?: string;

    /**
     * Human-readable description of the value that should be copied. This
     * will be used to provide an accessible label for the control.
     *
     * @default "Wert"
     */
    name?: string;
  }>(),
  {
    value: undefined,
    name: "Wert",
  },
);

const copySuccess = ref(false);

async function copy() {
  try {
    await navigator.clipboard.writeText(props.value ?? props.text);
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 1000);
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <button
    :aria-label="`${name} in die Zwischenablage kopieren`"
    :title="`${name} in die Zwischenablage kopieren`"
    class="ris-link2-regular inline-flex items-center gap-4 text-left"
    type="button"
    @click="copy()"
  >
    {{ text }}
    <MdiContentCopy v-if="!copySuccess" class="flex-none" />
    <MdiCheck v-else class="flex-none" />
  </button>
</template>
