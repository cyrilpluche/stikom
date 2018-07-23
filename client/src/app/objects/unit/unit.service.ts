import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  createUnit(unit_name:string) {
    let body = {
      unit_name: unit_name
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/unit/create',body,this.httpOptions);
  }

  bindUnitSop(unit_id:string, sop_id:string){
    let body = {
      unit_id: unit_id,
      sop_id: sop_id
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/sop/bind_sop_unit',body,this.httpOptions);
  }

  bindUnitActivity(unit_id:string, activity_id:string){
    let body = {
      unit_id: unit_id,
      activity_id: activity_id
    };
    console.log('bind : ', body);
    this.generateHeaders();
    return this.http.post(this.domain + '/api/unit/execute_activity',body,this.httpOptions);
  }

  selectAllFromSop(sop_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/unit/all_from_sop/'+sop_id,this.httpOptions);
  }

  selectAllFromActivity(activity_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/unit/all_from_activity/'+activity_id,this.httpOptions);
  }

  selectAllFromJob(job_id:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/unit/all_from_job/'+job_id,this.httpOptions);
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
