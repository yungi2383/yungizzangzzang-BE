import { CustomSuccessRes } from 'src/common/dto/response.dto';
import { GetItemDto } from 'src/items/dto/get-item.dto';
import { StoreEntity } from '../entities/stores.entity';
declare const GetStoreResData_base: import("@nestjs/common").Type<Pick<StoreEntity, "name" | "storeId" | "longitude" | "latitude" | "address" | "storePhoneNumber" | "category" | "ownerId">>;
export declare class GetStoreResData extends GetStoreResData_base {
}
export declare class GetAllStoresResDto extends CustomSuccessRes {
    data: GetStoreResData[];
}
export declare class GetOneStoreResDto extends CustomSuccessRes {
    store: GetStoreResData;
    items: GetItemDto[];
    isLiked: boolean;
}
export {};
