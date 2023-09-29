import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  employees: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getEmployeeDataFromLocalStorage()
  }

  getEmployeeDataFromLocalStorage() {
    const getEmployees: any = localStorage.getItem('employees')
    if (getEmployees != null) {
      this.employees = JSON.parse(getEmployees)
    }
    console.log("get employees", this.employees)
  }

  updateEmployee(employee: any) {
    console.log("edit", employee)
  }

  deleteEmployee(empId: any) {
    const deleteItemIndex = this.employees.findIndex((employee: { empId: any; }) => employee.empId === empId);

    if (deleteItemIndex != -1) {
      this.employees.splice(deleteItemIndex, 1);
    }

    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

}