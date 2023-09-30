import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() employees: any;
  @Output() getData = new EventEmitter;


  employee = {
    empId: null,
    name: '',
    email: '',
    salary: null
  }

  constructor(private empService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.getData.emit();
  }

  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(null)
  })

  saveEmployeeDataIntoLocalStorage() {
    const { name, email, salary }: any = this.employeeForm.value;
    this.employee = {
      empId: this.employees.length + 1,
      name: name,
      email: email,
      salary: salary
    }
    this.employees.push(this.employee)
    this.empService.saveEmployeeDataIntoLocalStorage(this.employees)
    this.getData.emit();
    this.employeeForm.reset();
  }



}
