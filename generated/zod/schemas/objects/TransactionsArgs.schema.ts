import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsSelectObjectSchema as TransactionsSelectObjectSchema } from './TransactionsSelect.schema';
import { TransactionsIncludeObjectSchema as TransactionsIncludeObjectSchema } from './TransactionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TransactionsSelectObjectSchema).optional(),
  include: z.lazy(() => TransactionsIncludeObjectSchema).optional()
}).strict();
export const TransactionsArgsObjectSchema = makeSchema();
export const TransactionsArgsObjectZodSchema = makeSchema();
