import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TransactionsCreateManyBudgetInputObjectSchema as TransactionsCreateManyBudgetInputObjectSchema } from './TransactionsCreateManyBudgetInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TransactionsCreateManyBudgetInputObjectSchema), z.lazy(() => TransactionsCreateManyBudgetInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TransactionsCreateManyBudgetInputEnvelopeObjectSchema: z.ZodType<Prisma.TransactionsCreateManyBudgetInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsCreateManyBudgetInputEnvelope>;
export const TransactionsCreateManyBudgetInputEnvelopeObjectZodSchema = makeSchema();
