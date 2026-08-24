import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindEmployeeQuery } from '../queries/find-employee.query';
import { EmployeesService } from '../employees.service';

@QueryHandler(FindEmployeeQuery)
export class FindEmployeeHandler
  implements IQueryHandler<FindEmployeeQuery>
{
  constructor(private readonly employeesService: EmployeesService) {}

  async execute(query: FindEmployeeQuery) {
    return this.employeesService.findEmployee(
      query.id,
      query.name,
      query.department,
    );
  }
}