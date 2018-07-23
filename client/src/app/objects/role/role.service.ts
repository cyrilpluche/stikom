import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  domain = environment.SERVEUR_URL;
  httpOptions;

  constructor(private http:HttpClient) { }
  generateHeaders() {
    if (localStorage.getItem("Token") === null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    } else {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("Token")
        })
      };
    }
  }

  selectAll(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/role/all',this.httpOptions);
  }
}
