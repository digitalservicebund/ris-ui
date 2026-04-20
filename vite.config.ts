import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
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
      cssFileName: "style",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "primevue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
  },
});
