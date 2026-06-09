import { Hono } from "hono";
import { auth } from "../utils/auth";
import { prisma } from "../utils/pg-helper";
import { usersRouter } from "../modules/users/users.route";

export const protectedRoute = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
}>();

protectedRoute.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    return c.body(null, 401);
  }

  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});

protectedRoute.get("/session", (c) => {
  const session = c.get("session");
  const user = c.get("user");

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

protectedRoute.route("/users", usersRouter);
