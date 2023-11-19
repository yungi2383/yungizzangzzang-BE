"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const stores_entity_1 = require("../entities/stores.entity");
class UpdateStoreReqDto extends (0, swagger_1.PickType)(stores_entity_1.StoreEntity, [
    'name',
    'storePhoneNumber',
    'category',
]) {
}
exports.UpdateStoreReqDto = UpdateStoreReqDto;
//# sourceMappingURL=store.request.dto.js.map