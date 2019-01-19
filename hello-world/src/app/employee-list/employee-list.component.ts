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
  public errorMsg;
  constructor(private _employeeServices: EmployeeService) {
   }

  ngOnInit() {
    this._employeeServices.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);
  }
}
