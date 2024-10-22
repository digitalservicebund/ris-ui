import { Meta, StoryObj } from "@storybook/vue3";
import Breadcrumb from "primevue/breadcrumb";
import { html } from "@/lib/tags.ts";
import { ref } from "vue";
import { vueRouter } from "storybook-vue3-router";
import HomeOutlineIcon from "~icons/material-symbols/home-outline";
import ChevronRightIcon from "~icons/material-symbols/chevron-right";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Breadcrumb, HomeOutlineIcon, ChevronRightIcon },
    setup() {
      const items = ref([
        { label: "", type: "home", route: "/" },
        { label: "Gesetze & Verordnungen", route: "/laws" },
        { label: "BGB Bürgerliches Gesetzbuch", route: "/bgb" },
        { label: "Buch 2", route: "/book-2" },
        { label: "Abschnitt 3" },
        { label: "Untertitel 2" },
        { label: "Kapitel 2" },
        { label: "§ 312e Verletzung von Informationspflichten über Kosten" },
      ]);

      return { args, items };
    },
    template: html`
      <div class="card flex justify-center">
        <Breadcrumb :model="items">
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a
                :href="href"
                v-bind="props.action"
                @click="navigate"
                class="line-clamp-1"
              >
                <template v-if="item.type === 'home'">
                  <HomeOutlineIcon />
                </template>
                <template v-else> {{ item.label }} </template>
              </a>
            </router-link>
            <span v-else class="line-clamp-1">{{ item.label }}</span>
          </template>
          <template #separator>
            <ChevronRightIcon />
          </template>
        </Breadcrumb>
      </div>
    `,
  }),
  decorators: [
    vueRouter(), // This adds basic router functionality for the story
  ],
};
