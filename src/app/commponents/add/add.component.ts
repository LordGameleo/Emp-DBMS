import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee = {
    name: '',
    salary: 0,
    publised: false,
  };
  submitted = false;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }


  saveEmployee() {
    const data = {
      name: this.employee.name,
      salary: this.employee.salary,
    };
    console.log(data);
    this.crudService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEmployee() {
    this.submitted = false;
    this.employee = {
      name: '',
      salary: 0,
      publised: false
    };
  }


}
