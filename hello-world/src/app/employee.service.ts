import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": 'Alex', "age": 20 },
      {"id": 2, "name": 'Bob', "age": 27 },
      {"id": 3, "name": 'John', "age": 22 },
      {"id": 4, "name": 'Steve', "age": 29 },
      {"id": 5, "name": 'David', "age": 231 },
    ];
  }
}
