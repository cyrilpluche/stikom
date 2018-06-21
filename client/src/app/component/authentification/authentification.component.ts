import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../objects/member/member.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  /* ----- Data ----- */
  errorMessage: string = "";
  email: string = "";
  password: string = "";
  user: string = "";

  //Norme RFC2822 email validation
  emailReg = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor(private _memberService: MemberService,
              private router: Router) { }

  ngOnInit() {
  }



  onSubmit() {
    this.errorMessage ="";
    if (this.email == null || this.email == "") {
      this.errorMessage = "Email is required.";
    }
    else if (!this.emailReg.test(this.email)) {
      this.errorMessage = "Please enter a valid email."
    }
    else if (this.password == null || this.password == "") {
      this.errorMessage = "Password is required";
    }
    else {
      let user;
      let auth=true;
      let resultat;

      this._memberService.auth(this.email,this.password)
        .subscribe( (res) => {
            this.errorMessage = "";
            this._memberService.storeUserData(res['token']);
            this.router.navigate(['/home']);
          },
          error => {
            console.log("ERREUR : ",error);

            this.errorMessage = error.error.message;



          });

    }
  }

}
