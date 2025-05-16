<script lang="ts" setup>
import { Button, PageState, Paginator, PaginatorProps } from "primevue";
import ChevronLeft from "~icons/mdi/chevron-left";
import ChevronRight from "~icons/mdi/chevron-right";

const props = withDefaults(
  defineProps<PaginatorProps & {
    prevButtonLabel?: string;
    nextButtonLabel?: string;
  }>(),
  {
    prevButtonLabel: 'Zurück',
    nextButtonLabel: 'Weiter',
  }
);

const emit = defineEmits<{
  (e: 'page', value: PageState): void;
}>();

function handlePageChange(event: PageState) {
  emit('page', event);
}
</script>

<template>
  <Paginator
    v-bind="$attrs"
    :first="props.first"
    :rows="props.rows"
    :total-records="props.totalRecords"
    @page="handlePageChange"
  >
    <template #container="{page, pageCount, prevPageCallback, nextPageCallback}">
      <div class="flex items-center w-full py-1 px-2 justify-between">
        <Button
          :label="prevButtonLabel"
          severity="secondary"
          @click="prevPageCallback"
        >
          <template #icon>
            <ChevronLeft />
          </template>
        </Button>
        <div class="text-bold">
          Seite {{ page + 1 }} von {{ pageCount }}
        </div>
        <Button
          :label="nextButtonLabel"
          severity="secondary"
          @click="nextPageCallback"
        >
          <template #icon>
            <ChevronRight class="order-last" />
          </template>
        </Button>
      </div>
    </template>
  </Paginator>
</template>
