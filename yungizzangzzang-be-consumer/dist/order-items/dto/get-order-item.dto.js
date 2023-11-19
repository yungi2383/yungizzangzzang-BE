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
exports.GetOrderItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const order_item_entity_1 = require("../entities/order-item.entity");
class GetOrderItemDto extends (0, swagger_1.PickType)(order_item_entity_1.OrderItemEntity, ['count']) {
}
exports.GetOrderItemDto = GetOrderItemDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '개별 메뉴 이름',
        example: '로제 떡볶이',
    }),
    __metadata("design:type", String)
], GetOrderItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: '개별 메뉴 1개 가격',
        example: '4000',
    }),
    __metadata("design:type", Number)
], GetOrderItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: '개별 메뉴 전체(주문수량) 가격',
        example: '8000',
    }),
    __metadata("design:type", Number)
], GetOrderItemDto.prototype, "totalPrice", void 0);
//# sourceMappingURL=get-order-item.dto.js.map