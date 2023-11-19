import { Job } from 'bull';
import { OrderItemsRepository } from 'src/order-items/order-items.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrdersRepository } from './orders.repository';
export declare class OrdersProcessor {
    private readonly ordersRepository;
    private readonly orderItemsRepository;
    private readonly prisma;
    constructor(ordersRepository: OrdersRepository, orderItemsRepository: OrderItemsRepository, prisma: PrismaService);
    handleCreateOrder(job: Job<any>): Promise<{}>;
    handleUpdateItemCount(job: Job<{
        items: {
            itemId: number;
            count: number;
        }[];
    }>): Promise<void>;
    handleUpdateUserPoint(job: Job<{
        userId: number;
        remainUserPoint: number;
    }>): Promise<void>;
}
