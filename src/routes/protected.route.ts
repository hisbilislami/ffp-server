import { Hono } from "hono";
import { auth } from "../utils/auth";
import { prisma } from "../utils/pg-helper";

export const protectedRoute = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

protectedRoute.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  console.log("hello");

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return c.body(null, 401);
  }

  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});

protectedRoute.on(["POST", "GET", "PUT", "PATCH", "DELETE"], "/api/*", (c) => {
  return auth.handler(c.req.raw);
});

protectedRoute.get("/api/session", (c) => {
  const session = c.get("session");
  const user = c.get("user");

  if (!user) return c.body(null, 401);

  return c.json({
    session,
    user,
  });
});

protectedRoute.get("/pg-test", async (c) => {
  try {
    const data = await prisma.user.findMany({
      take: 5,
    });

    return c.json({
      status: "success",
      message: "database connection successfully",
      data: data,
    });
  } catch (error) {
    return c.json(
      {
        status: "error",
        message: "Gagal terkoneksi ke database",
        error: error instanceof Error ? error.message : String(error),
      },
      500,
    );
  }
});
