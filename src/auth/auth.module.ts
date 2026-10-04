import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {JwtStrategy} from "./strategies/jwt.strategy.js";
import {JwtAuthGuard} from "./guards/jwt_auth.guard.js";

@Module({
  imports: [
    UsersModule,

    ConfigModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,JwtAuthGuard],
  exports:[JwtAuthGuard]
})
export class AuthModule {}