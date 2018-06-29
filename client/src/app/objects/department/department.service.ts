import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  domain = environment.SERVEUR_URL;
  httpOptions;
  constructor(private http:HttpClient) {

  }

  generateHeaders()
  {
    if(localStorage.getItem("Token") === null)
    {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    }else{
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("Token")
        })
      };
    }

  }

  add(departmentName:string,branchId){
    let body = {
      department_name: departmentName,
      branch_id: branchId
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/department/create',body,this.httpOptions);
  }

  selectAllFromBranch(branch:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/department/all?branch='+branch,this.httpOptions);
  }
}
