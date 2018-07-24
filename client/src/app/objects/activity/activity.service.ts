import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";
import {Activity} from "./activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  createActivity(activity:Activity){
    let body = {
      activity_description: activity.activity_description,
      activity_shape: activity.activity_shape,
      activity_title: activity.activity_title,
      activity_id_is_father: activity.activity_id_is_father,
      sop_id: activity.sop_id,
      activity_type_duration: activity.activity_type_duration,
      activity_duration: activity.activity_duration,
      activity_type: activity.activity_type,
      activity_type_output: activity.activity_type_output,
      managment_level_id: activity.managment_level_id
    };
    console.log('Create activity : ', body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/activity/create',body,this.httpOptions);
  }

  select(activity_id) {
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/find_one/'+activity_id,this.httpOptions);
  }

  selectAllFromSop(sop_id) {
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_sop/'+sop_id,this.httpOptions);
  }

  selectAllFromJob(job_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_job/'+job_id,this.httpOptions);
  }

  selectAllFromUnit(unit_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_unit/'+unit_id,this.httpOptions);
  }

  update(activity: Activity){
    let body = {
      activity_id: activity.activity_id,
      activity_description: activity.activity_description,
      activity_shape: activity.activity_shape,
      activity_title: activity.activity_title,
      activity_id_is_father: activity.activity_id_is_father,
      sop_id: activity.sop_id,
      activity_type_duration: activity.activity_type_duration,
      activity_duration: activity.activity_duration,
      activity_type: activity.activity_type,
      activity_type_output: activity.activity_type_output,
      managment_level_id: activity.managment_level_id
    };
    console.log('Update activity : ', body);
    this.generateHeaders();
    return this.http.put(this.domain + '/api/activity/update',body,this.httpOptions);
  }

  delete(activity_id) {
    this.generateHeaders();
    console.log("activity id : ", activity_id)
    return this.http.delete(this.domain + '/api/activity/delete/'+activity_id,this.httpOptions);
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


