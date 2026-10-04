import {Prop, Schema,SchemaFactory} from "@nestjs/mongoose";
import {v4 as uuidv4} from "uuid";

@Schema()
export class Users{
    @Prop({
        required:true,
        unique:true,
        default:uuidv4
    })
    id:string;

    @Prop({
        required:true
    })
    name:string;

    @Prop({
        required:true,
        unique:true
    })
    email:string;

    @Prop({
        required:true
    })
    password:string

}

export const UserSchema=SchemaFactory.createForClass(Users);