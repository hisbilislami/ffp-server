import * as z from 'zod';

export const BudgetsScalarFieldEnumSchema = z.enum(['id', 'name', 'periodStart', 'periodEnd', 'userId', 'createdAt', 'updatedAt', 'deletedAt'])

export type BudgetsScalarFieldEnum = z.infer<typeof BudgetsScalarFieldEnumSchema>;