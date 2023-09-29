import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  employeeArr: any = []
  employee = {
    empId: null,
    name: '',
    email: '',
    salary: null
  }

  constructor(private emService: EmployeeService) {

  }

  ngOnInit(): void {
    this.getEmployeeDataFromLocalStorage();
  }

  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(null)
  })

  saveEmployeeDataIntoLocalStorage() {
    this.emService.saveEmployeeDataIntoLocalStorage(this.employeeForm)
    const { name, email, salary }: any = this.employeeForm.value;
    this.employee = {
      empId: this.employeeArr.length + 1,
      name: name,
      email: email,
      salary: salary
    }
    this.employeeArr.push(this.employee)
    localStorage.setItem('employees', JSON.stringify(this.employeeArr))
    this.employeeForm.reset();
    console.log("from", this.employeeForm.value, "employee: ", this.employee, "array: ", this.employeeArr);
    this.getEmployeeDataFromLocalStorage()
  }

  getEmployeeDataFromLocalStorage() {
    const getEmployees: any = localStorage.getItem('employees')
    if (getEmployees != null) {
      this.employeeArr = JSON.parse(getEmployees)
    }
    console.log("get employees", this.employeeArr)
  }




}
