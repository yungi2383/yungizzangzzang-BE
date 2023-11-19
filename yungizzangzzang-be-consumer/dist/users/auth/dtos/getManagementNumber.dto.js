"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetManagementNumberDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const stores_entity_1 = require("../../../stores/entities/stores.entity");
class GetManagementNumberDto extends (0, swagger_1.PickType)(stores_entity_1.StoreEntity, [
    'managementNumber',
]) {
}
exports.GetManagementNumberDto = GetManagementNumberDto;
//# sourceMappingURL=getManagementNumber.dto.js.map