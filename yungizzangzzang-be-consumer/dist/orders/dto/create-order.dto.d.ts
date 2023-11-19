import { CreateOrderItemDto } from 'src/order-items/dto/create-order-item.dto';
import { OrderEntity } from '../entities/order.entity';
declare const CreateOrderOrderItemDto_base: import("@nestjs/common").Type<Pick<OrderEntity, "storeId" | "totalPrice" | "discount">>;
export declare class CreateOrderOrderItemDto extends CreateOrderOrderItemDto_base {
    items: CreateOrderItemDto[];
}
declare const CreateOrderDto_base: import("@nestjs/common").Type<Pick<OrderEntity, "storeId" | "orderId" | "totalPrice" | "userId" | "discount">>;
export declare class CreateOrderDto extends CreateOrderDto_base {
}
export {};
