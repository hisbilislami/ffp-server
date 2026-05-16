import { Hono } from "hono";
import { prisma } from "./utils/pg-helper";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/pg-test", async (c) => {
  try {
    const data = await prisma.users.findMany({
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

app.get("/insert-user", async (c) => {
  try {
    for (let index = 0; index < 5; index++) {
      await prisma.users.create({
        data: {
          username: "hisbil" + index,
          password: "alislami",
        },
      });
    }

    return c.json({
      status: "success",
      message: "database connection successfully",
      data: [],
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

export default app;
