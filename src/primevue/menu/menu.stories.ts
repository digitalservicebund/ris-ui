import type { Meta, StoryObj } from "@storybook/vue3-vite";
import PrimevueButton from "primevue/button";
import PrimevueMenu from "primevue/menu";
import type { MenuItem } from "primevue/menuitem";
import { useTemplateRef } from "vue";
import IcBaselineDownload from "~icons/ic/baseline-download";
import IcBaselineMoreHoriz from "~icons/ic/baseline-more-horiz";
import IcBaselineRemoveRedEye from "~icons/ic/baseline-remove-red-eye";
import { html } from "@/lib/tags";

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
      return IcBaselineRemoveRedEye;
    case "download":
      return IcBaselineDownload;
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
    components: { PrimevueMenu, PrimevueButton, IcBaselineMoreHoriz },
    setup() {
      const menuRef = useTemplateRef<typeof PrimevueMenu>("menu");

      const toggle = (event: Event) => {
        // @ts-expect-error Component type broken
        menuRef.value?.toggle(event);
      };
      return { args, toggle, getIcon };
    },
    template: html`<div>
      <PrimevueButton label="Aktionen" @click="toggle" severity="secondary">
        <template #icon> <IcBaselineMoreHoriz /> </template></PrimevueButton
      ><PrimevueMenu :popup="true" v-bind="args" ref="menu"
        ><template #itemicon="{item}"
          ><component :is="getIcon(item.icon)" v-if="item.icon" /></template
      ></PrimevueMenu>
    </div> `,
  }),
};
