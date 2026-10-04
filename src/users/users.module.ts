import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import {Users,UserSchema} from "./schemas/users.schema.js";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Users.name,
        schema:UserSchema
      }
  ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
