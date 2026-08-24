import {IsString,IsInt} from "class-validator";
export class CreateEmployeeDto {
    @IsString()
    name:string;

    @IsString()
    department:string;
    
    @IsString()
    project:string;

    @IsInt()
    rank:number;
}


