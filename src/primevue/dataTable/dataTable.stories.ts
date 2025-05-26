import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { ref } from "vue";

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
  },
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      return { args };
    },
    template: html`
      <div class="card">
        <DataTable v-bind="args" tableStyle="min-width: 50rem">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    `,
  }),
};

export const Selectable: Story = {
  args: {
    value: sampleProducts,
  },
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      const selectedProducts = ref([]);
      return { args, selectedProducts };
    },
    template: html`
      <div class="card">
        <DataTable
          v-bind="args"
          v-model:selection="selectedProducts"
          tableStyle="min-width: 50rem"
          dataKey="id"
          selectionMode="multiple"
          highlightOnSelect
        >
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    `,
  }),
};
export const Loading: Story = {
  args: {
    value: [],
  },
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      return { args };
    },
    template: html`
      <div style="margin-top: -10px;">
        <DataTable v-bind="args" loading>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    `,
  }),
};

export const Empty: Story = {
  args: {
    value: [],
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
          <template #empty>
            <div>Keine Daten gefunden.</div>
          </template>
        </DataTable>
      </div>
    `,
  }),
};
