import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Output() deleteData = new EventEmitter;
  @Output() getData = new EventEmitter;
  @Input() employees: any;
  

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

  }

  getEmployeeDataFromLocalStorage() {
    // this.employees = this.empService.getEmployeeDataFromLocalStorage();
    this.employees = this.getData.emit();
    console.log(this.employees);
  }

  updateEmployee(employee: any) {
    console.log("edit", employee);
  }

  deleteEmployee(empId: any) {
    this.deleteData.emit(empId);
    // this.getEmployeeDataFromLocalStorage();
    this.employees = this.getData.emit();

  }

}