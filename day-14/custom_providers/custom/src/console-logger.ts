import {Injectable} from "@nestjs/common";
import {Logger} from "./logger.interface.js";

@Injectable()
export class ConsoleLogger implements Logger{
    log(message :string){
        console.log('LOG',message);
    }

}