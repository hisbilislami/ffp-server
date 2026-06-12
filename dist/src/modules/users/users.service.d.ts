import { UpdateUserInput, UserPaginationInput } from "./users.schema";
export declare const usersService: {
    getAllUsers(filters: UserPaginationInput): Promise<{
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
    getUserById(id: string): Promise<{
        name: string;
        id: string;
        image: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
    } | null>;
    updateUser(id: string, data: UpdateUserInput): Promise<{
        name: string;
        id: string;
        image: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
    }>;
};
