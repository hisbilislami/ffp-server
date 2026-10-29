import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TransactionsCreateManyBudgetInputObjectSchema as TransactionsCreateManyBudgetInputObjectSchema } from './TransactionsCreateManyBudgetInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TransactionsCreateManyBudgetInputObjectSchema), z.lazy(() => TransactionsCreateManyBudgetInputObjectSchema).array()])
}).strict();
export const TransactionsCreateManyBudgetInputEnvelopeObjectSchema: z.ZodType<Prisma.TransactionsCreateManyBudgetInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsCreateManyBudgetInputEnvelope>;
export const TransactionsCreateManyBudgetInputEnvelopeObjectZodSchema = makeSchema();
