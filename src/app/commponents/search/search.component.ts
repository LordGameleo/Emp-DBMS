import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allEmployee : any;
  currentEmployee = null;
  currentIndex = -1;
  name = '';
  id = -1;


  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  retrieveAllEmployee(){
    this.crudService.getAll()
      .subscribe(
        data => {
          this.allEmployee = data;
        },
        error => {
          console.log(error);
        });
  }
  
  setActiveEployee(tutorial, index) {
    this.currentEmployee = tutorial;
    this.currentIndex = index;
  }  
  refreshList() {
    this.retrieveAllEmployee();
    this.currentEmployee = null;
    this.currentIndex = -1;
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
        },
        error => {
          console.log(error);
        });
  }


}
