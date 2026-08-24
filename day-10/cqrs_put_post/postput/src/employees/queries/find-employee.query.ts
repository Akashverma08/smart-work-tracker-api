export class FindEmployeeQuery {
  constructor(
    public readonly id?: number,
    public readonly name?: string,
    public readonly department?: string,
  ) {}
}