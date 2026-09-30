import { Body, Controller, Get, Param, Query,Post } from '@nestjs/common';
import {ProductsService} from "./products.service.js";


export interface QueryParams{
    firstName?:string;
    lastName?:string;
    email?:string;
}

export interface BodyDTO{
    id:number;
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
        return this.productsService.getProductsbyId(Number(id));
    }


    @Post("/add")
    createUser(@Body() body:BodyDTO){
        return this.productsService.createUser(body);
        
    }

}
