import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() getData = new EventEmitter;


  employeeArr: any = []
  employee = {
    empId: null,
    name: '',
    email: '',
    salary: null
  }

  constructor(private empService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeArr = this.empService.getEmployeeDataFromLocalStorage();
;
  }

  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(null)
  })

  saveEmployeeDataIntoLocalStorage() {
    const { name, email, salary }: any = this.employeeForm.value;
    this.employee = {
      empId: this.employeeArr.length + 1,
      name: name,
      email: email,
      salary: salary
    }
    this.employeeArr.push(this.employee)
    this.empService.saveEmployeeDataIntoLocalStorage(this.employeeArr)
    this.getData.emit();
    this.employeeForm.reset();
  }



}
