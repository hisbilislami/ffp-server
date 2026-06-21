import * as z from 'zod';
export const TransactionsCreateManyResultSchema = z.object({
  count: z.number()
});