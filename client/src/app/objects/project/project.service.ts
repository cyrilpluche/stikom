import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Project} from "./project";
import {MemberActivityProject} from "../member_activity_project/member-activity-project";

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

  createProject(project:Project) {
    let body = {
      project_title: project.project_title,
      project_code: project.project_code,
      project_work_code: project.project_work_code,
      project_start: project.project_start,
      project_end: project.project_end,
      sub_department_id: project.sub_department_id
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/create',body,this.httpOptions);
  }

  bindProjectJob(project_id:string, job_id:string){
    let body = {
      project_id: project_id,
      job_id: job_id
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/bind_project_job',body,this.httpOptions);
  }

  bindMemberUnitProject(project_id:string, unit_id:string, member_id:string, job_id:string) {
    let body = {
      project_id: project_id,
      unit_id: unit_id,
      job_id: job_id,
      member_id: member_id
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/project/bind_member_unit_project',body,this.httpOptions);
  }

  bindMemberActivityProject(m_a_p:MemberActivityProject) {
    let body = {
      project_id: m_a_p.project_id,
      job_id: m_a_p.job_id,
      member_id: m_a_p.member_id,
      activity_id: m_a_p.activity_id,
      target_date: m_a_p.target_date,
      date_begin: m_a_p.date_begin,
      evaluation: m_a_p.evaluation,
      finished_date: m_a_p.finished_date,
      sign: m_a_p.sign,
      note: m_a_p.note,
      target_quantity: m_a_p.target_quantity,
      finished_quantity: m_a_p.finished_quantity,
      finished_duration: m_a_p.finished_duration
    };
    console.log('body : ', body);
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
    return this.http.get(this.domain + '/api/project/find_One/'+project_id,this.httpOptions);
  }


  selectAllFromProject(project_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_all_job_from_project/'+project_id,this.httpOptions);
  }
}
