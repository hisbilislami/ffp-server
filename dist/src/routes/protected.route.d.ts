import { Hono } from "hono";
import { auth } from "../utils/auth";
export declare const protectedRoute: Hono<{
    Variables: {
        user: typeof auth.$Infer.Session.user;
        session: typeof auth.$Infer.Session.session;
    };
}, import("hono/types").BlankSchema, "/">;
