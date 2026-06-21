import * as z from 'zod';
export const TransactionsDeleteManyResultSchema = z.object({
  count: z.number()
});