"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../entities/user.entity");
class LoginDto extends (0, swagger_1.PickType)(user_entity_1.UserEntity, [
    'email',
    'password',
]) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map