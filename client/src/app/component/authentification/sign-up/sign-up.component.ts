import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /* ----- Data ----- */
  step1: boolean = true;
  branchEnabled: boolean = false;
  departmentEnabled: boolean = false;
  subDepartmentEnabled: boolean = false;

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  emailConfirmation: string = "";
  password: string = "";
  passwordConfirmation: string = "";

  organisationChoosen: string = "";
  branchChoosen: string = "";
  departmentChoosen: string = "";
  subDepartmentChoosen: string = "";

  errorMessage: string = "";

  //Norme RFC2822 email validation
  emailReg = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("I'm here");
    if (this.organisationChoosen == "") {
      this.errorMessage = "Organisation name required.";
    }
    else {
      console.log("Sign up ok.");
      this.errorMessage = "";
    }
  }

  changeStep() {
    this.step1 = true;
    this.errorMessage = "";
  }

  firstStepVerification() {
    if (this.firstName == null || this.firstName == "") {
      this.errorMessage = "First name is required.";
    }
    else if (this.lastName == null || this.lastName == "") {
      this.errorMessage = "Last name is required.";
    }
    else if (this.email == null || this.email == "") {
      this.errorMessage = "Email is required.";
    }
    else if (!this.emailReg.test(this.email)) {
      this.errorMessage = "Please enter a valid email."
    }
    else if (this.emailConfirmation != this.email) {
      console.log(this.emailConfirmation);
      console.log(this.email);
      this.errorMessage = "Email confirmation is wrong.";
    }
    else if (this.password == null || this.password == "") {
      this.errorMessage = "Password is required";
    }
    else if (this.passwordConfirmation != this.password) {
      this.errorMessage = "Password confirmation is wrong.";
    }
    else {
      //Connexion code
      this.step1 = false;
      console.log("Next");
      this.errorMessage = "";
    }
  }

  // Select fields authorizations
  enableBranch() {
    if (this.organisationChoosen != "") {
      this.branchEnabled = true;
    }
  }

  enableDepartment() {
    if (this.branchChoosen != ""){
      if (this.branchChoosen != 'blank') {
        this.departmentEnabled = true;
      }
      else{
        this.departmentEnabled = false;
        this.subDepartmentEnabled = false;
        this.departmentChoosen = "blank";
        this.subDepartmentChoosen = "blank";
      }
    }
  }

  enableSubDepartment() {
    if (this.departmentChoosen != "") {
      if (this.departmentChoosen != "blank") {
        this.subDepartmentEnabled = true;
      }
      else{
        this.subDepartmentEnabled = false;
        this.subDepartmentChoosen = "blank";
      }
    }
  }

}
