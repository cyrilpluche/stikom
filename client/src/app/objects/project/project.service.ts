import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  selectAll(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/project/all',this.httpOptions);
  }

  createProject(project_title:string, project_code:string, project_work_code:string, project_start:Date, project_end:Date, sub_department_id:string) {
    let body = {
      project_title: project_title,
      project_code: project_code,
      project_work_code: project_work_code,
      project_start: project_start,
      project_end: project_end,
      sub_department_id: sub_department_id
    };
    console.log(body)
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/create',body,this.httpOptions);
  }

  bindMemberUnitProject(project_id:string, unit_id:string, member_id:string) {
    let body = {
      project_id: project_id,
      unit_id: unit_id,
      member_id: member_id
    };
    console.log(body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/bind_member_unit_project',body,this.httpOptions);
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
}
