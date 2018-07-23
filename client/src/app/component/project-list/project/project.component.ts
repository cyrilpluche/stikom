import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../objects/project/project.service";
import {OrganisationService} from "../../../objects/organisation/organisation.service";
import {Project} from "../../../objects/project/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project_id:string;

  updating:boolean=false;

  project_title:string;
  project_code:string;
  project_work_code:string;
  project_start:Date;
  project_end:Date;
  sub_department_id:string;

  organisation_name:string="unknown";
  branch_name:string="unknown";
  department_name:string="unknown";
  sub_department_name:string="unknown";

  new_project_title:string;
  new_project_code:string;
  new_project_work_code:string;
  new_project_start:Date;
  new_project_end:Date;


  errorMessage: string = "";
  displayEnd: boolean = false;
  title:string;
  text:string;



  constructor(private _projectService: ProjectService,
              private _organisationService: OrganisationService) { }

  ngOnInit() {

    this.project_id=localStorage.getItem("Project_id");
    //localStorage.removeItem("Sop_id");

    this.getProject(this.project_id);
    setTimeout(() => {
      console.log(this.project_id);


    }, 400);

  }

  async getProject(idProject: string){

    await this._projectService.getProject(idProject)
      .subscribe( (res) => {
          console.log(res['data']);
          //this.res=res['data'];

          this.project_title=res['data']['project_title'];
          this.project_code=res['data']['project_code'];
          this.project_work_code=res['data']['project_work_code'];
          this.project_start=res['data']['project_start'];
          this.project_end=res['data']['project_end'];
          this.sub_department_id=res['data']['sub_department_id'];

          this.getOrganisation(res['data']['sub_department_id']);




        },
        error => {
          console.log("ERREUR : ",error);

        });
  }


  async getOrganisation(idSubDepartment: string){
    await this._organisationService.selectSchema(idSubDepartment)
      .subscribe( (res) => {
          console.log(res['data']);
          this.sub_department_name=res['data'][0]['sub_department_name'];
          this.department_name=res['data'][0]['department_name'];
          this.branch_name=res['data'][0]['branch_name'];
          this.organisation_name=res['data'][0]['organisation_name'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  updateProject()
  {
    this.updating=!this.updating;
    this.new_project_title=this.project_title;
    this.new_project_code=this.project_code;
    this.new_project_work_code=this.project_work_code;
    this.new_project_start=this.project_start;
    this.new_project_end=this.project_end;
  }

  async sentProjectUpdate()
  {

    let project:Project = new Project;

    console.log(this.new_project_title);
    project.project_title=this.new_project_title;
    project.project_code=this.new_project_code;
    project.project_work_code=this.new_project_work_code;
    project.project_id=this.project_id;
    project.sub_department_id=this.sub_department_id;
    project.project_start = new Date (this.new_project_start);
    project.project_end = new Date (this.new_project_end);

    try {
      let project_id = await this._projectService.updateProject(project).toPromise();
      this.title="Succes";
      this.text="The project has been updated";
      this.displayEnd = true;

    }
    catch (error) {
      console.log(error.message);
      this.title="ERROR";
      this.text=error.message;
      this.displayEnd = true;
    }

  }


  goBack(){
    this.title="";
    this.text="";
    this.getProject(this.project_id);
    this.updateProject();
    this.displayEnd=false;
  }



}


