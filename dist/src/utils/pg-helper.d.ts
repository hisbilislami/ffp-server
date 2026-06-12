import { Prisma } from "../../generated/prisma/client";
export declare const basePrisma: import("../../generated/prisma/internal/class").PrismaClient<never, Prisma.GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
export declare const prisma: import("@prisma/client/runtime/client").DynamicClientExtensionThis<Prisma.TypeMap<import("@prisma/client/runtime/client").InternalArgs & {
    result: {};
    model: {
        $allModels: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        session: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        user: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        verification: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        account: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        budgets: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        transactions: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
    };
    query: {};
    client: {};
}, Prisma.GlobalOmitConfig | undefined>, Prisma.TypeMapCb<Prisma.GlobalOmitConfig | undefined>, {
    result: {};
    model: {
        $allModels: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        session: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        user: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        verification: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        account: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        budgets: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
        transactions: {
            paginate: () => <T>(this: T, args: Prisma.Args<T, "findMany"> & {
                page?: number;
                limit?: number;
            }) => Promise<{
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>;
        };
    };
    query: {};
    client: {};
}>;
