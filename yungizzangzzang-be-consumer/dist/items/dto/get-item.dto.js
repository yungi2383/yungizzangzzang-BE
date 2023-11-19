"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const item_entity_1 = require("../entities/item.entity");
class GetItemDto extends (0, mapped_types_1.PickType)(item_entity_1.ItemEntity, [
    'itemId',
    'name',
    'content',
    'prevPrice',
    'price',
    'count',
    'startTime',
    'endTime',
    'imgUrl',
    'deletedAt',
]) {
}
exports.GetItemDto = GetItemDto;
//# sourceMappingURL=get-item.dto.js.map