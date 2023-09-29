import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  employees: any = []
  
  constructor() { }

  ngOnInit(): void {
    this.getEmployeeDataFromLocalStorage();

  }

  // Store Data to the local storage
  saveEmployeeDataIntoLocalStorage(employees:any) {
    localStorage.setItem('employees', JSON.stringify(employees))
    this.getEmployeeDataFromLocalStorage()
  }

  // Get Data from the local storage
  getEmployeeDataFromLocalStorage() {
    console.log("service: ", this.employees)
    const getEmployees: any = localStorage.getItem('employees')
    if (getEmployees != null) {
      this.employees = JSON.parse(getEmployees)
    }
    console.log("service: ", this.employees)

    return this.employees;
  }

  // Delete Employee
  deleteEmployee(empId: any) {

    const deleteItemIndex = this.employees.findIndex((employee: { empId: any; }) => employee.empId === empId);

    if (deleteItemIndex != -1) {
      this.employees.splice(deleteItemIndex, 1);
    }

    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  

}
