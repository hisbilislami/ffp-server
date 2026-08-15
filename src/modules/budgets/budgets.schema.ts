import z from "zod";
import { BudgetsFindUniqueResultSchema } from "../../../generated/zod/schemas";
import { paginationQuerySchema } from "../../utils/global.schema";

export const budgetPaginationSchema = paginationQuerySchema;

export const createBudgetSchema = z.object({
  name: z.string().min(2, "the name field at least must be have 2 characters or more.").max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
});

export const updateBudgetSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "the name field at least must be have 2 characters or more.").max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
});

export const budgetResponseSchema = BudgetsFindUniqueResultSchema.openapi("Budget");
export const budgetsResponseShcema = BudgetsFindUniqueResultSchema.openapi("Budgets");
export const createBudgetResponseSchema = createBudgetSchema.openapi("CreateBudget");
export const updateBudgetResponseSchema = updateBudgetSchema.openapi("UpdateBudget");

export type BudgetPaginationInput = z.infer<typeof budgetPaginationSchema>;
export type CreateBudgetInput = z.infer<typeof createBudgetResponseSchema>;
export type UpdateBudgetInput = z.infer<typeof updateBudgetResponseSchema>;
