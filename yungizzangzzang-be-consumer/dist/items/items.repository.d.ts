import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { GetItemDto } from './dto/get-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createItem(createItemDto: CreateItemDto, urlByS3Key: string, startTime: Date, endTime: Date, userId: number): Promise<{
        message: string;
    }>;
    selectAllItems(storeId: number): Promise<GetItemDto[] | {
        message: string;
    }>;
    updateItem(itemId?: number, updateItemDto?: UpdateItemDto, urlByS3Key?: string, startTime?: Date, endTime?: Date, userId?: number, count?: number): Promise<{
        message: string;
    }>;
    deleteItem(itemId: number, userId: number): Promise<{
        message: string;
    }>;
    getOneItem(itemId: number): Promise<GetItemDto>;
}
