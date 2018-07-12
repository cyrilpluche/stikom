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

  select(project_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/project/find_one/'+project_id,this.httpOptions);
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

  bindProjectJob(project_id:string, job_id:string){
    let body = {
      project_id: project_id,
      job_id: job_id
    };
    console.log(body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/bind_project_job',body,this.httpOptions);
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

  bindMemberActivityProject(project_id:string, member_id:string, activity_id:string, target_date:Date, date_begin:Date,
                            evaluation:string, finished_date:Date, sign:string, note:string, target_quantity:number, finished_quantity:number, finished_duration:number) {
    let body = {
      project_id: project_id,
      member_id: member_id,
      activity_id: activity_id,
      target_date: target_date,
      date_begin: date_begin,
      evaluation: evaluation,
      finished_date: finished_date,
      sign: sign,
      note: note,
      target_quantity: target_quantity,
      finished_quantity: finished_quantity,
      finished_duration: finished_duration
    };
    console.log(body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/bind_member_activity_project',body,this.httpOptions);
  }

  delete(project_id) {
    this.generateHeaders();
    return this.http.delete(this.domain + '/api/project/delete/'+project_id,this.httpOptions);
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

  getProject(project_id:string){
    this.generateHeaders();
    console.log(project_id);
    return this.http.get(this.domain + '/api/project/find_One/'+project_id,this.httpOptions);
  }


  selectAllFromProject(project_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_all_job_from_project/'+project_id,this.httpOptions);
  }
}
