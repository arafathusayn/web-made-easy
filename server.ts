import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/*", serveStatic({ root: "./dist/client" }));

app.all("*", async (c) => {
  return c.notFound();
});

app.use("*", async (c, next) => {
  await next();

  const path = c.req.path;

  if (path.endsWith(".html") || path === "/") {
    c.header("Cache-Control", "public, max-age=0, must-revalidate");
  } else {
    c.header("Cache-Control", "public, max-age=3600");
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5025;

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});

console.log(`🚀 Hono server running at http://localhost:${PORT}`);
