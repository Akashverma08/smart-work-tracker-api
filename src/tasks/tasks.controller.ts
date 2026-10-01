import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import {TasksService} from "./tasks.service.js";
import {CreateTaskDTO} from "./dto/create-task.dto.js";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService:TasksService){}

    @Get()
    getTasks(@Query('search') search?:string){
        return this.tasksService.getTasks(search);
    }

    @Get("/:id")
    getTasksById(@Param("id",new ParseUUIDPipe()) id:string){
        return this.tasksService.getTasksById(id);

    }

    @Post()
    createTasks(@Body() body :CreateTaskDTO){
        return this.tasksService.createTasks(body);
    }

    @Patch("/:id")
    updateTasks(@Param("id",new ParseUUIDPipe()) id:string,@Body() body:any){
        return this.tasksService.updateTasksbyId(id,body);
    }

    @Delete("/:id")
    deleteUserById(@Param("id") id:string){
        return this.tasksService.deleteTask(id);

    }
}
