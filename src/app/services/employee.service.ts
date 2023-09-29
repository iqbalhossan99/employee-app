import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  employeeArr: any = []
  employee = {
    empId: null,
    name: '',
    email: '',
    salary: null
  }

  constructor() { }



  saveEmployeeDataIntoLocalStorage(employeeForm: any) {
    const { name, email, salary }: any = employeeForm;

    console.log("service: ", employeeForm)
    // const { name, email, salary }: any = this.employeeForm.value;
    // this.employee = {
    //   empId: this.employeeArr.length + 1,
    //   name: name,
    //   email: email,
    //   salary: salary
    // }
    // this.employeeArr.push(this.employee)
    // localStorage.setItem('employees', JSON.stringify(this.employeeArr))
    // this.employeeForm.reset();
    // console.log("from", this.employeeForm.value, "employee: ", this.employee, "array: ", this.employeeArr);
  }

  getEmployeeDataFromLocalStorage() {
    const getEmployees: any = localStorage.getItem('employees')
    if (getEmployees != null) {
      this.employeeArr = JSON.parse(getEmployees)
    }
    console.log("get employees", this.employeeArr)
  }

}
