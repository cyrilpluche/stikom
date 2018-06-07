import { Component, OnInit } from '@angular/core';



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

  //Norme RFC2822 email validation
  emailReg = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor() { }

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
      //Connexion code
      console.log("Ok boy");
      this.errorMessage = "";
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
