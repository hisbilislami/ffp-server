import * as z from 'zod';
export const TransactionsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    budget: z.number(),
    budgetId: z.number(),
    name: z.number(),
    estimatePrice: z.number(),
    realPrice: z.number(),
    diffPrice: z.number(),
    qty: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    budgetId: z.number().nullable(),
    estimatePrice: z.number().nullable(),
    realPrice: z.number().nullable(),
    diffPrice: z.number().nullable(),
    qty: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    budgetId: z.number().nullable(),
    estimatePrice: z.number().nullable(),
    realPrice: z.number().nullable(),
    diffPrice: z.number().nullable(),
    qty: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    budgetId: z.number().int().nullable(),
    name: z.string().nullable(),
    estimatePrice: z.number().nullable(),
    realPrice: z.number().nullable(),
    diffPrice: z.number().nullable(),
    qty: z.number().int().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    budgetId: z.number().int().nullable(),
    name: z.string().nullable(),
    estimatePrice: z.number().nullable(),
    realPrice: z.number().nullable(),
    diffPrice: z.number().nullable(),
    qty: z.number().int().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()});