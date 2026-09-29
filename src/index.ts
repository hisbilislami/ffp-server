import { Hono } from "hono";
import { cors } from "hono/cors";
import { publicRoute } from "./routes/public.route";
import { protectedRoute } from "./routes/protected.route";
import { OpenAPIHono } from "@hono/zod-openapi";

const app = new OpenAPIHono();

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

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    title: "FFP server API",
    version: "0.0.1",
  },
});

const apiRoutes = app.route("/", publicRoute).route("/api", protectedRoute);

export type AppType = typeof apiRoutes;

export default app;
