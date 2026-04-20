import type { Meta, StoryObj } from "@storybook/vue3-vite";
import PrimevueButton from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";
import IcBaselineErrorOutline from "~icons/ic/baseline-error-outline";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof ConfirmDialog> = {
  // @ts-expect-error Component type broken
  component: ConfirmDialog,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ConfirmDialog, PrimevueButton, IcBaselineErrorOutline },
    setup() {
      const confirm = useConfirm();

      const showConfirm = () => {
        confirm.require({
          header: "Verkündung existiert bereits",
          message:
            "Diese Verkündung befindet sich bereits im System. Möchten Sie die bestehende Verkündung überschreiben?",
          acceptProps: {
            label: "Überschreiben",
            severity: "secondary",
            autofocus: false,
          },
          rejectProps: {
            label: "Abbrechen",
            severity: "primary",
            autofocus: true,
          },
          acceptClass: "w-full",
          rejectClass: "w-full",
        });
      };

      return { args, showConfirm };
    },
    template: html`
      <ConfirmDialog v-bind="args">
        <template #icon>
          <IcBaselineErrorOutline class="text-red-800" />
        </template>
      </ConfirmDialog>

      <PrimevueButton @click="showConfirm()" label="Show dialog" />
    `,
  }),
};
