import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    manifest: true,
    rollupOptions: {
      input: "src/js/main.js",
      output: {
        entryFileNames: "map-first.js",
        chunkFileNames: "map-first.js",
        assetFileNames: "map-first.[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
