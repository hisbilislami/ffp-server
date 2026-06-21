import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsSelectObjectSchema as BudgetsSelectObjectSchema } from './BudgetsSelect.schema';
import { BudgetsIncludeObjectSchema as BudgetsIncludeObjectSchema } from './BudgetsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BudgetsSelectObjectSchema).optional(),
  include: z.lazy(() => BudgetsIncludeObjectSchema).optional()
}).strict();
export const BudgetsArgsObjectSchema = makeSchema();
export const BudgetsArgsObjectZodSchema = makeSchema();
