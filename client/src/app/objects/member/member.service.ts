import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  domain = environment.SERVEUR_URL;
  constructor(private http:HttpClient) {}


  auth(mail:string, password:string){
    let body = {
      mail: mail,
      password: password
    };
    console.log("ici");
    return this.http.post(this.domain + '/api/member/login',body);
  }

  storeUserData(token, utilisateur) {
    localStorage.setItem('token', token);
    localStorage.setItem('utilisateur', utilisateur.email);
  }
}
