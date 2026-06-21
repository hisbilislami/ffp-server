import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const BudgetsUncheckedCreateWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.BudgetsUncheckedCreateWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsUncheckedCreateWithoutTransactionsInput>;
export const BudgetsUncheckedCreateWithoutTransactionsInputObjectZodSchema = makeSchema();
