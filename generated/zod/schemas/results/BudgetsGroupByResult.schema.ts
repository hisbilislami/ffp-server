import * as z from 'zod';
export const BudgetsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  periodStart: z.date(),
  periodEnd: z.date(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    periodStart: z.number(),
    periodEnd: z.number(),
    user: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    Transactions: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    periodStart: z.date().nullable(),
    periodEnd: z.date().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    periodStart: z.date().nullable(),
    periodEnd: z.date().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));