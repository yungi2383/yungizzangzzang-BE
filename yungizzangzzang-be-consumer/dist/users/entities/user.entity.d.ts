import { Users } from '@prisma/client';
export declare class UserEntity implements Users {
    email: string;
    password: string;
    name: string;
    isClient: boolean;
    nickname: string;
    point: number;
    version: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    accessToken: string;
}
