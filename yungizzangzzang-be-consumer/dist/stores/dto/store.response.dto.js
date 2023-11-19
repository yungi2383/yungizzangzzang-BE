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
exports.GetOneStoreResDto = exports.GetAllStoresResDto = exports.GetStoreResData = void 0;
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("../../common/dto/response.dto");
const get_item_dto_1 = require("../../items/dto/get-item.dto");
const stores_entity_1 = require("../entities/stores.entity");
class GetStoreResData extends (0, swagger_1.PickType)(stores_entity_1.StoreEntity, [
    'storeId',
    'ownerId',
    'name',
    'longitude',
    'latitude',
    'address',
    'storePhoneNumber',
    'category',
]) {
}
exports.GetStoreResData = GetStoreResData;
class GetAllStoresResDto extends response_dto_1.CustomSuccessRes {
}
exports.GetAllStoresResDto = GetAllStoresResDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetStoreResData, isArray: true }),
    __metadata("design:type", Array)
], GetAllStoresResDto.prototype, "data", void 0);
class GetOneStoreResDto extends response_dto_1.CustomSuccessRes {
}
exports.GetOneStoreResDto = GetOneStoreResDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", GetStoreResData)
], GetOneStoreResDto.prototype, "store", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: get_item_dto_1.GetItemDto, isArray: true }),
    __metadata("design:type", Array)
], GetOneStoreResDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetOneStoreResDto.prototype, "isLiked", void 0);
//# sourceMappingURL=store.response.dto.js.map