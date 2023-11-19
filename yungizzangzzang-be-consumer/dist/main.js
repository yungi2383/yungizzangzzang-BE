"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const success_interceptor_1 = require("./common/interceptors/success.interceptor");
const undefinedToNull_interceptor_1 = require("./common/interceptors/undefinedToNull.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 8001;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Yungizzang')
        .setDescription('Yungizzang API doc')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'jwt')
        .setVersion('1.0')
        .addTag('Yungizzang')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalInterceptors(new undefinedToNull_interceptor_1.UndefinedToNullInterceptor(), new success_interceptor_1.SuccessInterceptor());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors({
        origin: process.env.CLIENT_URL || `http://localhost:3000`,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.use(cookieParser());
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map