import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneUser(userId: number): Promise<{
        userId: number;
        isClient: boolean;
        email: string;
        password: string;
        name: string;
        point: number;
        nickname: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }>;
}
