import { Hono } from "hono";
import { auth } from "../utils/auth";
import { OpenAPIHono } from "@hono/zod-openapi";

export const publicRoute = new OpenAPIHono();

publicRoute.get("/", (c) => {
  return c.text("Hello Hono!");
});

publicRoute.all("/auth/*", (c) => {
  return auth.handler(c.req.raw);
});
