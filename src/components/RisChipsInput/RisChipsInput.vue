<script lang="ts" setup>
import { computed, ref } from "vue";
import IconCancel from "~icons/ic/baseline-cancel";
import ChipInput from "./ChipInput.vue";

const props = defineProps<{
  ariaLabel?: string;
  hasError?: boolean;
  mask?: string;
  placeholder?: string;
}>();

const model = defineModel<string[]>({ required: true });

const newChipInputRef = ref<HTMLInputElement | null>(null);

const editingChipIndex = ref<number | null>(null);
const newChipText = ref<string>("");

function toggleChipEditMode(chipIndex: number) {
  editingChipIndex.value = chipIndex;
}

function onAddChip(value: string) {
  if (!value) return;

  model.value = [...model.value, value.trim()];
  newChipText.value = "";
}

function onComplete() {
  model.value = [...model.value].filter(Boolean);
  editingChipIndex.value = null;
}

function onDeleteChip(index: number) {
  model.value = model.value.filter((_, i) => i !== index);

  editingChipIndex.value = null;
}

function focusNewChipInput() {
  if (!editingChipIndex.value) {
    newChipInputRef.value?.focus();
  }
}

const conditionalClasses = computed(() => ({
  "!shadow-red-800 !bg-red-200": props.hasError,
}));
</script>

<template>
  <div
    class="shadow-blue flex min-h-48 w-full cursor-text flex-row flex-wrap gap-8 bg-white p-8 shadow-blue-800"
    :class="conditionalClasses"
    :aria-label="ariaLabel"
    role="group"
    @click="focusNewChipInput"
  >
    <ul class="contents">
      <li
        v-for="(chip, i) in model"
        :key="i"
        class="ris-body2-regular flex items-center rounded-full bg-blue-300 py-6 pr-4 pl-16 outline-none"
        :aria-label="`${model[i]}`"
      >
        <ChipInput
          v-if="editingChipIndex === i"
          v-model="model[i]"
          :mask="mask"
          should-focus-on-mount
          @complete="onComplete"
        />
        <button
          v-else
          aria-label="Eintrag bearbeiten"
          class="cursor-pointer group-focus:bg-blue-900 group-focus:text-white"
          type="button"
          @dblclick="toggleChipEditMode(i)"
          @keydown.enter.stop.prevent="toggleChipEditMode(i)"
        >
          <span>
            {{ chip }}
          </span>
        </button>
        <button
          aria-label="Eintrag löschen"
          class="mx-6 flex h-full cursor-pointer items-center rounded-r-full group-focus:bg-blue-900 group-focus:text-white"
          type="button"
          @click="onDeleteChip(i)"
          @keydown.enter.stop.prevent="onDeleteChip(i)"
        >
          <IconCancel />
        </button>
      </li>
    </ul>
    <ChipInput
      v-if="editingChipIndex === null"
      ref="newChipInputRef"
      v-model="newChipText"
      :mask="mask"
      aria-label="Eintrag hinzufügen"
      :placeholder="placeholder"
      @complete="onAddChip(newChipText)"
    />
  </div>
</template>
