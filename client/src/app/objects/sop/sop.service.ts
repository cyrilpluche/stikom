import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";
import {Project} from "../project/project";
import {Sop} from "./sop";

@Injectable({
  providedIn: 'root'
})
export class SopService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient,
              private router: Router) { }

  createSop(sop_title:string, sop_creation:Date, sop_revision:Date, sop_published:Date,sop_approvement:string, sop_rules:string, sop_warning:string, sop_staff_qualification:string, sop_tools:string, sop_type_reports:string, sop_objectives:string) {
    let body = {
      sop_title: sop_title,
      sop_creation: sop_creation,
      sop_revision: sop_revision,
      sop_published: sop_published,
      sop_approvment: sop_approvement,
      sop_rules: sop_rules,
      sop_warning: sop_warning,
      sop_staff_qualification: sop_staff_qualification,
      sop_tools: sop_tools,
      sop_type_reports: sop_type_reports,
      sop_objectives: sop_objectives
    };
    this.generateHeaders();

    return this.http.post(this.domain + '/api/sop/create',body,this.httpOptions);
  }

  updateSop(sop: Sop) {
    let body = {
      sop_id: sop.sop_id,
      sop_title: sop.sop_title,
      sop_approvment: sop.sop_approvment,
      sop_creation: sop.sop_creation,
      sop_objectives: sop.sop_objectives,
      sop_published: sop.sop_published,
      sop_revision: sop.sop_revision,
      sop_rules: sop.sop_rules,
      sop_staff_qualification: sop.sop_staff_qualification,
      sop_tools: sop.sop_tools,
      sop_type_reports: sop.sop_type_reports,
      sop_warning: sop.sop_warning
    };
    this.generateHeaders();
    return this.http.put(this.domain + '/api/sop/update',body,this.httpOptions);
  }

  selectAll(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/sop/all',this.httpOptions);
  }

  delete(sop_id) {
    this.generateHeaders();
    return this.http.delete(this.domain + '/api/sop/delete/'+sop_id,this.httpOptions);
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

  getSopIdLocal() {
    if(localStorage.getItem("Sop_id") === null)
    {
      this.router.navigate(['/','sop-list']);
    }
    else {
      let sop_id = localStorage.getItem('Sop_id');
      return sop_id;
    }
  }

  removeSopIdLocal () {
    localStorage.removeItem('Sop_id');
  }

  getSop(sop_id:string){
    this.generateHeaders();
    console.log(sop_id);
    return this.http.get(this.domain + '/api/sop/findOne/'+sop_id,this.httpOptions);
  }

}


