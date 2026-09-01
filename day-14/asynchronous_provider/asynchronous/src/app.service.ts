import { Injectable ,Inject} from '@nestjs/common';

@Injectable()
export class AppService {

  constructor (
    @Inject('ASYNC_CONNECTION')
    private connection :any,
  ){
    console.log("Connection inside service", this.connection);
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
