<script setup lang="ts">
defineProps<{
  forceFocus?: boolean;
}>();
</script>

<template>
  <button
    :class="{
      'cursor-pointer p-8 focus-visible:bg-blue-800 focus-visible:text-white focus-visible:outline-none': true,
      'bg-blue-800 text-white': forceFocus,
      'hover:bg-blue-100 hover:text-blue-800': !forceFocus,
    }"
  >
    <slot />
  </button>
</template>
