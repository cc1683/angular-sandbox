import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any = [];
  constructor(private _employeeServices: EmployeeService) {
   }

  ngOnInit() {
    this.employees = this._employeeServices.getEmployees();
  }
}
