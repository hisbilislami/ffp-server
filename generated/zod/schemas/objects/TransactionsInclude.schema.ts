import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsArgsObjectSchema as BudgetsArgsObjectSchema } from './BudgetsArgs.schema'

const makeSchema = () => z.object({
  budget: z.union([z.boolean(), z.lazy(() => BudgetsArgsObjectSchema)]).optional()
}).strict();
export const TransactionsIncludeObjectSchema: z.ZodType<Prisma.TransactionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsInclude>;
export const TransactionsIncludeObjectZodSchema = makeSchema();
