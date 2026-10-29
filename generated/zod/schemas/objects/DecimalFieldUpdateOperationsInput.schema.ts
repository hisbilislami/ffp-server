import * as z from 'zod';
import { Prisma } from '../../../prisma/browser';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  set: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'set' must be a Decimal",
}).optional(),
  increment: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'increment' must be a Decimal",
}).optional(),
  decrement: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'decrement' must be a Decimal",
}).optional(),
  multiply: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'multiply' must be a Decimal",
}).optional(),
  divide: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'divide' must be a Decimal",
}).optional()
}).strict();
export const DecimalFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DecimalFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.DecimalFieldUpdateOperationsInput>;
export const DecimalFieldUpdateOperationsInputObjectZodSchema = makeSchema();
