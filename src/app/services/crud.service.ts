import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})


export class CrudService {

  constructor(private http: HttpClient) { }
  
  getAll() :Observable<any>{
    return this.http.get(`${baseUrl}/list`);
  }

  create(data) :Observable<any>{
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id, data) :Observable<any>{
    let final_data = {};
    console.log(data);
    if(data["salary"] != undefined){
      final_data["salary"] = data["salary"]; 
    }
    if(data["name"] != undefined){
      final_data["name"] = data["name"];
    }
    if(!data["name"] && !data["salary"]) {
      console.error("No changes!!!");
      return;
    }
    console.log(final_data);
    return this.http.put(`${baseUrl}/update/${id}`, final_data);
  }

  delete(id) :Observable<any>{
    return this.http.delete(`${baseUrl}/remove/${id}`);
  }

  findByName(name) :Observable<any>{
    let data = {"name": name};
    return this.http.post(`${baseUrl}/name`, data);
  }

  findById(id) :Observable<any>{
    // console.log(this.http.get(`${baseUrl}/id/${id}`));
    return this.http.get(`${baseUrl}/id/${id}`);
  }

}
