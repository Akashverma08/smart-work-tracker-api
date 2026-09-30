import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {TasksService} from "./tasks.service.js";



@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService:TasksService){}

    @Get()
    getTasks(@Query('search') search?:string){
        return this.tasksService.getTasks(search);
    }

    @Get("/:id")
    getTasksById(@Param("id") id:string){
        return this.tasksService.getTasksById(Number(id));

    }

    @Post()
    createTasks(@Body() body :any){
        return this.tasksService.createTasks(body);
    }
}
