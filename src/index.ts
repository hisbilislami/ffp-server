import { Hono } from "hono";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { publicRoute } from "./routes/public.route";

const app = new OpenAPIHono();

const allowedOrigins = (
  process.env.CORS_ORIGINS ?? "http://localhost:3000,http://localhost:3001"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  "*", // or replace with "*" to enable cors for all routes
  cors({
    origin: allowedOrigins, // replace with your origin
    allowHeaders: ["Content-Type", "Authorization", "Cookie"],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "PATCH", "DELETE"],
    exposeHeaders: ["Content-Length", "Set-Cookie", "X-Set-Cookie"],
    maxAge: 600,
    credentials: true,
  }),
);

const apiRoutes = app.route("/", publicRoute);

app.get("/", (c) => {
  return c.text("Hello FFP!");
});

export default apiRoutes;
