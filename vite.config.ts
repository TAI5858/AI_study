import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

function fileProtocolCompatiblePlugin(): Plugin {
  return {
    name: "file-protocol-compatible",
    enforce: "post",
    transformIndexHtml(html) {
      return html
        .replace(/<!-- FILE_FALLBACK_START -->[\s\S]*?<!-- FILE_FALLBACK_END -->\s*/g, "")
        .replace(/<script type="module" crossorigin/g, "<script defer")
        .replace(/<link rel="stylesheet" crossorigin/g, '<link rel="stylesheet"')
    },
  }
}

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), fileProtocolCompatiblePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        assetFileNames: "assets/index.[ext]",
      },
    },
  },
})
