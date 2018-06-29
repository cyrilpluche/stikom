import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrganisationService} from "../../objects/organisation/organisation.service";
import {Organisation} from "../../objects/organisation/organisation";
import {BranchService} from "../../objects/branch/branch.service";
import {Branch} from "../../objects/branch/branch";
import {DepartmentService} from "../../objects/department/department.service";
import {SubDepartmentService} from "../../objects/sub_department/sub-department.service";
import {Department} from "../../objects/department/department";
import {SubDepartment} from "../../objects/sub_department/sub-department";

@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.scss']
})
export class OrganizationManagementComponent implements OnInit {

  branchEnabled: boolean = false;
  departmentEnabled: boolean = false;
  subDepartmentEnabled: boolean = false;

  organisations: [Organisation];
  branchs: [Branch];
  departments: [Department];
  subDepartments: [SubDepartment];

  organisationChoosen: string = "";
  branchChoosen: string = "";
  departmentChoosen: string = "";
  subDepartmentChoosen: string = "";

  addInput: string = "";

  errorMessage: string = "";
  displayEnd: boolean = false;
  title:string;
  text:string;

  constructor(private _organisationService: OrganisationService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService,
              private router: Router) { }

  ngOnInit() {
    this.getOrganisations();
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


  // Select fields authorizations
  enableBranch() {
    if (this.organisationChoosen != "") {
      this._branchService.selectAllFromOrganisation(this.organisationChoosen)
        .subscribe( (res) => {
            this.branchs=res['data'];
            this.branchEnabled = true;
            this.errorMessage="";
          },
          error => {
            this.errorMessage=error.error.message;

          });


    }
    this.branchChoosen="";
    this.departmentChoosen="";
    this.subDepartmentChoosen="";
  }

  enableDepartment() {
    if (this.branchChoosen != ""){
      if (this.branchChoosen != 'blank') {
        this._departmentService.selectAllFromBranch(this.branchChoosen)
          .subscribe( (res) => {
              console.log(res['data']);
              this.departments=res['data'];
              this.departmentEnabled = true;
              this.errorMessage="";
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
    this.departmentChoosen="";
    this.subDepartmentChoosen="";
  }

  enableSubDepartment() {
    if (this.departmentChoosen != "") {
      if (this.departmentChoosen != "blank") {
        this._subDepartmentService.selectAllFromDepartment(this.departmentChoosen)
          .subscribe( (res) => {
              console.log(res['data']);
              this.subDepartments=res['data'];
              this.subDepartmentEnabled = true;
              this.errorMessage="";
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
    this.subDepartmentChoosen="";
  }

  goBack(){
    this.title="";
    this.text=""
    this.displayEnd=false;
  }
  reloadForm()
  {
    this.getOrganisations();
    this.organisationChoosen="";
    this.branchChoosen="";
    this.departmentChoosen="";
    this.subDepartmentChoosen="";
    this.addInput="";
  }

  async addOrganization()
  {
    if(this.addInput=="")
    {
      this.errorMessage="Organization label invalid."
    }else{
      //adding organisation
      await this.newOrganization();
      this.reloadForm();
    }


  }



  async newOrganization() {


      //this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen)
      await this._organisationService.add(this.addInput)
        .subscribe( (res) => {
            this.title="Succes";
            this.text="The organization has been added";
            this.errorMessage = "";
            this.displayEnd = true;

          },
          error => {
            this.title="ERROR";
            this.text=error.error.message;
            this.errorMessage = "";
            this.displayEnd = true;
          });


  }

}
