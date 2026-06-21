import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BudgetsCreateManyUserInputObjectSchema as BudgetsCreateManyUserInputObjectSchema } from './BudgetsCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BudgetsCreateManyUserInputObjectSchema), z.lazy(() => BudgetsCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BudgetsCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.BudgetsCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BudgetsCreateManyUserInputEnvelope>;
export const BudgetsCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
