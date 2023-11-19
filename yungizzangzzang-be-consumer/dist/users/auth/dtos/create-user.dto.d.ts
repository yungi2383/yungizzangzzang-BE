import { StoreEntity } from 'src/stores/entities/stores.entity';
import { UserEntity } from 'src/users/entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserEntity, "name" | "password" | "userId" | "isClient" | "email" | "nickname">>;
export declare class CreateUserDto extends CreateUserDto_base implements StoreEntity {
    id: number;
    longitude: number;
    latitude: number;
    address: string;
    storePhoneNumber: string | null;
    category: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    storeId: number;
    ownerId: number | null;
    managementNumber: string;
}
export {};
