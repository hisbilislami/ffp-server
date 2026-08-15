import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../utils/pg-helper";
import {
  CreateTransactionInput,
  TransactionPaginationInput,
  UpdateTransactionInput,
} from "./transactions.schema";

export const transactionsService = {
  async getTransactionsByBudgetId(filters: TransactionPaginationInput) {
    const { limit, page, search, budgetId } = filters;

    let whereCondition: Prisma.TransactionsWhereInput = {
      budgetId: budgetId,
    };

    if (search) {
      whereCondition.OR = [{ name: { contains: search, mode: "insensitive" as const } }];
    }

    return prisma.transactions.paginate({
      where: whereCondition,
      page,
      limit,
      orderBy: { createdAt: "desc" },
    });
  },

  async createTransaction(payload: CreateTransactionInput) {
    const data: Prisma.TransactionsCreateInput = {
      budget: {
        connect: {
          id: Number(payload.budgetId),
        },
      },
      name: payload.name,
      estimatePrice: payload.estimate_price,
      realPrice: payload.real_price,
      diffPrice: payload.diff_price,
      qty: payload.qty,
      description: payload.description,
    };

    return prisma.transactions.create({
      data,
    });
  },

  async updateTransaction(payload: UpdateTransactionInput) {
    return prisma.transactions.update({
      where: { id: Number(payload.id) },
      data: {
        name: payload.name,
        estimatePrice: payload.estimate_price,
        realPrice: payload.real_price,
        diffPrice: payload.diff_price,
        qty: payload.qty,
        description: payload.description,
      },
    });
  },
};
