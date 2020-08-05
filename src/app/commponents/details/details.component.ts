import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentEmployeeID = null;
  currentEmployee: any;
  message = '';


  constructor(    
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) {
      this.getEmployee(this.route.snapshot.paramMap.get('id'));

    }

  ngOnInit() {
    this.message = '';
  }

  getEmployee(id) {
    this.currentEmployeeID = id;
    this.crudService.findById(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status,salary=this.currentEmployee.salary) {
    const data = {
      name: this.currentEmployee.name,
      salary: salary,
      published: status
    };
    let id = this.currentEmployeeID;
    this.crudService.update(id, data)
      .subscribe(
        response => {
          this.currentEmployee.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  
  updateEmployee() {
    console.log(this.currentEmployeeID)
    this.crudService.update(this.currentEmployeeID, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Employee Details were updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteEmployee() {
    this.crudService.delete(this.currentEmployee.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list']);
        },  
        error => {
          console.log(error);
        });
  }

}
