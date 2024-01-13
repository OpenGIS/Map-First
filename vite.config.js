import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["jquery"],
  },
  build: {
    commonjsOptions: {
      include: [/jquery/, /node_modules/],
    },
    copyPublicDir: false,
    modulePreload: {
      polyfill: false,
    },
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
