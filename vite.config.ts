import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { beasties } from "vite-plugin-beasties";
import Sitemap from "vite-plugin-sitemap";
import { cpus } from "node:os";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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
    Sitemap({
      hostname: "https://web.arafat.dev",
      outDir: "dist/client",
      dynamicRoutes: getRoutesFromRouteTree(),
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      robots: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
});

function getRoutesFromRouteTree(): string[] {
  try {
    const routeTreePath = resolve(__dirname, "src/routeTree.gen.ts");
    const content = readFileSync(routeTreePath, "utf-8");

    const match = content.match(/fullPaths:\s*(.+)/);
    if (!match?.[1]) return ["/"];

    const pathsLine = match[1].split(/[\n;]/)[0];
    if (!pathsLine) return ["/"];

    const routes = pathsLine
      .split("|")
      .map((route) => route.trim().replace(/['"]/g, ""))
      .filter((route) => route && route.startsWith("/"));

    return routes.length > 0 ? routes : ["/"];
  } catch (error) {
    console.warn("Failed to read route tree, using default routes:", error);
    return ["/"];
  }
}
