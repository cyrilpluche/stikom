import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../objects/project/project.service";
import {OrganisationService} from "../../../objects/organisation/organisation.service";
import {Project} from "../../../objects/project/project";
import {Organisation} from "../../../objects/organisation/organisation";
import {Branch} from "../../../objects/branch/branch";
import {Department} from "../../../objects/department/department";
import {SubDepartment} from "../../../objects/sub_department/sub-department";
import {Router} from "@angular/router";
import {BranchService} from "../../../objects/branch/branch.service";
import {SubDepartmentService} from "../../../objects/sub_department/sub-department.service";
import {DepartmentService} from "../../../objects/department/department.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  project_id: string;
  project: Project;
  isEditable: boolean = false;
  ready: boolean = false;

  //Manage the disabled function of organisations selects
  pick_level: number = 1;
  organisation_elements: Object[] = [];

  organisation: Object;
  branch: Object;
  department: Object;
  sub_department: SubDepartment;

  constructor(private _projectService: ProjectService,
              private _organisationService: OrganisationService,
              private router: Router,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService) { }

  async ngOnInit() {
    this.project_id=localStorage.getItem("Project_id");
    await this.loadProject();
    await this.loadOrganisations();
    await this.loadOrganisationFromProject();
    this.ready = true;
    console.log(this.organisation_elements);
    console.log(this.organisation, this.branch, this.department, this.sub_department);
  }

  async loadProject(){
    try{
      let s = await this._projectService.getProject(this.project_id).toPromise();
      this.project = s['data'] as Project;
    }
    catch(error){
      this.errorMessage = error.message;
    }
  }

  async loadOrganisationFromProject(){
    try{
      let res = await this._organisationService.selectSchema(this.project.sub_department_id).toPromise();
      let elements = res['data'][0];
      this.organisation = this.findElement(elements['organisation_id'], 1);
      this.branch = this.findElement(elements['branch_id'], 2);
      this.department = this.findElement(elements['department_id'], 3);
      this.sub_department = this.findElement(elements['sub_department_id'], 4);
    }
    catch(error){
      this.errorMessage = error.message;
    }
  }

  makeEditable() {
    this.isEditable = !this.isEditable;
  }

  async onSubmit() {
    try{
      this.project.sub_department_id = this.sub_department.sub_department_id.toString();
      await this._projectService.updateProject(this.project).toPromise();
      this.router.navigate(['/project-list']);
    }
    catch (error){
      this.errorMessage = error.message;
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
      }
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  /* element is an id of organisation, branch or department. Level 1 = We search for organisation, level 2 = we search for departments.
   * Return : the element of organisation_elements wanted */
  findElement(element: number, level: number){
    console.log('element : ', element, ' - level : ', level);
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
    console.log(this.organisation, this.branch, this.department, this.sub_department);
  }

  pickBranch(){
    // I have picked my new organisation, I need to set my new array for other levels
    this.department = this.branch['departments'][0];
    this.sub_department = this.department['sub_departments'][0];
    console.log(this.organisation, this.branch, this.department, this.sub_department);
  }

  pickDepartment(){
    this.sub_department = this.department['sub_departments'][0];
    console.log(this.organisation, this.branch, this.department, this.sub_department);
    //
  }

  //  ----------------- ORGANISATIONS / BRANCHS / DEPARTMENTS / SUB_DEPARTMENTS ----------------- //

}


