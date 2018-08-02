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

      await this._organisationService.add(this.addInput)
        .subscribe( (res) => {
            this.newBranch(res['data']['organisation_id'],"No branch");
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

  addBranch()
  {
    if(this.addInput=="")
    {
      this.errorMessage="Branch label invalid."
    }else if(this.organisationChoosen==""){
      this.errorMessage="Choose a organisation to add a new branch";
    }else{
      //adding organisation
      this.newBranch(this.organisationChoosen,this.addInput);
      this.reloadForm();

    }

  }


  async newBranch(organizationId:string,input:string) {

    await this._branchService.add(input,organizationId)
      .subscribe( (res) => {
          this.newDepartment(res['data']['branch_id'],"No department");
          this.title="Succes";
          this.text="The branch has been added";
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

  async addDepartment()
  {
    if(this.addInput=="")
    {
      this.errorMessage="Department label invalid."
    }else if(this.branchChoosen==""){
      this.errorMessage="Choose a branch to add a new department";
    }else{
      //adding organisation
      await this.newDepartment(this.branchChoosen,this.addInput);
      this.reloadForm();
    }


  }



  async newDepartment(branchId: string,input:string) {

    await this._departmentService.add(input,branchId)
      .subscribe( (res) => {
          this.newSubDepartment(res['data']['department_id'],"No sub department");
          this.title="Succes";
          this.text="The department has been added";
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


  async addSubDepartment()
  {
    if(this.addInput=="")
    {
      this.errorMessage="Sub department label invalid."
    }else if(this.departmentChoosen==""){
      this.errorMessage="Choose a department to add a new sub department";
    }else{
      //adding organisation
      await this.newSubDepartment(this.departmentChoosen,this.addInput);
      this.reloadForm();
    }


  }



  async newSubDepartment(departmentId:string,input:string) {

    await this._subDepartmentService.add(input,departmentId)
      .subscribe( (res) => {
          this.title="Succes";
          this.text="The sub department has been added";
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


  async deleteOrganization() {

    await this._organisationService.delete(this.organisationChoosen)
      .subscribe( (res) => {
          this.title="Succes";
          this.text="The organization has been deleted";
          this.errorMessage = "";
          this.displayEnd = true;
          this.reloadForm();

        },
        error => {
          this.title="ERROR";
          this.text=error.error.message;
          this.errorMessage = "";
          this.displayEnd = true;
        });


  }

  async deleteBranch() {

    await this._branchService.delete(this.branchChoosen)
      .subscribe( (res) => {
          this.title="Succes";
          this.text="The branch has been deleted";
          this.errorMessage = "";
          this.displayEnd = true;
          this.reloadForm();

        },
        error => {
          this.title="ERROR";
          this.text=error.error.message;
          this.errorMessage = "";
          this.displayEnd = true;
        });


  }

  async deleteDepartment() {

    await this._departmentService.delete(this.departmentChoosen)
      .subscribe( (res) => {
          this.title="Succes";
          this.text="The department has been deleted";
          this.errorMessage = "";
          this.displayEnd = true;
          this.reloadForm();

        },
        error => {
          this.title="ERROR";
          this.text=error.error.message;
          this.errorMessage = "";
          this.displayEnd = true;
        });


  }

  async deleteSubDepartment() {

    await this._subDepartmentService.delete(this.subDepartmentChoosen)
      .subscribe( (res) => {
          this.title="Succes";
          this.text="The sub department has been deleted";
          this.errorMessage = "";
          this.displayEnd = true;
          this.reloadForm();

        },
        error => {
          this.title="ERROR";
          this.text=error.error.message;
          this.errorMessage = "";
          this.displayEnd = true;
        });


  }

}
