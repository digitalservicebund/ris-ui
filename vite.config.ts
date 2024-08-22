import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    icons({
      autoInstall: true,
      scale: 1.3333, // ~24px at the current default font size of 18px
      compiler: "vue3",
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: {
        "primevue/index": "src/primevue/index.ts",
        "tailwind/index": "src/tailwind/index.ts",
      },
    },
    rollupOptions: {
      external: ["vue", "primevue"],
    },
  },
});
