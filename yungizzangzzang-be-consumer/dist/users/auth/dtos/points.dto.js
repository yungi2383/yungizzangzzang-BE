"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GettingPointsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../entities/user.entity");
class GettingPointsDto extends (0, swagger_1.PickType)(user_entity_1.UserEntity, [
    'point',
]) {
}
exports.GettingPointsDto = GettingPointsDto;
//# sourceMappingURL=points.dto.js.map