import { Hono } from "hono";
import { auth } from "./utils/auth";
import { cors } from "hono/cors";
import { publicRoute } from "./routes/public.route";
import { protectedRoute } from "./routes/protected.route";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

app.use(
  "*", // or replace with "*" to enable cors for all routes
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // replace with your origin
    allowHeaders: ["Content-Type", "Authorization", "Cookie"],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "PATCH", "DELETE"],
    exposeHeaders: ["Content-Length", "Set-Cookie", "X-Set-Cookie"],
    maxAge: 600,
    credentials: true,
  }),
);

app.route("/", publicRoute);
app.route("/api/auth", publicRoute); // Auth endpoints are public

app.route("/api", protectedRoute);

export default app;
