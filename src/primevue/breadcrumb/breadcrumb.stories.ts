import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Breadcrumb from "primevue/breadcrumb";
import { vueRouter } from "storybook-vue3-router";
import { ref } from "vue";
import IcBaselineChevronRight from "~icons/ic/baseline-chevron-right";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof Breadcrumb> = {
  // @ts-expect-error Component type broken
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Breadcrumb,
      IcBaselineChevronRight,
    },
    setup() {
      const items = ref([
        { label: "Startseite", type: "home", route: "/" },
        { label: "Gesetze & Verordnungen", route: "/laws" },
        { label: "BGB Bürgerliches Gesetzbuch", route: "/bgb" },
        { label: "Buch 2", route: "/book-2" },
        { label: "Abschnitt 3" },
        { label: "Untertitel 2" },
        { label: "Kapitel 2" },
        { label: "§ 312e Verletzung von Informationspflichten über Kosten" },
      ]);

      return { items };
    },
    template: html`
      <Breadcrumb :model="items">
        <template #separator>
          <IcBaselineChevronRight width="16px" height="16px" />
        </template>
      </Breadcrumb>
    `,
  }),
  decorators: [
    vueRouter(), // This adds basic router functionality for the story
  ],
};
