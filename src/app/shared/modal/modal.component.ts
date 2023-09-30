import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() employees: any;
  @Output() getData = new EventEmitter;

  // getEmployees: any = [];


  employee: any = {
    empId: null,
    name: '',
    email: '',
    role: null
  }

  constructor(
    private empService: EmployeeService,
  ) {
  }

  ngOnInit(): void {

  }

  employeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    role: new FormControl(null)
  })

  saveEmployeeDataIntoLocalStorage() {
    const { name, email, role }: any = this.employeeForm.value;
    console.log("em before---", this.employees)
    this.employee = {
      empId: this.employees?.length + 1,
      name: name,
      email: email,
      role: role
    }
    this.employees?.push(this.employee)
    this.empService.saveEmployeeDataIntoLocalStorage(this.employees)

    this.getData.emit()
    this.employeeForm.reset();
  }

  get name() {
    return this.employeeForm.get('name')
  }
  get email() {
    return this.employeeForm.get('email')
  }


}

