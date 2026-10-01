import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskSchema } from "./schemas/task.schema.js"
import { CreateTaskDTO } from "./dto/create-task.dto.js";
import { UpdateTaskDTO } from "./dto/update-task.dto.js"


@Injectable()
export class TasksService {

    constructor(
        @InjectModel(Task.name)
        private readonly taskModel: Model<Task>
    ) { }

    async getTasks(search?: string) {
        try {
            if (search) {
                return await this.taskModel.find({
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { status: { $regex: search, $options: 'i' } },
                        { priority: { $regex: search, $options: 'i' } }
                    ]
                })
            }
            return await this.taskModel.find();

        } catch (err) {
            throw new Error("Unable to get the data");

        }

    }


    async getTasksById(id: string) {
        try {
            const task = await this.taskModel.findOne({ id })

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


    async createTasks(body: CreateTaskDTO) {
        try {
            return await this.taskModel.create({
                title: body.title,
                description: body.description,
                status: body.status,
                priority: body.priority
            })

        } catch (err) {
            throw new Error("unable to Post the Data");
        }
    }



    async updateTasksbyId(id: string, body: UpdateTaskDTO) {

        try {
            const task = await this.taskModel.findOneAndUpdate(
                { id },
                body,
                { new: true }
            );

            if (!task) {
                throw new NotFoundException("Task Not Found");
            }
            return task;

        } catch (err) {

            if(err instanceof NotFoundException){
                throw err;
            }
            throw new Error("Unable to Update the data");
        }

    }


    async deleteTask(id: string) {
        try {
            const task = await this.taskModel.findOneAndDelete({ id });
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
