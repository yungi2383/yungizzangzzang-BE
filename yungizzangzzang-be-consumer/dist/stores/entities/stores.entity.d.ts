import { Stores } from '@prisma/client';
export declare class StoreEntity implements Stores {
    ownerId: number | null;
    storeId: number;
    name: string;
    longitude: number;
    latitude: number;
    address: string;
    storePhoneNumber: string | null;
    category: string;
    managementNumber: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
