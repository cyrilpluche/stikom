import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  domain = environment.SERVEUR_URL;
  httpOptions;
  constructor(private http:HttpClient) {

  }

  select(member_id){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/member/find_one/'+member_id,this.httpOptions);
  }

  auth(mail:string, password:string){
    let body = {
      mail: mail,
      password: password
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/member/login',body,this.httpOptions);
  }

  seedCheck(seed:string){
    let body = {
      seed: seed
    };
    this.generateHeaders();
    return this.http.put(this.domain + '/api/member/validate_registration',body,this.httpOptions);
  }

  register(mail:string, password:string,first_name:string, name:string, is_admin:string,sub_department_id:string,managment_level:string ){
    let body = {
      mail: mail,
      password: password,
      first_name:first_name,
      name:name,
      is_admin:is_admin,
      sub_department_id:sub_department_id,
      managment_level_id:managment_level
    };
    this.generateHeaders();
    return this.http.post(this.domain + '/api/member/register',body,this.httpOptions);
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

  storeUserData(token) {
    localStorage.setItem('Token', token);
  }

  storeUserDataFull(user:any) {
    localStorage.setItem('Id', user['member_id']);
    localStorage.setItem('FirstName', user['member_first_name']);
    localStorage.setItem('Name', user['member_name']);
    localStorage.setItem('Mail', user['member_mail']);

  }

  getUserDataFull()
  {
    if(localStorage.getItem("Mail") === null)
    {
      return {
        mail: "Erreur",
        first_name:"Erreur",
        name:"Erreur"
      };
    }else{
      return {
        id: localStorage.getItem("Id"),
        mail: localStorage.getItem("Mail"),
        first_name:localStorage.getItem("FirstName"),
        name:localStorage.getItem("Name")
      };
    }


  }

  logout() {
    localStorage.clear();
  }

  getToken() {

    return localStorage.getItem("Token")
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  setUserDetails(){
    let body = {
    };

    this.generateHeaders();
    return this.http.post(this.domain + '/api/member/loggedIn',body,this.httpOptions);
  }

  selectAll(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/member/all',this.httpOptions);
  }

  selectAllWaiting(){
    this.generateHeaders();
    return this.http.get(this.domain + '/api/member/waiting_member',this.httpOptions);
  }


  validateUser(idUser:string){
    let body = {
      member_id: idUser
    };
    console.log(idUser);
    this.generateHeaders();
    return this.http.put(this.domain + '/api/member/validate_member',body,this.httpOptions);
  }

  passwordUpdate(actual:string,newP:string,confP:string)
  {
    let body = {
      member_mail: localStorage.getItem("Mail"),
      old_password:actual,
      new_password1:newP,
      new_password2:confP
    };
    console.log(localStorage.getItem("Mail"));
    this.generateHeaders();
    return this.http.put(this.domain + '/api/member/update_password',body,this.httpOptions);
  }



}
