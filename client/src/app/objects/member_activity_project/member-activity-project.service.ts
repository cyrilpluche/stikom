import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

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
