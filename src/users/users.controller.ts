import { Body, Controller, Get, Post } from '@nestjs/common';
import {UsersService} from "./users.service.js";
import {CreateUserDTO} from "./dto/create-user.dto.js";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}


    @Get()
    getUsers(){
        return this.usersService.getUser()
    }

    @Post()
    addUser(@Body() body:CreateUserDTO ){
        return this.usersService.addUsers(body);

    }
}
