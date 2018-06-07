import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /* ----- Data ----- */
  step1: boolean = true;
  organisationEnabled: boolean = true;
  branchEnabled: boolean = false;
  departmentEnabled: boolean = false;
  subDepartmentEnabled: boolean = false;

  organisationChoosen: string = "";
  branchChoosen: string = "";
  departmentChoosen: string = "";
  subDepartmentChoosen: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

  changeStep() {
    this.step1 = !this.step1;
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
