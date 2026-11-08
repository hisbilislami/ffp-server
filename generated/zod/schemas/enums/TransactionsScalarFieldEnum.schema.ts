import * as z from 'zod';

export const TransactionsScalarFieldEnumSchema = z.enum(['id', 'budgetId', 'name', 'estimatePrice', 'realPrice', 'diffPrice', 'qty', 'description', 'createdAt', 'updatedAt', 'deletedAt'])

export type TransactionsScalarFieldEnum = z.infer<typeof TransactionsScalarFieldEnumSchema>;