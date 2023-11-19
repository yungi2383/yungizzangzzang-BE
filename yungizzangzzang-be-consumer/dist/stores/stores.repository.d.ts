import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStoreReqDto } from './dto/store.request.dto';
import { GetStoreResData } from './dto/store.response.dto';
export declare class StoresRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    selectAllStore(): Promise<GetStoreResData[]>;
    selectOneStore(storeId: number): Promise<GetStoreResData | null>;
    updateStore(storeId: number, updateStoreReqDto: UpdateStoreReqDto): Promise<void>;
    deleteStore(storeId: number): Promise<void>;
}
