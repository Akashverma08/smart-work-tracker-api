import { Schema, Prop ,SchemaFactory} from "@nestjs/mongoose";
import {v4 as uuidv4} from "uuid";
@Schema()
export class Task {
    @Prop({
        required: true,
        unique:true,
        default: uuidv4
    })
    id: string;

    @Prop({
        required: true
    })
    title: string;

    @Prop()
    description: string;

    @Prop({
        default:"pending",
        enum:["pending","in-progress","completed"]
    })
    status: string;

    @Prop({
       default:"medium",
       enum: ["low", "medium", "high"]
    })
    priority: string;
}

export const TaskSchema=SchemaFactory.createForClass(Task)