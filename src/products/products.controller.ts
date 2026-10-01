import { Body, Controller, Get, Param, Query,Delete,Post, Patch } from '@nestjs/common';
import {ProductsService} from "./products.service.js";


export interface QueryParams{
    firstName?:string;
    lastName?:string;
    email?:string;
}

export interface BodyDTO{
    firstName:string;
    lastName:string;
    email:string;
}

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getProducts(@Query() query:QueryParams){
        console.log(query.firstName,query.lastName)
        return this.productsService.getProducts(query);
    }

    @Get("/:id")
    getProductsbyId(@Param("id") id:string){
        return this.productsService.getProductsbyId(id);
    }


    @Post("/")
    createUser(@Body() body:BodyDTO){
        return this.productsService.createUser(body);
        
    }


    @Delete("/:id")
    deleteUser(@Param('id') id :string){
        return this.productsService.deleteUserById(id);
        
    }

    @Patch("/:id")
    updateUser(@Param('id') id:string,@Body() body:BodyDTO){
        return this.productsService.updateUserById(id,body);
    }

}
