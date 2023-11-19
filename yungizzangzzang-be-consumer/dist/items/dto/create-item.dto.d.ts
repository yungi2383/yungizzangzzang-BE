import { ItemEntity } from '../entities/item.entity';
declare const CreateItemDto_base: import("@nestjs/common").Type<Pick<ItemEntity, "name" | "prevPrice" | "price" | "count" | "content">>;
export declare class CreateItemDto extends CreateItemDto_base {
    startTime: number;
    endTime: number;
}
export {};
