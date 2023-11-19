import { OrderEntity } from '../entities/order.entity';
export declare class OrderItemDetailDTO {
    name: string;
    count: number;
}
declare const OneOrderDTO_base: import("@nestjs/common").Type<Pick<OrderEntity, "createdAt" | "orderId" | "totalPrice" | "discount">>;
export declare class OneOrderDTO extends OneOrderDTO_base {
    items: OrderItemDetailDTO[];
    storeName: string;
    ordered: boolean;
}
export {};
