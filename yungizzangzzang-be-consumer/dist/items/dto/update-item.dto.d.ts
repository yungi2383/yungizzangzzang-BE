import { ItemEntity } from '../entities/item.entity';
declare const UpdateItemDto_base: import("@nestjs/common").Type<Pick<ItemEntity, "name" | "prevPrice" | "price" | "count" | "content">>;
export declare class UpdateItemDto extends UpdateItemDto_base {
    startTime: number;
    endTime: number;
}
export {};
