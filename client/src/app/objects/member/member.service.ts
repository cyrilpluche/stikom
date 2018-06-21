import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  domain = environment.SERVEUR_URL;
  authToken;
  httpOptions;
  constructor(private http:HttpClient) {

  }

  auth(mail:string, password:string){
    let body = {
      mail: mail,
      password: password
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/member/login',body,this.httpOptions);
  }

  register(mail:string, password:string,first_name:string, name:string, is_admin:string,sub_department_id:string ){
    let body = {
      mail: mail,
      password: password,
      first_name:first_name,
      name:name,
      is_admin:is_admin,
      sub_department_id:sub_department_id
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/member/register',body,this.httpOptions);
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

  storeUserData(token) {
    localStorage.setItem('Token', token);

  }

  getToken() {
    return localStorage.getItem("Token")
  }
  async isLoggednIn() {
    if(this.getToken() !== null)
    {
      let body = {
      };

      this.generateHeaders();
      await this.http.post(this.domain + '/api/member/loggedIn',body,this.httpOptions).subscribe( (res) => {
        console.log(res);
        return true;
        },
        error => {
          return false;
        });


    }else{
      return false;
    }


  }

}
