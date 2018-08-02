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
  ready: boolean = true;
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

  //Manage the disabled function of organisations selects
  pick_level: number = 1;
  organisation_elements: Object[] = [];

  organisation: Object;
  branch: Object;
  department: Object;
  sub_department: SubDepartment;

  constructor(private _memberService: MemberService,
              private _organisationService: OrganisationService,
              private _managmentLevelService: ManagmentLevelService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService,
              private router: Router) { }

  async ngOnInit() {
    await this.loadOrganisations();

    this.getOrganisations();
    this.getManagmentLevels();
  }

  getOrganisations(){
    this._organisationService.selectAll()
      .subscribe( (res) => {
         this.organisations=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  getManagmentLevels(){
    this._managmentLevelService.selectAll()
      .subscribe( (res) => {
          this.managmentLevels=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async onSubmitRegistration() {
    this.ready = false;
    //this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen)
    await this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.sub_department.sub_department_id.toString(),this.managmentLevelChoosen)
      .subscribe( (res) => {
          this.errorMessage = "";
          this.step1 = false;
          this.step2 = false;
          this.displayEnd = true;
          this.errorMessage = "";
          this.ready = true;
        },
        error => {
          this.errorMessage = error.error.message;
          this.ready = true;
        });
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


  /*  ----------------- ORGANISATIONS / BRANCHS / DEPARTMENTS / SUB_DEPARTMENTS ----------------- */

  //We get all Organisations, branchs, departements and sub departements from database
  async loadOrganisations(){
    try {
      this.errorMessage = "";
      let o = await this._organisationService.selectAll().toPromise();
      let organisations = o['data'] as Organisation[];

      for (let organisation of organisations){
        let b = await this._branchService.selectAllFromOrganisation(organisation.organisation_id.toString()).toPromise();
        let branchs = b['data'] as Branch[];

        //We generate one element
        let e0 = {
          organisation: organisation,
          branchs: []
        };

        for (let branch of branchs){
          let d = await this._departmentService.selectAllFromBranch(branch.branch_id.toString()).toPromise();
          let departments = d['data'] as Department[];

          //We generate one sub element
          let e1 = {
            branch: branch,
            departments: []
          };

          for (let department of departments){
            let s = await this._subDepartmentService.selectAllFromDepartment(department.department_id.toString()).toPromise();
            let sub_departments = s['data'] as SubDepartment[];

            //We generate lasts elements of the schema
            let e2 = {
              department: department,
              sub_departments: sub_departments
            };
            e1['departments'].push(e2);
          }
          e0['branchs'].push(e1);
        }
        this.organisation_elements.push(e0);
        this.organisation = this.findElement(this.organisation_elements[0]['organisation'].organisation_id, 1);
        this.branch = this.organisation['branchs'][0];
        this.department = this.branch['departments'][0];
        this.sub_department = this.department['sub_departments'][0];
      }
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  /* element is an id of organisation, branch or department. Level 1 = We search for organisation, level 2 = we search for departments.
   * Return : the element of organisation_elements wanted */
  findElement(element: number, level: number){
    if ( level == 1){
      //We search for an organisation
      for (let e of this.organisation_elements){
        if (e['organisation'].organisation_id == element){
          return e;
        }
      }
    }
    else if ( level == 2 ){
      for (let e of this.organisation['branchs']){
        if (e['branch'].branch_id == element){
          return e;
        }
      }
    }
    else if ( level == 3 ){
      for (let e of this.branch['departments']){
        if (e['department'].department_id == element){
          return e;
        }
      }
    }
    else if ( level == 4 ){
      for (let e of this.department['sub_departments']){
        if (e.department_id == element){
          return e;
        }
      }
    }
  }

  pickOrganisation(){
    // I have picked my new organisation, I need to set my new array for other levels
    this.branch = this.organisation['branchs'][0];
    this.department = this.branch['departments'][0];
    this.sub_department = this.department['sub_departments'][0];
  }

  pickBranch(){
    // I have picked my new organisation, I need to set my new array for other levels
    this.department = this.branch['departments'][0];
    this.sub_department = this.department['sub_departments'][0];
  }

  pickDepartment(){
    this.sub_department = this.department['sub_departments'][0];
    //
  }

  //  ----------------- ORGANISATIONS / BRANCHS / DEPARTMENTS / SUB_DEPARTMENTS ----------------- //

}
