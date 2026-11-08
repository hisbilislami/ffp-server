import z from "zod";
import { paginationQuerySchema } from "../../utils/global.schema";
import { TransactionsFindUniqueResultSchema } from "../../../generated/zod/schemas";

export const transactionPaginationSchema = paginationQuerySchema.extend({
  budgetId: z.number(),
});

export const createTransactionSchema = z.object({
  budgetId: z.string(),
  name: z.string().min(2, "the name field at least must be have 2 characters or more").max(255),
  estimate_price: z
    .string()
    .min(1, "Currency is required")
    .regex(/^(?:\d+|\d{1,3}(?:\.\d{3})*)(?:,\d+)?$/, {
      message: "Invalid currency format",
    })
    .transform((val) => val.replace(/\./g, "").replace(",", "."))
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid currency format",
    })
    .transform((val) => {
      return Number(val);
    })
    .refine((val) => val >= 0, {
      message: "Amount must be positive",
    }),
  real_price: z
    .string()
    .min(1, "Currency is required")
    .regex(/^(?:\d+|\d{1,3}(?:\.\d{3})*)(?:,\d+)?$/, {
      message: "Invalid currency format",
    })
    .transform((val) => val.replace(/\./g, "").replace(",", "."))
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid currency format",
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 0, {
      message: "Amount must be positive",
    }),
  diff_price: z.string().optional(),
  qty: z.number().min(1),
  description: z.string().optional(),
});

export const updateTransactionSchema = z.object({
  id: z.string(),
  budgetId: z.string(),
  name: z.string().min(2, "the name field at least must be have 2 characters or more").max(255),
  estimate_price: z
    .string()
    .min(1, "Currency is required")
    .regex(/^(?:\d+|\d{1,3}(?:\.\d{3})*)(?:,\d+)?$/, {
      message: "Invalid currency format",
    })
    .transform((val) => val.replace(/\./g, "").replace(",", "."))
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid currency format",
    })
    .transform((val) => {
      return Number(val);
    })
    .refine((val) => val >= 0, {
      message: "Amount must be positive",
    }),
  real_price: z
    .string()
    .min(1, "Currency is required")
    .regex(/^(?:\d+|\d{1,3}(?:\.\d{3})*)(?:,\d+)?$/, {
      message: "Invalid currency format",
    })
    .transform((val) => val.replace(/\./g, "").replace(",", "."))
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid currency format",
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 0, {
      message: "Amount must be positive",
    }),
  diff_price: z.string().optional(),
  qty: z.number().min(1),
  description: z.string().optional(),
});

export const transactionResponseSchema = TransactionsFindUniqueResultSchema.openapi("Transaction");
export const transactionsResponseSchema =
  TransactionsFindUniqueResultSchema.openapi("Transactions");
export const createTransactionResponseSchema =
  createTransactionSchema.openapi("Create Transaction");
export const updateTransactionResponseSchema =
  updateTransactionSchema.openapi("Update Transaction");

export type TransactionPaginationInput = z.infer<typeof transactionPaginationSchema>;
export type CreateTransactionInput = z.infer<typeof createTransactionResponseSchema>;
export type UpdateTransactionInput = z.infer<typeof updateTransactionResponseSchema>;
