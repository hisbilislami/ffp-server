import { Hono } from "hono";
import { auth } from "../utils/auth";

export const publicRoute = new Hono();

publicRoute.get("/", (c) => {
  return c.text("Hello Hono!");
});

publicRoute.on(["POST", "GET", "PUT", "PATCH", "DELETE"], "/*", (c) => {
  return auth.handler(c.req.raw);
});
