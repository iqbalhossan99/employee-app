import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Output() deleteData = new EventEmitter;
  @Output() getData = new EventEmitter;
  @Input() employees: any;

  empId = null;
  employee = {
    empId: null,
    name: '',
    email: '',
    role: ''
  }

  constructor(
    private empService: EmployeeService,
  ) { }

  ngOnInit(): void {

  }

  employeeForm2 = new FormGroup({
    name: new FormControl(this.employee?.name, [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl(this.employee?.email, [
      Validators.required,
      Validators.email
    ]),
    role: new FormControl(this.employee?.role)
  })



  getEmployeeDataFromLocalStorage() {
    this.employees = this.getData.emit();
    console.log(this.employees);
  }

  updateEmployee() {
    const { name, email, role }: any = this.employeeForm2.value
    this.employee = {
      empId: this.empId,
      name: name,
      email: email,
      role: role
    }
    const updateItemIndex = this.employees.findIndex((empl: { empId: any; }) => empl.empId === this.empId);

    console.log("empindex", updateItemIndex)
    if (updateItemIndex != -1) {
      this.employees[updateItemIndex] = this.employee;
      console.log("update---", this.employees[updateItemIndex])
      
    }
    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.getData.emit();
    alert("Updated")

  }

  deleteEmployee(empId: any) {
    this.deleteData.emit(empId);
    this.employees = this.getData.emit();
  }

  onEdit(employee: any) {
    this.employee = employee;
    this.empId = employee.empId;
  }

  get name() {
    return this.employeeForm2.get('name')
  }
  get email() {
    return this.employeeForm2.get('email')
  }
  
}