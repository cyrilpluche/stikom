import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

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

  add(organisationName:string){
    let body = {
      organisation_name: organisationName
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/organisation/create',body,this.httpOptions);
  }

  selectAll(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/organisation/all',this.httpOptions);
  }

  delete(organisation:string){
    this.generateHeaders();
    return this.http.delete(this.domain + '/api/organisation/delete/'+organisation,this.httpOptions);
  }
}
