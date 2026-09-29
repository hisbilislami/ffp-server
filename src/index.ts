import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`Hello Hono on Bun ${process.versions.bun}`);
});

export default app;
