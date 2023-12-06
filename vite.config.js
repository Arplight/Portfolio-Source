import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "manifest.json"],
      manifest: {
        name: "Portfolio",
        short_name: "Portfolio",
        description: "Personal portfolio",
        display: "standalone",
        background_color: "#101626",
        theme_color: "#101626",
        icons: [
          {
            src: "./favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },

  base: "/Portfolio/",
});
