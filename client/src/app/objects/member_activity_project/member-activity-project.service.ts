import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {MemberActivityProject} from "./member-activity-project";

@Injectable({
  providedIn: 'root'
})
export class MemberActivityProjectService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  selectAllFromProject(project_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/project/all_member_activity_project/'+project_id,this.httpOptions);
  }

  selectAllFromProjectDistinct(project_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/project/all_member_activity_project_distinct/'+project_id,this.httpOptions);
  }

  update(m_a_p:MemberActivityProject){
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
    this.generateHeaders();
    return this.http.put(this.domain + '/api/project/update_member_activity_project',body,this.httpOptions);
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
