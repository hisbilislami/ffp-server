// import { Hono } from "hono";
// import { auth } from "../utils/auth";
//
// export const publicRoute = new Hono();
//
// publicRoute.get("/", (c) => {
//   return c.text("Hello Hono!");
// });
//
// publicRoute.all("/auth/*", (c) => {
//   return auth.handler(c.req.raw);
// });
import { Hono } from "hono";
import { auth } from "../utils/auth";

export const publicRoute = new Hono();

publicRoute.get("/", (c) => {
  return c.text("Hello Hono!");
});

publicRoute.all("/auth/*", (c) => {
  const handler = auth.handler;
  return c.text("Auth handler exists!");
});
