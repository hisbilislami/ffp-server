import { Hono } from "hono";
import { prisma } from "./utils/pg-helper";
import { auth } from "./utils/auth";
import { cors } from "hono/cors";
import { publicRoute } from "./routes/public.route";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

app.use(
  "*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:3001", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.route("/", publicRoute);
app.route("/api", publicRoute);

export default app;
