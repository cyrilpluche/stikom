import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../../objects/member/member.service';
import { Router } from '@angular/router';
import {OrganisationService} from "../../../objects/organisation/organisation.service";
import {Organisation} from "../../../objects/organisation/organisation";
import {BranchService} from "../../../objects/branch/branch.service";
import {Branch} from "../../../objects/branch/branch";
import {DepartmentService} from "../../../objects/department/department.service";
import {SubDepartmentService} from "../../../objects/sub_department/sub-department.service";
import {Department} from "../../../objects/department/department";
import {SubDepartment} from "../../../objects/sub_department/sub-department";
import {ManagmentLevel} from "../../../objects/managment_level/managment_level";
import {ManagmentLevelService} from "../../../objects/managment_level/managment-level.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /* ----- Data ----- */
  step1: boolean = true;
  step2: boolean = false;
  branchEnabled: boolean = false;
  departmentEnabled: boolean = false;
  subDepartmentEnabled: boolean = false;

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  emailConfirmation: string = "";
  password: string = "";
  passwordConfirmation: string = "";

  organisations: [Organisation];
  branchs: [Branch];
  departments: [Department];
  subDepartments: [SubDepartment];

  organisationChoosen: string = "";
  branchChoosen: string = "";
  departmentChoosen: string = "";
  subDepartmentChoosen: string = "";

  managmentLevels:[ManagmentLevel];
  managmentLevelChoosen: string = "";

  errorMessage: string = "";
  displayEnd : boolean = false;

  //Norme RFC2822 email validation
  emailReg = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor(private _memberService: MemberService,
              private _organisationService: OrganisationService,
              private _managmentLevelService: ManagmentLevelService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService,
              private router: Router) { }

  ngOnInit() {
    this.getOrganisations();
    this.getManagmentLevels();
  }

  getOrganisations(){
    this._organisationService.selectAll()
      .subscribe( (res) => {
         console.log(res['data']);
         this.organisations=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  getManagmentLevels(){
    this._managmentLevelService.selectAll()
      .subscribe( (res) => {
          console.log(res['data']);
          this.managmentLevels=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async onSubmitRegistration() {
    if (this.subDepartmentChoosen == "") {
      this.errorMessage = "Sub-Department name required. If not select default.";
    }
    else {

      //this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen)
      await this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen,this.managmentLevelChoosen)
        .subscribe( (res) => {
            this.errorMessage = "";
            this.step1 = false;
            this.step2 = false;
            this.displayEnd = true;
            this.errorMessage = "";

          },
          error => {
            this.errorMessage = error.error.message;
          });

    }
  }



  changeStep() {
    this.step1 = !this.step1;
    this.step2 = !this.step2;
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
    else if (this.managmentLevelChoosen == "") {
      this.errorMessage = "You need to choose a managment level.";
    }
    else {
      //Connexion code
      this.step1 = false;
      this.step2 = true;
      console.log("Next");
      this.errorMessage = "";
    }
  }

  // Select fields authorizations
  enableBranch() {
    if (this.organisationChoosen != "") {
      this._branchService.selectAllFromOrganisation(this.organisationChoosen)
        .subscribe( (res) => {
            this.branchs=res['data'];
            this.branchEnabled = true;
          },
          error => {
            this.errorMessage=error.error.message;

          });


    }
  }

  enableDepartment() {
    if (this.branchChoosen != ""){
      if (this.branchChoosen != 'blank') {
        this._departmentService.selectAllFromBranch(this.branchChoosen)
          .subscribe( (res) => {
              console.log(res['data']);
              this.departments=res['data'];
              this.departmentEnabled = true;
            },
            error => {
              this.errorMessage=error.error.message;

              this.departmentEnabled = false;
              this.subDepartmentEnabled = false;
              this.departmentChoosen = "blank";
              this.subDepartmentChoosen = "blank";

            });

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
        this._subDepartmentService.selectAllFromDepartment(this.departmentChoosen)
          .subscribe( (res) => {
              console.log(res['data']);
              this.subDepartments=res['data'];
              this.subDepartmentEnabled = true;
            },
            error => {
              this.errorMessage=error.error.message;
              this.subDepartmentEnabled = false;
              this.subDepartmentChoosen = "blank";

            });

      }
      else{
        this.subDepartmentEnabled = false;
        this.subDepartmentChoosen = "blank";
      }
    }
  }


}
