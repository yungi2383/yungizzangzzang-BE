"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_item_entity_1 = require("../entities/order-item.entity");
class CreateOrderItemDto extends (0, swagger_1.PickType)(order_item_entity_1.OrderItemEntity, [
    'orderId',
    'itemId',
    'count',
]) {
}
exports.CreateOrderItemDto = CreateOrderItemDto;
//# sourceMappingURL=create-order-item.dto.js.map