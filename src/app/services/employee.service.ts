import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  employees: any = []
  empId: any;


  constructor(private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getEmployeeDataFromLocalStorage();
  }

  // Store Data to the local storage
  saveEmployeeDataIntoLocalStorage(employees: any) {
    if (employees != null) {
      localStorage.setItem('employees', JSON.stringify(employees))
      alert("Employeesuccessfully added!")
    }
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
    alert("Employee deleted!")
    this.getEmployeeDataFromLocalStorage();
  }


  showSuccess() {
    this.toastr.success('Employee succesfully added');
  }


}
