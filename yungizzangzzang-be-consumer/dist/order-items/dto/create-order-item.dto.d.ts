import { OrderItemEntity } from '../entities/order-item.entity';
declare const CreateOrderItemDto_base: import("@nestjs/common").Type<Pick<OrderItemEntity, "itemId" | "count" | "orderId">>;
export declare class CreateOrderItemDto extends CreateOrderItemDto_base {
}
export {};
