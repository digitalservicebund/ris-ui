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
          summary: "Success message",
          detail: "This is a success message.",
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
          summary: "Info message",
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
          summary: "Warning message",
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
          summary: "Error message",
          detail: "This is an error message.",
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
          summary: "Success",
          detail: "Something worked.",
        });
        toast.add({
          severity: "info",
          summary: "Info",
          detail: "Some info",
        });
        toast.add({
          severity: "warn",
          summary: "Warn",
          detail: "Something kind of worked.",
        });
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "Something didn't work.",
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
          summary: "Error message",
          detail: "This is an error message.",
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
          summary: "Info message",
          detail: "This is an informational message.",
        });
      };

      return { args, showToast };
    },
    template: html`
      <Toast v-bind="args">
        <template #message="slot">
          <div class="w-320">
            <p class="ris-body2-bold">{{ slot.message.summary }}</p>
            <p class="ris-body2-regular">{{ slot.message.detail }}</p>
            <div class="mt-16 flex gap-8">
              <PrimevueButton severity="secondary" label="Action 1" />
              <PrimevueButton severity="primary" label="Action 2" />
            </div>
          </div>
        </template>
      </Toast>
      <PrimevueButton label="With template" @click="showToast()" />
    `,
  }),
};
