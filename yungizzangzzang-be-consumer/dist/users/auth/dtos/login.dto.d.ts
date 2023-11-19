import { UserEntity } from 'src/users/entities/user.entity';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<UserEntity, "password" | "email">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
