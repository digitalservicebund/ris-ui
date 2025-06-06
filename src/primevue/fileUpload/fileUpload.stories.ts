import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import { http, HttpResponse } from "msw";
import Btn from "primevue/button";
import FileUpload from "primevue/fileupload";
import { ref } from "vue";

const meta: Meta<typeof FileUpload> = {
  // @ts-expect-error Component type broken
  component: FileUpload,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/upload", () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(HttpResponse.json({}, { status: 200 }));
            }, 3000);
          });
        }),
      ],
    },
  },

  render: () => ({
    components: { FileUpload, Btn },
    setup() {
      const fileupload = ref<InstanceType<typeof FileUpload> | null>(null);
      const isLoading = ref(false);

      async function upload() {
        fileupload.value?.upload();
      }

      return { fileupload, upload, isLoading };
    },
    template: html`
      <div class="flex flex-col items-center gap-24">
        <FileUpload
          ref="fileupload"
          :disabled="isLoading"
          mode="basic"
          url="/api/upload"
          @upload="isLoading = false"
          @error="isLoading = false"
          @before-upload="isLoading = true"
        />
        <Btn
          :loading="isLoading"
          label="Hochladen"
          severity="secondary"
          @click="upload"
        />
      </div>
    `,
  }),
};

export const WithError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/upload", () => {
          return new Promise((_, reject) => {
            setTimeout(() => {
              reject(HttpResponse.json({}, { status: 500 }));
            }, 3000);
          });
        }),
      ],
    },
  },

  render: () => ({
    components: { FileUpload, Btn },
    setup() {
      const fileupload = ref<InstanceType<typeof FileUpload> | null>(null);
      const isLoading = ref(false);
      const hasError = ref(false);

      async function upload() {
        fileupload.value?.upload();
      }

      return { fileupload, upload, isLoading, hasError };
    },
    template: html`
      <div class="flex flex-col items-center gap-24">
        <FileUpload
          ref="fileupload"
          :disabled="isLoading"
          mode="basic"
          url="/api/upload"
          @upload="isLoading = false"
          @error="hasError = true; isLoading = false"
          @before-upload="isLoading = true"
        />
        <Btn
          :loading="isLoading"
          label="Hochladen"
          severity="secondary"
          @click="upload"
        />

        <span v-if="hasError" class="ris-body2-regular text-red-800">
          Hochladen fehlgeschlagen
        </span>
      </div>
    `,
  }),
};
