import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from "uuid";

@Schema()
export class Products {
    @Prop({
        required: true,
        unique: true,
        default: uuidv4
    })
    id: string;

    @Prop({
        required: true,
    })
    firstName: string;

    @Prop({
        required: true,
    })
    lastName: string;


    @Prop({
        required: true,
    })
    email: string;

}

export const ProductSchema=SchemaFactory.createForClass(Products);