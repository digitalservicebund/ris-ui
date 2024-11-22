import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import PanelMenu from "primevue/panelmenu";
import { MenuItem } from "primevue/menuitem";
import { ref } from "vue";

const meta: Meta<typeof PanelMenu> = {
  component: PanelMenu,
  tags: ["autodocs"],
  args: {},

  argTypes: {},
};

type MenuItemWithCount = MenuItem & {
  count?: string;
  items?: MenuItemWithCount[] | undefined;
};

const items: MenuItemWithCount[] = [
  {
    label: "Alle Dokumentarten",
    count: "1.024",
    key: "all",
  },
  {
    label: "Gesetze & Verordnungen",
    count: "1.024",
    key: "N",
  },
  {
    label: "Gerichtsentscheidungen",
    count: "1.024",
    key: "R",
    items: [
      { label: "Alle Gerichtsentscheidungen", count: "1.024", key: "R-A" },
      { label: "Urteil", count: "1.024", key: "R-U" },
      { label: "Beschluss", count: "1.024", key: "R-B" },
      { label: "Sonstige Entscheidungen", count: "1.024", key: "R-S" },
    ],
  },
];

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PanelMenu },
    setup() {
      const expandedKeys = ref({ R: true, "R-A": true });
      return { args, items, expandedKeys };
    },
    template: html`<label class="ris-label2-regular mb-16 block"
        >Dokumentarten</label
      ><PanelMenu
        :model="items"
        v-model:expandedKeys="expandedKeys"
        class="md:w-200 w-full"
        multiple
        ><template #submenuicon><i /></template
      ></PanelMenu>`,
  }),
};
