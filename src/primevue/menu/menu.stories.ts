import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import PrimevueMenu from "primevue/menu";
import PrimevueButton from "primevue/button";
import { MenuItem } from "primevue/menuitem";
import MdiDotsVertical from "~icons/mdi/dots-vertical";
import EyeOutline from "~icons/mdi/eye-outline";
import MdiTrayDownload from "~icons/mdi/tray-download";
import { useTemplateRef } from "vue";

const meta: Meta<typeof PrimevueMenu> = {
  // @ts-expect-error Component type broken
  component: PrimevueMenu,
  tags: ["autodocs"],
  args: {
    model: [
      {
        label: "XML im Browser anzeigen",
        icon: "view",
      },
      {
        label: "XML herunterladen",
        icon: "download",
      },
      { label: "Andere Aktion" },
    ] as MenuItem[],
  },

  argTypes: {},
};

const getIcon = (name: string) => {
  switch (name) {
    case "view":
      return EyeOutline;
    case "download":
      return MdiTrayDownload;
  }
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueMenu },
    setup() {
      return { args, getIcon };
    },
    template: html`<PrimevueMenu v-bind="args">
      <template #itemicon="{item}"
        ><component :is="getIcon(item.icon)" v-if="item.icon"
      /></template>
    </PrimevueMenu>`,
  }),
};

export const Popup: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueMenu, PrimevueButton, MdiDotsVertical },
    setup() {
      const menuRef = useTemplateRef<typeof PrimevueMenu>("menu");

      const toggle = (event: Event) => {
        // @ts-expect-error Component type broken
        menuRef.value?.toggle(event);
      };
      return { args, toggle, getIcon };
    },
    template: html`<div>
      <PrimevueButton label="Aktionen" text @click="toggle">
        <template #icon> <MdiDotsVertical /> </template></PrimevueButton
      ><PrimevueMenu :popup="true" v-bind="args" ref="menu"
        ><template #itemicon="{item}"
          ><component :is="getIcon(item.icon)" v-if="item.icon" /></template
      ></PrimevueMenu>
    </div> `,
  }),
};
