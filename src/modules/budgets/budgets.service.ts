import dayjs from "dayjs";
import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../utils/pg-helper";
import {
  BudgetPaginationInput,
  CreateBudgetInput,
  UpdateBudgetInput,
} from "./budgets.schema";

export const budgetsService = {
  async getAllBudgets(filters: BudgetPaginationInput) {
    const { limit, page, search } = filters;

    const whereCondition = search
      ? {
          OR: [{ name: { contains: search, mode: "insensitive" as const } }],
        }
      : {};

    return prisma.budgets.paginate({
      where: whereCondition,
      page,
      limit,
      orderBy: { createdAt: "desc" },
    });
  },

  async createBudget(userId: string, payload: CreateBudgetInput) {
    const data: Prisma.BudgetsCreateInput = {
      name: payload.name,
      periodStart: dayjs(payload.periodStart, "YYYY-MM-DD").format(
        "YYYY-MM-DD hh:ii:ss",
      ),
      periodEnd: dayjs(payload.periodEnd, "YYYY-MM-DD").format(
        "YYYY-MM-DD hh:ii:ss",
      ),
      user: {
        connect: {
          id: userId,
        },
      },
    };

    return prisma.budgets.create({
      data: data,
    });
  },

  async updateBudget(data: UpdateBudgetInput) {
    return prisma.budgets.update({
      where: { id: Number(data.id) },
      data: {
        name: data.name,
        periodStart: dayjs(data.periodStart, "YYYY-MM-DD").format(
          "YYYY-MM-DD hh:ii:ss",
        ),
        periodEnd: dayjs(data.periodEnd, "YYYY-MM-DD").format(
          "YYYY-MM-DD hh:ii:ss",
        ),
      },
    });
  },
};
