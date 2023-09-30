import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private empService: EmployeeService,
  ) { }

  employees: any = [];

  ngOnInit(): void {
    this.getData();
    console.log("parent", this.employees)
  }

  getData() {
    this.employees = this.empService.getEmployeeDataFromLocalStorage();
    return this.employees
  }

  deleteData(empId: any): void {
    this.empService.deleteEmployee(empId)
  }
}
 
