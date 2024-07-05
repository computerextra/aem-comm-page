import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    cssCodeSplit: true,
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react(), chunkSplitPlugin()],
});
