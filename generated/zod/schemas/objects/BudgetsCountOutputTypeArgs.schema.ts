import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCountOutputTypeSelectObjectSchema as BudgetsCountOutputTypeSelectObjectSchema } from './BudgetsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BudgetsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BudgetsCountOutputTypeArgsObjectSchema = makeSchema();
export const BudgetsCountOutputTypeArgsObjectZodSchema = makeSchema();
