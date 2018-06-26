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


  createActivity(activity_type_duration:string, activity_duration:number, activity_type:string, activity_type_output:string, activity_shape:string, job_id:string,
  activity_id_is_father:string, sop_id:string){
    let body = {
      activity_type_duration: activity_type_duration,
      activity_duration: activity_duration,
      activity_type: activity_type,
      activity_type_output: activity_type_output,
      activity_shape: activity_shape,
      job_id: job_id,
      activity_id_is_father: activity_id_is_father,
      sop_id: sop_id
    };
    this.generateHeaders();
    return "1";
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


