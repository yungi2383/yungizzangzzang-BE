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
exports.OrdersProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const order_items_repository_1 = require("../order-items/order-items.repository");
const prisma_service_1 = require("../prisma/prisma.service");
const orders_repository_1 = require("./orders.repository");
let OrdersProcessor = class OrdersProcessor {
    constructor(ordersRepository, orderItemsRepository, prisma) {
        this.ordersRepository = ordersRepository;
        this.orderItemsRepository = orderItemsRepository;
        this.prisma = prisma;
    }
    async handleCreateOrder(job) {
        const { createOrderOrderItemDto, userId } = job.data;
        const order = await this.ordersRepository.createOrder(createOrderOrderItemDto, userId);
        await this.orderItemsRepository.createOrderItem(order.orderId, createOrderOrderItemDto.items);
        return {};
    }
    async handleUpdateItemCount(job) {
        const updatePromises = job.data.items.map((item) => this.prisma.items.update({
            where: { itemId: item.itemId },
            data: {
                count: {
                    decrement: item.count,
                },
            },
        }));
        await Promise.all(updatePromises);
    }
    async handleUpdateUserPoint(job) {
        const { userId, remainUserPoint } = job.data;
        await this.prisma.users.update({
            where: { userId },
            data: {
                point: remainUserPoint,
            },
        });
    }
};
exports.OrdersProcessor = OrdersProcessor;
__decorate([
    (0, bull_1.Process)({ name: 'create', concurrency: 5 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersProcessor.prototype, "handleCreateOrder", null);
__decorate([
    (0, bull_1.Process)({ name: 'updateItemCount', concurrency: 5 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersProcessor.prototype, "handleUpdateItemCount", null);
__decorate([
    (0, bull_1.Process)({ name: 'updateUserPoint', concurrency: 5 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersProcessor.prototype, "handleUpdateUserPoint", null);
exports.OrdersProcessor = OrdersProcessor = __decorate([
    (0, bull_1.Processor)('orders'),
    __metadata("design:paramtypes", [orders_repository_1.OrdersRepository,
        order_items_repository_1.OrderItemsRepository,
        prisma_service_1.PrismaService])
], OrdersProcessor);
//# sourceMappingURL=orders.processor.js.map