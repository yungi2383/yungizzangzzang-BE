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
exports.OrderEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderEntity {
}
exports.OrderEntity = OrderEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문 ID', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '할인율', example: 22 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OrderEntity.prototype, "ordered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '총 주문 가격', example: 14000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상점 ID', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "storeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용자 ID', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '리뷰 ID', example: 4 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "reviewId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문 생성 날짜' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문 수정 날짜' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문 삭제 날짜', required: false }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "deletedAt", void 0);
//# sourceMappingURL=order.entity.js.map