import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { TasksService } from "./tasks.service.js";
import { CreateTaskDTO } from "./dto/create-task.dto.js";
import { JwtAuthGuard } from "../auth/guards/jwt_auth.guard.js";
import { UseGuards } from "@nestjs/common";
import type { Request } from 'express';


export interface TaskQuery {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
}

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getTasks(@Query() query: TaskQuery,@Req() req:any) {
        return this.tasksService.getTasks(query,req.user.sub);
    }


    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    getTasksById(@Param("id", new ParseUUIDPipe()) id: string,
                 @Req() req:any) {
        return this.tasksService.getTasksById(id,req.user.sub);

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createTasks(@Body() body: CreateTaskDTO,
        @Req() req: any) {
            console.log(req);
        console.log(req.user)
        return this.tasksService.createTasks(body,req.user.sub);
    }


    @UseGuards(JwtAuthGuard)
    @Patch("/:id")
    updateTasks(@Param("id", new ParseUUIDPipe()) id: string, @Body() body: any,
                @Req() req:any) {
        return this.tasksService.updateTasksbyId(id, body,req.user.sub);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete("/:id")
    deleteUserById(@Param("id") id: string, @Req() req:any) {
        return this.tasksService.deleteTask(id,req.user.sub);

    }
}
