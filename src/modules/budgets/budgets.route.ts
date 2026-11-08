import { OpenAPIHono } from "@hono/zod-openapi";
import { auth } from "../../utils/auth";
import { createBudget, getAllBudgets, updateBudget } from "./budgets.openapi";
import { budgetsService } from "./budgets.service";

export const budgetsRouter = new OpenAPIHono<{
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
}>()
  .openapi(getAllBudgets, async (c) => {
    const queryFilter = c.req.valid("query");

    try {
      const result = await budgetsService.getAllBudgets(queryFilter);

      return c.json({
        status: "success",
        ...result,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .openapi(createBudget, async (c) => {
    const currentUser = c.get("user");
    const jsonBody = c.req.valid("json");

    try {
      const budget = await budgetsService.createBudget(
        currentUser.id,
        jsonBody,
      );

      return c.json({
        status: "success",
        message: "Budget created successfuly",
        data: budget,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  })
  .openapi(updateBudget, async (c) => {
    const jsonBody = c.req.valid("json");

    try {
      const updatedBudget = await budgetsService.updateBudget(jsonBody);

      return c.json({
        status: "success",
        message: "Budget has been updated successfuly",
        data: updatedBudget,
      });
    } catch (error) {
      return c.json({ status: "error", message: String(error) }, 500);
    }
  });
