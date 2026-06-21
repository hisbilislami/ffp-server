import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const BudgetsWhereUniqueInputObjectSchema: z.ZodType<Prisma.BudgetsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsWhereUniqueInput>;
export const BudgetsWhereUniqueInputObjectZodSchema = makeSchema();
