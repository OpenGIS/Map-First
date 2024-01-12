import { defineConfig } from "vite";

export default defineConfig({
  build: {
    copyPublicDir: false,
    rollupOptions: {
      // overwrite default .html entry
      input: "src/js/map-first.js",
      output: {
        entryFileNames: "map-first.js",
        chunkFileNames: "map-first.js",
        assetFileNames: "map-first.[ext]",
      },
    },
  },
});
