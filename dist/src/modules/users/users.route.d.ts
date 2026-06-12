import { auth } from "../../utils/auth";
export declare const usersRouter: import("hono/hono-base").HonoBase<{
    Variables: {
        user: typeof auth.$Infer.Session.user;
        session: typeof auth.$Infer.Session.session;
    };
}, {
    "/": {
        $get: {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: import("zod").ZodSafeParseError<{
                page: number;
                limit: number;
                search?: string | undefined;
            }>;
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                data: any;
                meta: {
                    total: any;
                    page: any;
                    limit: any;
                    lastPage: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
                status: string;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/me": {
        $get: {
            input: {};
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                status: string;
                data: {
                    name: string;
                    id: string;
                    image: string | null;
                    email: string;
                    createdAt: string;
                    updatedAt: string;
                    emailVerified: boolean;
                };
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        } | {
            input: {};
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/me": {
        $put: {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            };
            output: import("zod").ZodSafeParseError<{
                name?: string | undefined;
                image?: string | null | undefined;
            }>;
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            };
            output: {
                status: string;
                message: string;
                data: {
                    name: string;
                    id: string;
                    image: string | null;
                    email: string;
                    createdAt: string;
                    updatedAt: string;
                    emailVerified: boolean;
                };
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        } | {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            };
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                status: string;
                data: {
                    name: string;
                    id: string;
                    image: string | null;
                    email: string;
                    createdAt: string;
                    updatedAt: string;
                    emailVerified: boolean;
                };
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/:id": {
        $put: {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            } & {
                param: {
                    id: string;
                };
            };
            output: import("zod").ZodSafeParseError<{
                name?: string | undefined;
                image?: string | null | undefined;
            }>;
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            } & {
                param: {
                    id: string;
                };
            };
            output: {
                status: string;
                message: string;
                data: {
                    name: string;
                    id: string;
                    image: string | null;
                    email: string;
                    createdAt: string;
                    updatedAt: string;
                    emailVerified: boolean;
                };
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        } | {
            input: {
                json: {
                    name?: string | undefined;
                    image?: string | null | undefined;
                };
            } & {
                param: {
                    id: string;
                };
            };
            output: {
                status: string;
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
}, "/", "/:id">;
