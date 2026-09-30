import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks = [
        {
            id: 1,
            title: 'Learn NestJS',
            priority: "high",
            status: 'pending',
        },
        {
            id: 2,
            title: 'Learn Integration',
            priority: "Medium",
            status: 'Completed',
        },

    ]

    getTasks(search? :string){

        if(search){
            return this.tasks.filter((task)=> 
                task.status.toLowerCase().includes(search.trim().toLowerCase()) || 
                task.priority.toLowerCase().includes(search.trim().toLowerCase()) ||
                task.title.toLowerCase().includes(search.trim().toLowerCase())
            )
        }
        return this.tasks;
    }

    getTasksById(id:number){
        const singleTask=this.getTasks();
        return singleTask.find((task)=>task.id===id); 
    }
 

    createTasks(body:any){

        if( !body.title || !body.priority || !body.status){
            return {
                message:"All field required"
            }
        }
        const newUser={
            id:this.tasks.length +1,
            title:body.title,
            priority:body.priority,
            status:body.status
        }

        this.tasks.push(newUser);
        return {
            message:"User Add Successfully"
        }

    }
}
