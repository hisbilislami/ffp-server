import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const BudgetsCreateManyUserInputObjectSchema: z.ZodType<Prisma.BudgetsCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateManyUserInput>;
export const BudgetsCreateManyUserInputObjectZodSchema = makeSchema();
