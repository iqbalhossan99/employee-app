import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  // employees = [
  //   {
  //     "id": 1,
  //     "name": "Rahim Ahmed",
  //     "email": "rahim.ahmed@example.com",
  //     "salary": 50000
  //   },
  //   {
  //     "id": 2,
  //     "name": "Fatima Khan",
  //     "email": "fatima.khan@example.com",
  //     "salary": 55000
  //   },
  //   {
  //     "id": 3,
  //     "name": "Ayesha Rahman",
  //     "email": "ayesha.rahman@example.com",
  //     "salary": 48000
  //   },
  //   {
  //     "id": 4,
  //     "name": "Kamal Chowdhury",
  //     "email": "kamal.chowdhury@example.com",
  //     "salary": 60000
  //   },
  //   {
  //     "id": 5,
  //     "name": "Sadia Islam",
  //     "email": "sadia.islam@example.com",
  //     "salary": 52000
  //   }
  // ]

   employees: any;
  constructor() { }
  
  ngOnInit(): void{
    this.getEmployeeDataFromLocalStorage()
  }
  
  getEmployeeDataFromLocalStorage() {
    const getEmployees: any = localStorage.getItem('employees')
    if (getEmployees != null) {
      this.employees = JSON.parse(getEmployees)
    }
    console.log("get employees", this.employees)
  }
}
