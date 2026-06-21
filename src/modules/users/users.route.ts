import { OpenAPIHono } from "@hono/zod-openapi";
import { auth } from "../../utils/auth";
import {
  getAllUsersRoute,
  getMeRoute,
  updateMeRoute,
  getUserByIdRoute,
  updateUserByIdRoute,
} from "./users.openapi";

type Variables = {
  user: typeof auth.$Infer.Session.user;
  session: typeof auth.$Infer.Session.session;
};

export const usersRouter = new OpenAPIHono<{ Variables: Variables }>()
  .openapi(getAllUsersRoute.route, getAllUsersRoute.handler)
  .openapi(getMeRoute.route, getMeRoute.handler)
  .openapi(updateMeRoute.route, updateMeRoute.handler)
  .openapi(getUserByIdRoute.route, getUserByIdRoute.handler)
  .openapi(updateUserByIdRoute.route, updateUserByIdRoute.handler);
