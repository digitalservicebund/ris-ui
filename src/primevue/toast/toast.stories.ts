import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3";
import Btn from "primevue/button";
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
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showSuccess = () => {
        toast.add({
          severity: "success",
          summary: "Verkündung erfolgreich hochgeladen",
          detail: "Sie können mit der Arbeit an der neuen Verkündung beginnen.",
        });
      };

      return { args, showSuccess };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Success" @click="showSuccess" />
      </div>
    `,
  }),
};

export const Info: Story = {
  render: (args) => ({
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showInfo = () => {
        toast.add({
          severity: "info",
          summary: "Info Message",
          detail: "This is an informational message.",
        });
      };

      return { args, showInfo };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Info" @click="showInfo" />
      </div>
    `,
  }),
};

export const WarningWithAutoClose: Story = {
  render: (args) => ({
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showWarn = () => {
        toast.add({
          severity: "warn",
          summary: "This is a warning",
          detail: "This is a warning message.",
          life: 3000,
        });
      };

      return { args, showWarn };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Warning" @click="showWarn" />
      </div>
    `,
  }),
};

export const Error: Story = {
  render: (args) => ({
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showError = () => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "An error occurred.",
        });
      };

      return { args, showError };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Error" @click="showError" />
      </div>
    `,
  }),
};

export const MultipleToasts: Story = {
  render: (args) => ({
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showMultiple = () => {
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

      return { args, showMultiple };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Multiple Toasts" @click="showMultiple()" />
      </div>
    `,
  }),
};

export const NotClosableShortLived: Story = {
  render: (args) => ({
    components: { Toast, Btn },
    setup() {
      const toast = useToast();

      const showError = () => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "An error occurred.",
          closable: false,
          life: 5000,
        });
      };

      return { args, showError };
    },
    template: html`
      <div class="card flex">
        <Toast v-bind="args" />
        <Btn label="Error" @click="showError" />
      </div>
    `,
  }),
};
