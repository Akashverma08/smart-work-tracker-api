import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskSchema } from "./schemas/task.schema.js"
import { CreateTaskDTO } from "./dto/create-task.dto.js";
import { UpdateTaskDTO } from "./dto/update-task.dto.js"
import { TaskQuery } from "./tasks.controller.js";


@Injectable()
export class TasksService {

    constructor(
        @InjectModel(Task.name)
        private readonly taskModel: Model<Task>
    ) { }

    async getTasks(query: TaskQuery,userId:string) {
        try {
            const { title, description, status, priority } = query;
            const filter: any = {userId};
            if (title) {
                filter.title = { $regex: title, $options: "i" };
            }

            if (description) {
                filter.description = { $regex: description, $options: "i" };
            }
            if (status) {
                filter.status = { $regex: status, $options: "i" };
            }
            if (priority) {
                filter.priority = { $regex: priority, $options: "i" };
            }

            return await this.taskModel.find(filter);
        } catch (err) {
            throw new Error("Unable to get the data");
        }
    }


    async getTasksById(id: string,userId:string) {
        try {
            const task = await this.taskModel.findOne({ id,userId })

            if (!task) {
                throw new NotFoundException("Task Not Exist")
            }
            return task;

        } catch (err) {

            if (err instanceof NotFoundException) {
                throw err;
            }
            throw new Error("Unable to get Task by id")
        }
    }


    async createTasks(body: CreateTaskDTO,userId: string) {
        try {
            console.log(body);
            console.log(userId);
            return await this.taskModel.create({
                title: body.title,
                description: body.description,
                status: body.status,
                priority: body.priority,
                userId
            })

        } catch (err) {
            throw new Error("unable to Post the Data");
        }
    }



    async updateTasksbyId(id: string, body: UpdateTaskDTO,userId:string) {
        try {
            const task = await this.taskModel.findOneAndUpdate(
                { id,userId },
                body,
                { new: true }
            );

            if (!task) {
                throw new NotFoundException("Task Not Found");
            }
            return task;

        } catch (err) {
            if (err instanceof NotFoundException) {
                throw err;
            }
            throw new Error("Unable to Update the data");
        }

    }


    async deleteTask(id: string,userId:string) {
        try {
            const task = await this.taskModel.findOneAndDelete({ id ,userId});
            if (!task) {
                throw new NotFoundException("Task Not Found");
            }

            return task;

        } catch (err) {
            if (err instanceof NotFoundException) {
                throw err;

            }
            throw new Error("Unable to delete the Task")
        }


    }
}
