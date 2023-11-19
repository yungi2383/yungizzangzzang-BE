import { ItemEntity } from '../entities/item.entity';
declare const GetItemDto_base: import("@nestjs/mapped-types").MappedType<Pick<ItemEntity, "itemId" | "name" | "prevPrice" | "price" | "count" | "startTime" | "endTime" | "imgUrl" | "content" | "deletedAt">>;
export declare class GetItemDto extends GetItemDto_base {
}
export {};
