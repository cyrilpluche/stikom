import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Job} from "./job";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  createJob(job_name:string, jobe_code:string, sop_id:string) {
    let body = {
      job_name: job_name,
      job_code: jobe_code,
      sop_id: sop_id
    };
    console.log('create job : ', body);
    this.generateHeaders();

    return this.http.post(this.domain + '/api/job/create',body,this.httpOptions);
  }

  select(job_id) {
    this.generateHeaders();
    return this.http.get(this.domain + '/api/job/find_one/'+job_id,this.httpOptions);
  }

  selectFromActivity(activity_id) {
    this.generateHeaders();
    return this.http.get(this.domain + '/api/job/all_from_activity/'+activity_id,this.httpOptions);
  }

  selectAllFromSop(sop_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/job/all_from_sop/'+sop_id,this.httpOptions);
  }

  bind_job_activity(job_id:string, activity_id:string){
    this.generateHeaders();
    let body = {
      activity_id: activity_id,
      job_id: job_id
    };
    console.log('bind_job_activity : ', body);
    return this.http.post(this.domain + '/api/job/bind_job_activity/',body,this.httpOptions);
  }

  computeDateEnd(jobs: Job[], date_begin: Date){
    let body = {
      jobs: jobs,
      date_begin: date_begin
    };
    console.log('body : ', body)
    this.generateHeaders();

    return this.http.post(this.domain + '/api/job/compute_end_date',body,this.httpOptions);
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

  getJobIdLocal() {
    if(localStorage.getItem("Job_id") === null)
    {
      this.router.navigate(['/','job-list']);
    }
    else {
      let job_id = localStorage.getItem('Job_id');
      return job_id;
    }
  }

  removeJobIdLocal () {
    localStorage.removeItem('Job_id');
  }

}
