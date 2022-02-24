import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { UserService } from "src/services/user.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}