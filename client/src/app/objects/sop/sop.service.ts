import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SopService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient) { }

  createSop (sop_title: string, sop_creation: Date, sop_revision: Date, sop_published: Date,sop_approvement: Date, sop_rules: string, sop_warning: string, sop_staff_qualification: string, sop_tools: string, sop_type_reports, sop_objectives: string) {
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

  generateHeaders()
  {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Token")
      })
    };
  }
}


