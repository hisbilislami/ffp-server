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
  const runtime = {
    bun: typeof Bun,
    node: typeof process,
    env: process.env.NODE_ENV,
  };

  console.log("RUNTIME:", runtime);

  return c.json(runtime);
});
