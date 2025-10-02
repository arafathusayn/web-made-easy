import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { beasties } from "vite-plugin-beasties";
import { cpus } from "node:os";

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      sitemap: {
        enabled: true,
        host: "https://web.arafat.dev",
      },
      prerender: {
        enabled: true,
        concurrency: cpus().length,
      },
      pages: [
        {
          path: "/",
        },
        {
          path: "/lesson/js-in-browsers/",
        },
      ],
    }),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    beasties({
      options: {
        preload: "swap",
        inlineFonts: true,
        pruneSource: true,
      },
    }),
  ],
});
