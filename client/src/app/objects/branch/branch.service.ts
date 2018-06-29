import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  domain = environment.SERVEUR_URL;
  httpOptions;
  constructor(private http:HttpClient) {

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

  add(branchName:string,organisationId:string){
    let body = {
      branch_name: branchName,
      organisation_id: organisationId
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/branch/create',body,this.httpOptions);
  }

  selectAllFromOrganisation(organisation:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/branch/all?organisation='+organisation,this.httpOptions);
  }

  delete(branch:string){
    this.generateHeaders();
    return this.http.delete(this.domain + '/api/branch/delete/'+branch,this.httpOptions);
  }

}
