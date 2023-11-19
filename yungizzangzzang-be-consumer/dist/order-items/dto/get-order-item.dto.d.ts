import { OrderItemEntity } from '../entities/order-item.entity';
declare const GetOrderItemDto_base: import("@nestjs/common").Type<Pick<OrderItemEntity, "count">>;
export declare class GetOrderItemDto extends GetOrderItemDto_base {
    name: string;
    price: number;
    totalPrice: number;
}
export {};
