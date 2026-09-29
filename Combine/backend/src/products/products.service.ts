import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    getProducts() {
        return [
            {
                "id": 1,
                "firstName":"Akash",
                "lastName":"Verma",
                "email":"akashverma04901@gmail.com"
                
            }
        ]

    }
}
