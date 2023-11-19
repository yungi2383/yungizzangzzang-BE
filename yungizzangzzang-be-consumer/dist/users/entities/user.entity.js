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
exports.UserEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserEntity {
}
exports.UserEntity = UserEntity;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '이메일은 필수 입력값입니다.' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'email', example: 'asdf@asdf.com' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '비밀번호는 필수 입력값입니다.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4, { message: '4자이상을 입력해주세요' }),
    (0, class_validator_1.MaxLength)(8, { message: '8자 이하를 입력해주세요' }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]*$/, {
        message: '비밀번호를 영어와 숫자로만 만들어주세요 ',
    }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '비밀번호',
        example: '1q2w',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '이름은 필수 입력값입니다.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: '최소 1글자 이상은 입력해주세용' }),
    (0, class_validator_1.MaxLength)(20, { message: '20자 이하로 입력해주세요' }),
    (0, swagger_1.ApiProperty)({ type: String, description: '이름', example: 'Dcafrio' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean, description: '고객/사장', example: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isClient", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '닉네임은 필수 입력값입니다.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: '2자 이상을 입력해주세요' }),
    (0, class_validator_1.MaxLength)(20, { message: '20자 이하를 입력해주세요' }),
    (0, swagger_1.ApiProperty)({ type: String, description: '닉네임', example: 'nickname' }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '정확하게 입력해주세요' }),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: Number, description: '포인트', example: 5000 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "point", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "version", void 0);
//# sourceMappingURL=user.entity.js.map