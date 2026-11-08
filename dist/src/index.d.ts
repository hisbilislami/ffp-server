import { Hono } from "hono";
declare const app: Hono<import("hono/types").BlankEnv, import("hono/types").BlankSchema, "/">;
declare const apiRoutes: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, import("hono/types").BlankSchema | import("hono/types").MergeSchemaPath<import("hono/types").BlankSchema, "/"> | import("hono/types").MergeSchemaPath<import("hono/types").BlankSchema, "/api">, "/", "/">;
export type AppType = typeof apiRoutes;
export default app;
