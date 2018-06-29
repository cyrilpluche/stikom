import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  createActivity(activity_title:string, activity_description:string, activity_type_duration:string, activity_duration:number, activity_type:string, activity_type_output:string, activity_shape:string,
  activity_id_is_father:string, sop_id:string, managment_level_id:string){
    let body = {
      activity_description: activity_description,
      activity_shape: activity_shape,
      activity_title: activity_title,
      activity_id_is_father: activity_id_is_father,
      sop_id: sop_id,
      activity_type_duration: activity_type_duration,
      activity_duration: activity_duration,
      activity_type: activity_type,
      activity_type_output: activity_type_output,
      managment_level_id: managment_level_id
    };
    console.log(body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/activity/create',body,this.httpOptions);
  }

  selectAllFromSop(sop_id) {
    this.generateHeaders();
    return this.http.get(this.domain + '/api/activity/all_from_sop/'+sop_id,this.httpOptions);
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


