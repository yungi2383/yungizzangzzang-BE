import { OrderEntity } from '../entities/order.entity';
export declare class OrderItemForUserDTO {
    name: string;
    imgUrl?: string | null;
    count: number;
}
declare const UserOrdersDTO_base: import("@nestjs/common").Type<Pick<OrderEntity, "createdAt" | "orderId" | "discount">>;
export declare class UserOrdersDTO extends UserOrdersDTO_base {
    storeId: number;
    storeName: string;
    items: OrderItemForUserDTO[];
    star?: number | null;
}
export {};
