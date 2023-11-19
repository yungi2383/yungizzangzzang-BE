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
exports.StoreEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class StoreEntity {
}
exports.StoreEntity = StoreEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
        description: '가게를 소유한 유저의 id',
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StoreEntity.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
        description: '가게 id',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreEntity.prototype, "storeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '만두분식',
        description: '가게 이름',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 37.2662777,
        description: '가게 위치의 경도 값',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreEntity.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 126.9999999,
        description: '가게 위치의 위도 값',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreEntity.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '경기도 사랑시 고백구 행복대로 1234번길 56-7',
        description: '가게의 도로명 주소',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '031 1234567',
        description: '가게 연락처',
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StoreEntity.prototype, "storePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '분식',
        description: '가게 종류',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreEntity.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '1234567-123-1234-12345',
        description: '가게 관리 번호',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String, description: '사업자 번호', example: '434-343' }),
    __metadata("design:type", String)
], StoreEntity.prototype, "managementNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2023-10-10 00:00:00.000',
        description: '가게 데이터 생성 날짜',
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], StoreEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2023-10-10 00:00:00.000',
        description: '가게 데이터 수정 날짜',
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], StoreEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2023-10-10 00:00:00.000',
        description: '가게 데이터 삭제 날짜',
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], StoreEntity.prototype, "deletedAt", void 0);
//# sourceMappingURL=stores.entity.js.map