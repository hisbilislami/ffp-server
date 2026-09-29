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
  try {
    return await auth.handler(c.req.raw);
  } catch (error) {
    console.error("BETTER_AUTH_HANDLER_ERROR:", error);
    return c.json({ error: String(error) }, 500);
  }
});
