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
exports.UpdateItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const item_entity_1 = require("../entities/item.entity");
class UpdateItemDto extends (0, swagger_1.PickType)(item_entity_1.ItemEntity, [
    'name',
    'content',
    'prevPrice',
    'price',
    'count',
]) {
}
exports.UpdateItemDto = UpdateItemDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: '할인 시작 시간',
        example: '19',
    }),
    __metadata("design:type", Number)
], UpdateItemDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: '할인 마감 시간',
        example: '21',
    }),
    __metadata("design:type", Number)
], UpdateItemDto.prototype, "endTime", void 0);
//# sourceMappingURL=update-item.dto.js.map