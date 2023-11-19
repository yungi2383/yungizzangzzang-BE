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
exports.CreateOrderDto = exports.CreateOrderOrderItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_order_item_dto_1 = require("../../order-items/dto/create-order-item.dto");
const order_entity_1 = require("../entities/order.entity");
class CreateOrderOrderItemDto extends (0, swagger_1.PickType)(order_entity_1.OrderEntity, [
    'discount',
    'storeId',
    'totalPrice',
]) {
}
exports.CreateOrderOrderItemDto = CreateOrderOrderItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_order_item_dto_1.CreateOrderItemDto], description: '주문 항목' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateOrderOrderItemDto.prototype, "items", void 0);
class CreateOrderDto extends (0, swagger_1.PickType)(order_entity_1.OrderEntity, [
    'userId',
    'discount',
    'storeId',
    'totalPrice',
    'orderId',
]) {
}
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=create-order.dto.js.map