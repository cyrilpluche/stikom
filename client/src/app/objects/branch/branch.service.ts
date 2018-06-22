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
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Token")
      })
    };
  }

  selectAllFromOrganisation(organisation:string){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/branch/all?organisation='+organisation,this.httpOptions);
  }

}
