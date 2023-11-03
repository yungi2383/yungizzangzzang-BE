import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Likes, Users } from '@prisma/client';
import { GetItemDto } from 'src/items/dto/get-item.dto';
import { ItemsRepository } from 'src/items/items.repository';
import { LikesRepository } from 'src/likes/likes.repository';
import { UpdateStoreReqDto } from './dto/store.request.dto';
import { GetStoreResData } from './dto/store.response.dto';
import { StoresRepository } from './stores.repository';

@Injectable()
export class StoresService {
  constructor(
    private readonly storesRepository: StoresRepository,
    private readonly itemsRepository: ItemsRepository,
    private readonly likesRepository: LikesRepository,
  ) {}

  // * 반경 10km 이내 가게 조회
  async getAllStoreWithInRadius(requestInfo): Promise<GetStoreResData[]> {
    let { longitude, latitude } = requestInfo;

    if (!longitude) {
      longitude = 129.7444851;
      latitude = 35.24452483;
    }

    const stores = await this.storesRepository.selectAllStoreWithInRadius(
      longitude,
      latitude,
    );

    const { category } = requestInfo;

    if (category) {
      return stores.filter((store) => store.category == category);
    } else {
      return stores;
    }
  }

  // * 가게 상세 조회
  async getOneStore(
    user: Users | undefined,
    storeId: number,
  ): Promise<{
    store: GetStoreResData;
    items: GetItemDto[] | { message: string };
    isLiked: boolean;
  }> {
    const store: GetStoreResData | null =
      await this.storesRepository.selectOneStore(storeId);
    const items: GetItemDto[] | { message: string } =
      await this.itemsRepository.selectAllItems(storeId);
    if (!store) {
      throw new NotFoundException('해당 가게를 찾을 수 없습니다.');
    }

    let isLiked;
    if (user) {
      const like: Likes[] = await this.likesRepository.checkRelation(
        user.userId,
        storeId,
      );
      like.length !== 0 ? (isLiked = true) : (isLiked = false);
    } else {
      isLiked = false;
    }

    return { store, items, isLiked };
  }

  // * 가게 수정
  async updateStore(
    userId: number,
    storeId: number,
    updateStoreDto: UpdateStoreReqDto,
  ): Promise<void> {
    const store: GetStoreResData | null =
      await this.storesRepository.selectOneStore(storeId);
    if (!store) {
      throw new NotFoundException('해당 가게를 찾을 수 없습니다.');
    }

    // ! 수정 권한이 없는 경우
    if (userId !== store.ownerId) {
      throw new HttpException(
        { message: '수정 권한이 없습니다.' },
        HttpStatus.FORBIDDEN,
      );
    }

    return await this.storesRepository.updateStore(storeId, updateStoreDto);
  }

  // * 가게 삭제
  async deleteStore(userId: number, storeId: number): Promise<void> {
    const store: GetStoreResData | null =
      await this.storesRepository.selectOneStore(storeId);
    if (!store) {
      throw new NotFoundException('해당 가게를 찾을 수 없습니다.');
    }

    // ! 삭제 권한이 없는 경우
    if (userId !== store.ownerId) {
      throw new HttpException(
        { message: '삭제 권한이 없습니다.' },
        HttpStatus.FORBIDDEN,
      );
    }
    return await this.storesRepository.deleteStore(storeId);
  }
}
