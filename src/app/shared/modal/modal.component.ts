import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  employeeArr: any = []
  employee = {
    name: '',
    email: '',
    salary: null
  }

  constructor() {

  }

  ngOnInit(): void { }

  employeeForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    salary: new FormControl()
  })

  saveEmployeeDataIntoLocalStorage() {
    const { name, email, salary } = this.employeeForm.value;
    this.employee = {
      name: name,
      email: email,
      salary: salary
    }
    this.employeeArr.push(this.employee)
    localStorage.setItem('employees', JSON.stringify(this.employeeArr))
    console.log("from", this.employeeForm.value, "employee: ", this.employee, "array: ", this.employeeArr);
  }

}
