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
exports.UserOrdersDTO = exports.OrderItemForUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const order_entity_1 = require("../entities/order.entity");
class OrderItemForUserDTO {
}
exports.OrderItemForUserDTO = OrderItemForUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문한 상품 이름', example: '로제 떡볶이' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemForUserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '상품 이미지 URL',
        required: false,
        example: 'https://mys3image.s3.ap-northeast-2.amazonaws.com/1695777107743_original-6412cab88963b9b720f9f5e7e76e297c.jpg',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemForUserDTO.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문한 상품 개수', example: '3' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderItemForUserDTO.prototype, "count", void 0);
class UserOrdersDTO extends (0, swagger_1.PickType)(order_entity_1.OrderEntity, [
    'orderId',
    'discount',
    'createdAt',
]) {
}
exports.UserOrdersDTO = UserOrdersDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '가게 ID', example: 1 }),
    __metadata("design:type", Number)
], UserOrdersDTO.prototype, "storeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '가게 이름', example: '종훈 떡볶이' }),
    __metadata("design:type", String)
], UserOrdersDTO.prototype, "storeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OrderItemForUserDTO], description: '주문한 항목들' }),
    __metadata("design:type", Array)
], UserOrdersDTO.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '별점', required: false, example: 2 }),
    __metadata("design:type", Number)
], UserOrdersDTO.prototype, "star", void 0);
//# sourceMappingURL=get-user-orders.dto.js.map