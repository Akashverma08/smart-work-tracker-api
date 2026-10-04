import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Users} from "./schemas/users.schema.js";
import {CreateUserDTO} from "./dto/create-user.dto.js";
import* as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name)
        private readonly userModel:Model<Users>
    ){}

    async addUsers(body:CreateUserDTO){
        const hashedPassword=await bcrypt.hash(body.password,10);

        return this.userModel.create({
            name:body.name,
            email:body.email,
            password:hashedPassword
        })

    }

    async findByEmail(email:string){
        return await this.userModel.findOne({email});
    }

    async getUser(){
        return await this.userModel.find();
    }

}
