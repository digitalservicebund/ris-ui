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

const items: MenuItem[] = [
  {
    label: "Alle Dokumentarten",
    key: "all",
  },
  {
    label: "Gesetze & Verordnungen",
    key: "N",
  },
  {
    label: "Gerichtsentscheidungen",
    key: "R",
    items: [
      { label: "Alle Gerichtsentscheidungen", key: "R-A" },
      { label: "Urteil", key: "R-U" },
      { label: "Beschluss", key: "R-B" },
      { label: "Sonstige Entscheidungen", key: "R-S" },
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
    template: html`<label for="menu" class="ris-label2-regular mb-16 block"
        >Dokumentarten</label
      ><PanelMenu
        id="menu"
        :model="items"
        v-model:expandedKeys="expandedKeys"
        class="md:w-200 w-full"
        multiple
        ><template #submenuicon><i /></template
      ></PanelMenu>`,
  }),
};
