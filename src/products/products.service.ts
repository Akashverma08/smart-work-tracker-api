import { Injectable } from '@nestjs/common';
import { QueryParams,BodyDTO } from "./products.controller.js";


@Injectable()
export class ProductsService {

    private products = [
        {
            id: 1,
            firstName: "Akash",
            lastName: "Verma",
            email: "akash@gmail.com"
        },
        {
            id: 2,
            firstName: "Rahul",
            lastName: "Sharma",
            email: "rahul@gmail.com"
        },
        {
            id: 3,
            firstName: "Priya",
            lastName: "Singh",
            email: "priya@gmail.com"
        },
        {
            id: 4,
            firstName: "Rohan",
            lastName: "Kumar",
            email: "rohan@gmail.com"
        },
        {
            id: 5,
            firstName: "Neha",
            lastName: "Gupta",
            email: "neha@gmail.com"
        }
    ];

    getProducts(query?: QueryParams) {


        if (query?.firstName) {
            return this.products.filter((user) => user.firstName.toLowerCase().includes(query.firstName!.toLowerCase()));
        }
        if (query?.lastName) {
            return this.products.filter((user) => user.firstName.toLowerCase().includes(query.lastName!.toLowerCase()));
        }
        if (query?.email) {
            return this.products.filter((user) => user.email.toLowerCase().includes(query.email!.toLowerCase()));
        }
        return this.products;

    }

    getProductsbyId(id: number) {
        const products = this.getProducts();
        return products.find((product) => product.id === id);
    }


    createUser(body: BodyDTO) {

        if(!body.id || !body.firstName || !body.lastName || !body.email){
            return {
                message:"All field must required"
            }
        }
        const newUser = {
            id: body.id,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email
        }

        const products = this.getProducts();
        products.push(newUser);

        return newUser;

    }


    deleteUser(id:number){
        const index=this.products.findIndex((product)=>product.id===id);
        if(index===-1){
            return " User Not Found"
        }
        const deletedUser=this.products.splice(index,1);
        return deletedUser[0];

    }

    updateUser(id:number,body:BodyDTO){
        const user=this.products.find((u)=> u.id===id);

        if(!user){
            return {
                message:"User Not found"
            }
        }

        if(body.firstName!==undefined){
            user.firstName=body.firstName;
        }

        if(body.lastName!==undefined){
            user.lastName=body.lastName;
        }
        if(body.email!==undefined){
            user.email=body.email;
        }

        return user;

    }

}
