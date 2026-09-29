import { Controller, Get } from '@nestjs/common';
import {ProductsService} from "./products.service.js";
@Controller('users')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getProducts(){
        return this.productsService.getProducts();
    }
}
