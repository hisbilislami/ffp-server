import { beforeEach, describe, expect, mock, test } from "bun:test";
import dayjs from "dayjs";
import { budgetsService } from "./budgets.service";

let mockSessionValue: any = null;

const getAllBudgetsMock = mock<(...args: any[]) => Promise<unknown>>(() => Promise.resolve(null));

const createBudgetMock = mock<(...args: any[]) => Promise<unknown>>(() => Promise.resolve(null));

const updatedBudgetMock = mock<(...args: any[]) => Promise<unknown>>(() => Promise.resolve(null));

mock.module("../../utils/auth", () => ({
  auth: {
    api: {
      getSession: () => Promise.resolve(mockSessionValue),
    },
  },
}));

mock.module("./budgets.service", () => ({
  budgetsService: {
    getAllBudgets: getAllBudgetsMock,
    createBudget: createBudgetMock,
    updateBudget: updatedBudgetMock,
  },
}));

// Must be after mock.module(...)
const { default: app } = await import("../../index");

describe("Budgets Module - Integration Unit Test", () => {
  beforeEach(() => {
    mockSessionValue = null;
    getAllBudgetsMock.mockReset();
    createBudgetMock.mockReset();
    updatedBudgetMock.mockReset();
  });

  // read
  test("GET /api/budgets - Harus gagal (401) jika tidak membaca session", async () => {
    const res = await app.request("/api/budgets");

    expect(res.status).toBe(401);
  });

  test("GET /api/budgets - Harus sukses (200) dengan data ter-paginasi", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const mockPaginationResult = {
      data: [
        {
          id: "budgets-1",
          name: "Budget test",
          periodStart: dayjs(),
          periodEnd: dayjs("2026-08-10", "YYYY-MM-DD"),
        },
      ],
      meta: {
        total: 1,
        page: 1,
        limit: 10,
        lastPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };

    getAllBudgetsMock.mockResolvedValue(mockPaginationResult);

    const res = await app.request("/api/budgets?page=1&limit=10", {
      headers: { Authorization: "Bearer bebas" },
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe("success");
  });

  test("GET /api/budgets - throw 400 status code (validation error)", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const res = await app.request("/api/budgets?page=1&limit=abc", {
      headers: { Authorization: "Bearer bebas" },
    });

    expect(res.status).toBe(400);
    expect(getAllBudgetsMock).not.toHaveBeenCalled();
  });

  test("GET /api/budgets - throw 500 status code (Internal server error)", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    getAllBudgetsMock.mockRejectedValue(new Error("Something went wrong"));

    const res = await app.request("/api/budgets?page=1&limit=10", {
      headers: { Authorization: "Bearer bebas" },
    });

    expect(res.status).toBe(500);
  });

  test("POST /api/budgets/create - throw 401 status code", async () => {
    const res = await app.request("/api/budgets/create");

    expect(res.status).toBe(401);
  });

  test("POST /api/budgets/create - return 200 on success", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const createBudget = {
      id: "1",
      name: "Bunut Farm",
      userId: "1",
      periodStart: "2026-08-01",
      periodEnd: "2026-08-31",
    };

    createBudgetMock.mockResolvedValue(createBudget);

    const response = await app.request("/api/budgets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        name: "Bunut Farm",
        periodStart: "2026-08-01",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(200);

    expect(createBudgetMock).toHaveBeenCalledWith("user-123", {
      name: "Bunut Farm",
      periodStart: dayjs("2026-08-01").toDate(),
      periodEnd: dayjs("2026-08-31").toDate(),
    });

    expect(await response.json()).toEqual({
      status: "success",
      message: "Budget created successfuly",
      data: createBudget,
    });
  });

  test("POST /api/budgets/create - throw 400 status code (validation error)", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const response = await app.request("/api/budgets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        name: "Bunut Farm",
        periodStart: "tennis",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(400);
    expect(createBudgetMock).not.toHaveBeenCalled();
  });

  test("POST /api/budgets/create - throw 500 status code", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    createBudgetMock.mockRejectedValue(new Error("Something went wrong"));

    const response = await app.request("/api/budgets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        name: "Bunut Farm",
        periodStart: "2026-08-01",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(500);
  });

  // ------------------------------------------------- update --------------------------------

  test("PUT /api/budgets/update - throw 401 status code", async () => {
    const res = await app.request("/api/budgets/update");

    expect(res.status).toBe(401);
  });

  test("PUT /api/budgets/update - return 200 on success", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const updatedBudget = {
      id: "1",
      name: "Bunut Farm 2",
      userId: "1",
      periodStart: "2026-08-01",
      periodEnd: "2026-08-31",
    };

    updatedBudgetMock.mockResolvedValue(updatedBudget);

    const response = await app.request("/api/budgets/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        id: "1",
        name: "Bunut Farm 2",
        periodStart: "2026-08-01",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(200);

    expect(updatedBudgetMock).toHaveBeenCalledWith({
      id: "1",
      name: "Bunut Farm 2",
      periodStart: dayjs("2026-08-01").toDate(),
      periodEnd: dayjs("2026-08-31").toDate(),
    });

    expect(await response.json()).toEqual({
      status: "success",
      message: "Budget has been updated successfuly",
      data: updatedBudget,
    });
  });

  test("PUT /api/budgets/update - throw 400 status code (validation error)", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    const response = await app.request("/api/budgets/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        id: 1,
        name: "Bunut Farm",
        periodStart: "tennis",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(400);
    expect(updatedBudgetMock).not.toHaveBeenCalled();
  });

  test("PUT /api/budgets/update - throw 500 status code", async () => {
    mockSessionValue = {
      user: { id: "user-123", name: "hisbil", email: "hisbil@test.com" },
      session: { id: "sess-123" },
    };

    updatedBudgetMock.mockRejectedValue(new Error("Something went wrong"));

    const response = await app.request("/api/budgets/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        id: "1",
        name: "Bunut Farm",
        periodStart: "2026-08-01",
        periodEnd: "2026-08-31",
      }),
    });

    expect(response.status).toBe(500);
  });
});
