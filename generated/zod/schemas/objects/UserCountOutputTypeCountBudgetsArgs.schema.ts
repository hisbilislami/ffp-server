import * as z from 'zod';
import { BudgetsWhereInputObjectSchema as BudgetsWhereInputObjectSchema } from './BudgetsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BudgetsWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountBudgetsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountBudgetsArgsObjectZodSchema = makeSchema();
