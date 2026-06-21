import * as z from 'zod';
import { Prisma } from '../../../prisma/client';
import { BudgetsCreateNestedOneWithoutTransactionsInputObjectSchema as BudgetsCreateNestedOneWithoutTransactionsInputObjectSchema } from './BudgetsCreateNestedOneWithoutTransactionsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  name: z.string().max(255).optional().nullable(),
  estimatePrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatePrice' must be a Decimal",
}),
  realPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'realPrice' must be a Decimal",
}),
  diffPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'diffPrice' must be a Decimal",
}).optional().nullable(),
  qty: z.number().int(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  budget: z.lazy(() => BudgetsCreateNestedOneWithoutTransactionsInputObjectSchema)
}).strict();
export const TransactionsCreateInputObjectSchema: z.ZodType<Prisma.TransactionsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsCreateInput>;
export const TransactionsCreateInputObjectZodSchema = makeSchema();
