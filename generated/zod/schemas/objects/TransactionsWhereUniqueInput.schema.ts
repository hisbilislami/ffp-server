import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const TransactionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.TransactionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionsWhereUniqueInput>;
export const TransactionsWhereUniqueInputObjectZodSchema = makeSchema();
