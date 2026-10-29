import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


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
export const BudgetsCreateManyInputObjectSchema: z.ZodType<Prisma.BudgetsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateManyInput>;
export const BudgetsCreateManyInputObjectZodSchema = makeSchema();
