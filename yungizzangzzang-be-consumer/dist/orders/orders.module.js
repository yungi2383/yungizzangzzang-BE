"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const bull_config_provider_1 = require("../common/providers/bull-config.provider");
const items_module_1 = require("../items/items.module");
const order_items_module_1 = require("../order-items/order-items.module");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_service_1 = require("../users/auth/auth.service");
const orders_processor_1 = require("./orders.processor");
const orders_repository_1 = require("./orders.repository");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            order_items_module_1.OrderItemsModule,
            items_module_1.ItemsModule,
            bull_1.BullModule.forRootAsync('bullqueue-config', {
                useClass: bull_config_provider_1.BullConfigProvider,
            }),
            bull_1.BullModule.registerQueue({
                configKey: 'bullqueue-config',
                name: 'orders',
            }),
        ],
        providers: [orders_repository_1.OrdersRepository, event_emitter_1.EventEmitter2, auth_service_1.AuthService, orders_processor_1.OrdersProcessor],
        exports: [orders_repository_1.OrdersRepository, orders_processor_1.OrdersProcessor],
    })
], OrdersModule);
//# sourceMappingURL=orders.module.js.map