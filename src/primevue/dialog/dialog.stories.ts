import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3";
import PrimevueButton from "primevue/button";
import PrimevueDialog from "primevue/dialog";
import { ref } from "vue";

const meta: Meta<typeof PrimevueDialog> = {
  // @ts-expect-error Component type broken
  component: PrimevueDialog,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { PrimevueDialog, PrimevueButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template: html`
      <PrimevueDialog v-model:visible="visible" modal header="Header">
        <p>This is the content of the modal.</p>

        <template #footer>
          <PrimevueButton
            class="w-full"
            label="Cancel"
            severity="secondary"
            @click="visible = false"
          />

          <PrimevueButton
            class="w-full"
            label="Confirm"
            @click="visible = false"
            autofocus
          />
        </template>
      </PrimevueDialog>

      <PrimevueButton @click="visible = true" label="Show dialog" />
    `,
  }),
};

export const Scrolling: Story = {
  render: (args) => ({
    components: { PrimevueDialog, PrimevueButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template: html`
      <PrimevueDialog v-model:visible="visible" modal header="Header">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>

        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>

        <p>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
          vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi.
        </p>

        <p>
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>

        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis.
        </p>

        <template #footer>
          <PrimevueButton
            class="w-full"
            label="Cancel"
            severity="secondary"
            @click="visible = false"
          />

          <PrimevueButton
            class="w-full"
            label="Confirm"
            @click="visible = false"
            autofocus
          />
        </template>
      </PrimevueDialog>

      <PrimevueButton @click="visible = true" label="Show dialog" />
    `,
  }),
};
