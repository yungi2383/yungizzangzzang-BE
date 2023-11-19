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
exports.StoresRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StoresRepository = class StoresRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async selectAllStore() {
        const stores = await this.prisma.stores.findMany({
            where: {
                deletedAt: null,
            },
            select: {
                storeId: true,
                ownerId: true,
                name: true,
                longitude: true,
                latitude: true,
                address: true,
                storePhoneNumber: true,
                category: true,
            },
        });
        return stores;
    }
    async selectOneStore(storeId) {
        const store = await this.prisma.stores.findUnique({
            where: {
                storeId,
                deletedAt: null,
            },
            select: {
                storeId: true,
                ownerId: true,
                name: true,
                longitude: true,
                latitude: true,
                address: true,
                storePhoneNumber: true,
                category: true,
            },
        });
        return store;
    }
    async updateStore(storeId, updateStoreReqDto) {
        await this.prisma.stores.update({
            where: {
                storeId,
            },
            data: {
                ...updateStoreReqDto,
            },
        });
    }
    async deleteStore(storeId) {
        await this.prisma.stores.update({
            where: {
                storeId,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }
};
exports.StoresRepository = StoresRepository;
exports.StoresRepository = StoresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoresRepository);
//# sourceMappingURL=stores.repository.js.map