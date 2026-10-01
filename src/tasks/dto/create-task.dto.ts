import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDTO{

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsOptional()
    @IsString()
    description?:string;

    @IsOptional()
    @IsIn([
        'pending','completed','in-progress'
    ])
    status?:string;

    @IsOptional()
    @IsIn([
        'low','high','medium'
    ])
    priority?:string;
    
}