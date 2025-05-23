<script lang="ts" setup>
import { Button, PageState, Paginator, PaginatorProps } from "primevue";
import ChevronLeft from "~icons/mdi/chevron-left";
import ChevronRight from "~icons/mdi/chevron-right";

const props = withDefaults(
  defineProps<
    PaginatorProps & {
      prevButtonLabel?: string;
      nextButtonLabel?: string;
    }
  >(),
  {
    prevButtonLabel: "Zurück",
    nextButtonLabel: "Weiter",
  },
);

/**
 * PageState represents the state of the paginator
 *  page: The current page index (0-based)
 *  first: Index of the first record on the current page
 *  rows: Number of rows per page
 *  pageCount: Total number of pages
 */
const emit = defineEmits<{
  (e: "page", value: PageState): void;
}>();

function handlePageChange(event: PageState) {
  emit("page", event);
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
    <template
      #container="{ page, pageCount, prevPageCallback, nextPageCallback }"
    >
      <div class="flex w-full items-center justify-between px-2 py-1">
        <Button
          :class="{ 'invisible': page === 0 }"
          :aria-hidden="page === 0 ? 'true' : undefined"
          :tabindex="page === 0 ? -1 : undefined"
          :label="prevButtonLabel"
          text
          @click="prevPageCallback"
        >
          <template #icon>
            <ChevronLeft />
          </template>
        </Button>
        <div><span class="font-bold">Seite {{ page + 1 }}</span> von {{ pageCount }}</div>
        <Button
          :class="{ 'invisible': page + 1 === pageCount }"
          :aria-hidden="page + 1 === pageCount ? 'true' : undefined"
          :tabindex="page + 1 === pageCount ? -1 : undefined"
          :label="nextButtonLabel"
          text
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
