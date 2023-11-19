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
exports.DeleteItemDtoResponse = exports.UpdateItemDtoResponse = exports.CreateItemDtoResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateItemDtoResponse {
}
exports.CreateItemDtoResponse = CreateItemDtoResponse;
__decorate([
    (0, class_validator_1.IsObject)({ message: String }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Object,
        description: '핫딜 생성 완료',
        example: '핫딜 생성이 완료되었습니다.',
    }),
    __metadata("design:type", String)
], CreateItemDtoResponse.prototype, "message", void 0);
class UpdateItemDtoResponse {
}
exports.UpdateItemDtoResponse = UpdateItemDtoResponse;
__decorate([
    (0, class_validator_1.IsObject)({ message: String }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Object,
        description: '핫딜 수정 완료',
        example: '핫딜 수정이 완료되었습니다.',
    }),
    __metadata("design:type", String)
], UpdateItemDtoResponse.prototype, "message", void 0);
class DeleteItemDtoResponse {
}
exports.DeleteItemDtoResponse = DeleteItemDtoResponse;
__decorate([
    (0, class_validator_1.IsObject)({ message: String }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Object,
        description: '핫딜 생성 완료',
        example: '핫딜 삭제가 완료되었습니다.',
    }),
    __metadata("design:type", String)
], DeleteItemDtoResponse.prototype, "message", void 0);
//# sourceMappingURL=item-response.dto.js.map