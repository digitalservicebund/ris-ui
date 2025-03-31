import { Meta, StoryObj } from "@storybook/vue3";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";
import ChevronRightIcon from "~icons/mdi/chevron-right";
import ChevronDownIcon from "~icons/mdi/chevron-down";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof DataTable> = {
  // @ts-expect-error Component type broken
  component: DataTable,

  tags: ["autodocs"],

  args: {},

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProducts = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    category: "Accessories",
    quantity: 24,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    category: "Accessories",
    quantity: 61,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Blue Band",
    category: "Fitness",
    quantity: 2,
  },
  {
    id: "1003",
    code: "244wgerg2",
    name: "Blue T-Shirt",
    category: "Clothing",
    quantity: 25,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    category: "Accessories",
    quantity: 73,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "Brown Purse",
    category: "Accessories",
    quantity: 0,
  },
  {
    id: "1006",
    code: "bib36pfvm",
    name: "Chakra Bracelet",
    category: "Accessories",
    quantity: 5,
  },
  {
    id: "1007",
    code: "mbvjkgip5",
    name: "Galaxy Earrings",
    category: "Accessories",
    quantity: 23,
  },
  {
    id: "1008",
    code: "vbb124btr",
    name: "Game Controller",
    category: "Electronics",
    quantity: 2,
  },
  {
    id: "1009",
    code: "cm230f032",
    name: "Gaming Set",
    category: "Electronics",
    quantity: 63,
  },
];

export const Default: Story = {
  args: {
    value: sampleProducts,
    tableStyle: "min-width: 50rem",
  },
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      return { args };
    },
    template: html`
      <div class="card">
        <DataTable v-bind="args">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    `,
  }),
};

export const Expansion: Story = {
  args: {
    value: sampleProducts,
    showHeaders: false,
  },
  render: (args) => ({
    components: { DataTable, Column, ChevronRightIcon, ChevronDownIcon },
    setup() {
      type Product = {
        id: string;
        code: string;
        name: string;
        category: string;
        quantity: number;
      };

      const expandedRows = ref<Product[]>([]);

      return {
        args,
        expandedRows,
      };
    },
    template: html`
      <div class="w-[60%]">
        <DataTable
          v-bind="args"
          v-model:expandedRows="expandedRows"
          dataKey="code"
          rowHover
        >
          <Column :expander="true">
            <template #rowtoggleicon="{ rowExpanded }">
              <ChevronRightIcon v-if="!rowExpanded" />
              <ChevronDownIcon v-else />
            </template>
          </Column>

          <!-- Main row shows only name -->
          <Column field="name" />

          <!-- Expansion area with side-by-side info -->
          <template #expansion="{ data }">
            <div class="flex w-full gap-4 px-32 py-8">
              <span>{{ data.code }}</span>
              <span>{{ data.name }}</span>
              <span>{{ data.quantity }}</span>
              <span>{{ data.category }}</span>
            </div>
          </template>
        </DataTable>
      </div>
    `,
  }),
};
