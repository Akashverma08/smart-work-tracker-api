import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from "./dto/login.dto.js";
import { UsersService } from "../users/users.service.js";
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
                private readonly jwtService:JwtService) {}

    async login(body: LoginDTO) {
        const user = await this.usersService.findByEmail(body.email);

        if (!user) {
            throw new UnauthorizedException("Invalid email or password")
        }

        const isValid = await bcrypt.compare(body.password, user.password);
        if (!isValid) {
            throw new UnauthorizedException("Invalid email or password")
        }
        console.log(isValid);

        const payload={
            sub:user.id,
            email:user.email
        }

        //console.log("JWT SECRET:", process.env.JWT_SECRET);

        const token=this.jwtService.sign(payload);

        return {
            access_token:token
        }

    }
}
