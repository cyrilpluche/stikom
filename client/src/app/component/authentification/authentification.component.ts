import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../objects/member/member.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

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
      //Connexion code
      this._memberService.auth(this.email,this.password).subscribe(
        function (res) {
          console.log(res)
        }, function (err) {
          console.log(err)
        }
        // resultat => {resultat = resultat},
        /*
          err => {auth=false},() =>
        {
          if (!auth) {
            this.errorMessage = "Wrong mail or password !";
          } else {
            this._memberService.storeUserData(resultat.token, resultat.utilisateur);
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 2000);

          }


        }
         */

      );

    }
  }

  /*
  private connexion(){
    if(localStorage.getItem('Token')){
      this.route.navigate(['/accueil']);
    }else{
      this.reset();
      this.errorMessage = "Erreur de connexion";
    }
  }*/

}
