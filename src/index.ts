import { Hono } from "hono";
import { OpenAPIHono } from "@hono/zod-openapi";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.text("Hello FFP!");
});

export default app;
