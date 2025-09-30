import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cpus } from "node:os";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
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
    viteReact(),
  ],
});
