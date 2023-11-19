import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItemEntity extends PrismaService {
    itemId: number;
    name: string;
    prevPrice: number;
    price: number;
    count: number;
    startTime: Date;
    endTime: Date;
    imgUrl: string | null;
    content: string;
    storeId: number;
    version: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    available_items: number;
}
