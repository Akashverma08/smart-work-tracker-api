import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { StudentsModule } from './students/students.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [UsersModule, EmployeesModule, StudentsModule, SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
