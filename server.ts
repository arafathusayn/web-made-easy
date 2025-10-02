import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", async (c, next) => {
  await next();

  const path = c.req.path;

  if (path.endsWith(".html") || path === "/") {
    // No cache for HTML files
    c.header("Cache-Control", "public, max-age=0, must-revalidate");
  } else if (path.match(/\.(js|css|svg|png|jpg|jpeg|gif|webp|woff2|woff)$/)) {
    // Long cache for hashed static assets (1 year)
    c.header("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    // Short cache for other files
    c.header("Cache-Control", "public, max-age=3600");
  }
});

app.use("/*", serveStatic({ root: "./dist/client" }));

app.all("*", async (c) => {
  return c.notFound();
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5025;

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});

console.log(`🚀 Hono server running at http://localhost:${PORT}`);
