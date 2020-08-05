import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  allEmployee: any;
  currentEmployee = null;
  currentIndex = -1;
  name = '';
  id = -1;


  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.retrieveAllEmployee();
  }

  retrieveAllEmployee(){
    this.crudService.getAll()
      .subscribe(
        data => {
          this.allEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  refreshList() {
    this.retrieveAllEmployee();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setActiveEmployee(employee, index) {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  searchName() {
    this.crudService.findByName(this.name)
      .subscribe(
        data => {
          this.allEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchId() {
    this.crudService.findById(this.id)
      .subscribe(
        data => {
          this.allEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
