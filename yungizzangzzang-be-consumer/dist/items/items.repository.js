"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const DEFAULT_AVAILABLE_ITEMS = 5;
let ItemsRepository = class ItemsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createItem(createItemDto, urlByS3Key, startTime, endTime, userId) {
        const store = await this.prisma.stores.findUnique({
            where: { ownerId: userId, deletedAt: null },
            select: {
                storeId: true,
            },
        });
        if (!store) {
            throw new common_1.HttpException({ message: '가게가 존재하지 않습니다. 가게 정보를 생성해주세요.' }, common_1.HttpStatus.NOT_FOUND);
        }
        const createdItem = await this.prisma.items.create({
            data: {
                name: createItemDto.name,
                content: createItemDto.content,
                prevPrice: createItemDto.prevPrice,
                price: createItemDto.price,
                count: createItemDto.count,
                startTime,
                endTime,
                imgUrl: urlByS3Key,
                storeId: store.storeId,
            },
        });
        return { message: '핫딜 생성이 완료되었습니다.' };
    }
    async selectAllItems(storeId) {
        const items = await this.prisma.items.findMany({
            where: {
                storeId,
                deletedAt: null,
                NOT: { count: 0 },
            },
            select: {
                itemId: true,
                name: true,
                content: true,
                prevPrice: true,
                price: true,
                count: true,
                startTime: true,
                endTime: true,
                imgUrl: true,
                deletedAt: true,
            },
        });
        if (items.length === 0) {
            return { message: '진행 중인 핫딜 정보가 없습니다.' };
        }
        return items;
    }
    async updateItem(itemId, updateItemDto, urlByS3Key, startTime, endTime, userId, count) {
        const store = await this.prisma.stores.findUnique({
            where: { ownerId: userId, deletedAt: null },
            select: {
                storeId: true,
            },
        });
        if (!store) {
            throw new common_1.HttpException({ message: '가게가 존재하지 않습니다. 가게 정보를 생성해주세요.' }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.prisma.items.update({
            where: { itemId },
            data: {
                name: updateItemDto?.name,
                content: updateItemDto?.content,
                prevPrice: updateItemDto?.prevPrice,
                price: updateItemDto?.price,
                count: updateItemDto?.count,
                startTime,
                endTime,
                imgUrl: urlByS3Key,
            },
        });
        return { message: '핫딜 수정이 완료되었습니다.' };
    }
    async deleteItem(itemId, userId) {
        const store = await this.prisma.stores.findUnique({
            where: { ownerId: userId, deletedAt: null },
            select: {
                storeId: true,
            },
        });
        if (!store) {
            throw new common_1.HttpException({ message: '가게가 존재하지 않습니다. 가게 정보를 생성해주세요.' }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.prisma.items.update({
            where: { itemId },
            data: { deletedAt: new Date() },
        });
        return { message: '핫딜 삭제가 완료되었습니다.' };
    }
    async getOneItem(itemId) {
        const item = await this.prisma.items.findUnique({
            where: { itemId },
        });
        if (!item) {
            throw new common_1.HttpException({ message: '핫딜 정보가 존재하지 않습니다.' }, common_1.HttpStatus.NOT_FOUND);
        }
        return item;
    }
};
exports.ItemsRepository = ItemsRepository;
exports.ItemsRepository = ItemsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItemsRepository);
//# sourceMappingURL=items.repository.js.map