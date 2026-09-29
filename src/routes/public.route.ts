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
    const response = await auth.handler(c.req.raw);

    console.log("AUTH RESPONSE:", response);

    return response;
  } catch (error) {
    console.error("AUTH HANDLER ERROR:", error);

    return c.json(
      {
        name: error instanceof Error ? error.name : typeof error,
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      500,
    );
  }
});
