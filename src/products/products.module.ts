import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';
import {MongooseModule} from "@nestjs/mongoose";
import {Products,ProductSchema} from "./schemas/products.schema.js";

@Module({

  imports:[
    MongooseModule.forFeature([{
      name:Products.name,
      schema:ProductSchema
    }])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
