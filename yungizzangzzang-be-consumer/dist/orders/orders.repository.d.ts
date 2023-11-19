import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto, CreateOrderOrderItemDto } from './dto/create-order.dto';
export declare class OrdersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(createOrderOrderItemDto: CreateOrderOrderItemDto, userId: number): Promise<CreateOrderDto>;
}
