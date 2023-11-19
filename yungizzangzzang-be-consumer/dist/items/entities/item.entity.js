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
exports.ItemEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../../prisma/prisma.service");
class ItemEntity extends prisma_service_1.PrismaService {
}
exports.ItemEntity = ItemEntity;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'itemId',
        example: '34',
    }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "itemId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: '메뉴 이름은 필수 입력값입니다.' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '메뉴 이름',
        example: '종훈 떡볶이',
    }),
    __metadata("design:type", String)
], ItemEntity.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: '기존 가격은 필수 입력값입니다.' }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({ type: Number, description: '기존 가격', example: 4000 }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "prevPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: '할인 가격은 필수 입력값입니다.' }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({ type: Number, description: '할인 가격', example: 3000 }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: '할인 수량은 필수 입력값입니다.' }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({ type: Number, description: '할인 수량', example: 9 }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)({ message: '할인 시작 시간은 필수 입력값입니다.' }),
    (0, swagger_1.ApiProperty)({ type: Number, description: '할인 시작 시간', example: 19 }),
    __metadata("design:type", Date)
], ItemEntity.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)({ message: '할인 시작 시간은 필수 입력값입니다.' }),
    (0, swagger_1.ApiProperty)({ type: Number, description: '할일 마감 시간', example: 21 }),
    __metadata("design:type", Date)
], ItemEntity.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '이미지 업로드',
        example: 'https://megis3.s3.ap-northeast-2.amazonaws.com/default.png',
    }),
    __metadata("design:type", String)
], ItemEntity.prototype, "imgUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: '메뉴 설명은 필수 입력값입니다.' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '메뉴 설명',
        example: '요즘 대세 종훈 떡볶이',
    }),
    __metadata("design:type", String)
], ItemEntity.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "storeId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ItemEntity.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ItemEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ItemEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ItemEntity.prototype, "available_items", void 0);
//# sourceMappingURL=item.entity.js.map