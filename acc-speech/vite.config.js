import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteClean from "vite-plugin-clean";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  build: {
    outDir: "../",
  },
  plugins: [
    react(),
    tailwindcss(),
    viteClean({
      targetFiles: ["../index.html", "../assets"],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "A React PWA that works offline",
        theme_color: "#ffffff",
        icons: [],
      },
    }),
  ],
});
