import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { GetOrderItemDto } from './dto/get-order-item.dto';
export declare class OrderItemsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrderItem(orderId: number, createOrderItem: CreateOrderItemDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
    gelAllOrderItems(orderId: number): Promise<GetOrderItemDto[]>;
}
