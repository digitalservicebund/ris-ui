import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3";
import PrimevueButton from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const meta: Meta<typeof Toast> = {
  component: Toast,

  // No autodocs here on purpose because having multiple stories creating
  // toasts on the same page causes chaos

  args: {
    position: "top-right",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "success",
          summary: "Verkündung erfolgreich hochgeladen",
          detail: "Sie können mit der Arbeit an der neuen Verkündung beginnen.",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Success" @click="showToast()" />
    `,
  }),
};

export const Info: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "info",
          summary: "Info Message",
          detail: "This is an informational message.",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Info" @click="showToast()" />
    `,
  }),
};

export const WarningWithAutoClose: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "warn",
          summary: "This is a warning",
          detail: "This is a warning message.",
          life: 3000,
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Warning" @click="showToast()" />
    `,
  }),
};

export const Error: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "An error occurred.",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Error" @click="showToast()" />
    `,
  }),
};

export const MultipleToasts: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "success",
          summary: "Verkündung erfolgreich hochgeladen",
          detail: "Sie können mit der Arbeit an der neuen Verkündung beginnen.",
        });
        toast.add({
          severity: "info",
          summary: "Info",
          detail: "Message Content",
        });
        toast.add({
          severity: "warn",
          summary: "Warn",
          detail: "Message Content",
        });
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "Message Content",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Multiple toasts" @click="showToast()" />
    `,
  }),
};

export const NotClosableShortLived: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "An error occurred.",
          closable: false,
          life: 5000,
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args" />
      <PrimevueButton label="Error" @click="showToast()" />
    `,
  }),
};

export const WithTemplate: Story = {
  render: (args) => ({
    components: { Toast, PrimevueButton },
    setup() {
      const toast = useToast();

      const showToast = () => {
        toast.add({
          severity: "info",
          summary: "Info",
          detail: "Message content",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args">
        <template #message="slot">
          <div class="w-320">
            <p class="ris-label1-bold">{{ slot.message.summary }}</p>
            <p class="ris-label1-regular">{{ slot.message.detail }}</p>
            <div class="mt-16 flex gap-8">
              <PrimevueButton severity="secondary" label="Action 1" />
              <PrimevueButton severity="primary" label="Action 2" />
            </div>
          </div>
        </template>
      </Toast>
      <PrimevueButton label="Error" @click="showToast()" />
    `,
  }),
};
