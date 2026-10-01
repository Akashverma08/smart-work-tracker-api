import { Injectable } from '@nestjs/common';
import { QueryParams,BodyDTO } from "./products.controller.js";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Products,ProductSchema} from "./schemas/products.schema.js";

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Products.name)
        private readonly productModel:Model<Products>
    ){}

    async getProducts(query?:QueryParams){
        try{
            if(query?.firstName){
                return await this.productModel.find({firstName:{$regex:query.firstName,$options:'i'}})
            }
            if(query?.lastName){
                return await this.productModel.find({lastName:{$regex:query.lastName,$options:'i'}})

            }

            if(query?.email){
                return await this.productModel.find({email:{$regex:query.email,$options:'i'}})

            }
            return await this.productModel.find();
        }catch(err){
            throw new Error("Unable to fetch the data");
        }
    }


    async getProductsbyId(id: string) {
        try{
            return await this.productModel.findOne({id});

        }catch(err){
            throw new Error("Unable to get the data by id");

        }
        
    }


    async createUser(body: BodyDTO){
        try{

            return await this.productModel.create({
                firstName:body.firstName,
                lastName:body.lastName,
                email:body.email
            })

        }catch(err){
            throw new Error("Unable to Post the data");

        }

    }


    async deleteUserById(id :string){
        try{

            return await this.productModel.findOneAndDelete({id});

        }catch(err){
            throw new Error("Unable to delete");
        }
    }


    async updateUserById(id:string,body:BodyDTO){
        try{
            return await this.productModel.findOneAndUpdate({id},body,{new:true});

        }catch(err){
            throw new Error("Unable to update the user")

        }

    }

}
