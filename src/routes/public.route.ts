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

publicRoute.all("/auth/*", async (c) => {
  console.log("AUTH ROUTE START");

  return new Response("AUTH ROUTE OK", {
    status: 200,
  });
});
