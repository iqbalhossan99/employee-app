import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

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
    salary: ''
  }

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

  }

  employeeForm2 = new FormGroup({
    name: new FormControl(this.employee?.name, { nonNullable: true }),
    email: new FormControl(this.employee?.email),
    salary: new FormControl(this.employee?.salary)
  })

  getEmployeeDataFromLocalStorage() {
    this.employees = this.getData.emit();
    console.log(this.employees);
  }

  updateEmployee() {
    const { name, email, salary }: any = this.employeeForm2.value
    this.employee = {
      empId: this.empId,
      name: name,
      email: email,
      salary:salary
    }
    const updateItemIndex = this.employees.findIndex((empl: { empId: any; }) => empl.empId === this.empId);

    console.log("empindex", updateItemIndex)
    if (updateItemIndex != -1) {
      this.employees[updateItemIndex] = this.employee;
      console.log("update---", this.employees[updateItemIndex])
    }
    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.getData.emit();
  }

  deleteEmployee(empId: any) {
    this.deleteData.emit(empId);
    this.employees = this.getData.emit();
  }

  onEdit(employee: any) {
    this.employee = employee;
    this.empId = employee.empId;
  }

}