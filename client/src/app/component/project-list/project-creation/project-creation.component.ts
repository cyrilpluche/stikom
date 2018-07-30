import { Component, OnInit } from '@angular/core';
import { Sop } from "../../../objects/sop/sop";
import {SopService} from "../../../objects/sop/sop.service";
import {Job} from "../../../objects/job/job";
import {JobService} from "../../../objects/job/job.service";
import {Unit} from "../../../objects/unit/unit";
import {UnitService} from "../../../objects/unit/unit.service";
import {Member} from "../../../objects/member/member";
import {MemberService} from "../../../objects/member/member.service";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service";
import {ProjectService} from "../../../objects/project/project.service";
import {Project} from "../../../objects/project/project";
import {Router} from "@angular/router";
import * as moment from 'moment';
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {Organisation} from "../../../objects/organisation/organisation";
import {Branch} from "../../../objects/branch/branch";
import {Department} from "../../../objects/department/department";
import {SubDepartment} from "../../../objects/sub_department/sub-department";
import {ManagmentLevelService} from "../../../objects/managment_level/managment-level.service";
import {OrganisationService} from "../../../objects/organisation/organisation.service";
import {SubDepartmentService} from "../../../objects/sub_department/sub-department.service";
import {BranchService} from "../../../objects/branch/branch.service";
import {DepartmentService} from "../../../objects/department/department.service";
import {TextHelperComponent} from "../../../helpers/text-helper/text-helper.component";

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  ready: boolean = false;
  unitsReady = false;
  formReady = false;

  // {unit:Unit, detail: {activities [Activities], grouped:boolean, job: Job} }
  elements: Object[];
  sops: Sop[];
  new_project: Project;
  new_project_start: any;
  new_project_end: any;
  minimum_project_end: any;
  minimum_project_start: any;

  sop_selected: Sop;
  jobs_selected = new Map();
  unit_selected: Unit;

  stepSelected: number;
  jobs: Job[];
  members: Member[];

  member_unit_project: Array<Object>;
  activities_from_unit: Activity[];

  sop_id_selected: string;
  member_selected: Member;
  new_project_title: string = "";


  //Manage the disabled function of organisations selects
  organisation_elements: Object[] = [];

  organisation: Object = this.organisation_elements[0];
  branch: Object;
  department: Object;
  sub_department: SubDepartment;

  textHelper: TextHelperComponent = new TextHelperComponent();

  constructor(private _sopService: SopService,
              private _jobService: JobService,
              private _unitService: UnitService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _projectService: ProjectService,
              private router: Router,
              private _organisationService: OrganisationService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService) {
  }

  async ngOnInit() {
    this.stepSelected = 0 ;
    this.new_project = new Project();
    await this.loadSops();
    await this.loadOrganisations();
    await this.loadMembers();
    this.ready = true;

  }

  //We set the right dates to the new project
  async initializeProject(){
    let start = new Date();
    this.minimum_project_start = moment(start).format('YYYY-MM-DD');
    start = new Date();
    this.new_project_start = moment(start).format('YYYY-MM-DD');

    let jobs = Array.from(this.jobs_selected.values());
    let jobs_selected = [];
    for (let j of jobs){
      jobs_selected.push(j['job']);
    }
    let p = await this._jobService.computeDateEnd(jobs_selected, this.new_project_start).toPromise();
    let p2 = new Date(p['data']['end_date']);

    //We get the minimum date
    this.new_project_end = moment(p2).format('YYYY-MM-DD');
    this.checkEndDate();
  }

  //We get all SOP from database
  async loadSops(){
    try {
      let sops = await this._sopService.selectAll().toPromise();
      this.errorMessage = "";
      this.sops = sops['data'] as Sop[];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }
  }


  //We get every Members that can work on the project
  async loadMembers(){
    try {
      let members = await this._memberService.selectAll().toPromise();
      this.errorMessage = "";
      this.members = members['data'] as Member[];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }
  }

  selectSop(sop){
    this.sop_selected = sop;
  }

  //We load all jobs from the sop_selected
  async loadJobsFromSop() {
    try {
      let jobs = await this._jobService.selectAllFromSop(this.sop_selected.sop_id.toString()).toPromise();
      this.errorMessage = "";
      this.jobs = jobs['data'] as Job[];
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  //Manage checkbox of job selection and store if it's necessary
  pickJob(job, isG) {
    let j = document.getElementById(job.job_id);
    let g = document.getElementById('g_'+job.job_id);
    if (j['checked'] || ((!j['checked']) && g['checked'] && isG)) {
      j['checked'] = true;

      let e = {
        job: job,
        grouped: g['checked']
      };

      //We store the element
      this.jobs_selected.set(job.job_id, e);

    }
    else{
      this.jobs_selected.delete(job.job_id);
      g['checked'] = false;
    }
  }

  //Loads every unit of jobs selected and store them into elements array
  async loadUnitsFromJobs() {
    try {
      let vm = this;
      let e;
      this.elements = [];
      this.errorMessage = "";
      //We look all jobs selected
      await this.jobs_selected.forEach(async function(value, key){
        let units;
        //If we want a grouped job, then we take the single activity instance that correspond, and look at the unit concerned
        if(value['grouped']){
          let activity = await vm.groupJob(key);
          console.log(activity);
          units = await vm._unitService.selectAllFromActivity(activity.activity_id).toPromise();
          e = {
            activities: [activity],
            job: value['job'],
            grouped: true,
            members: []
          };
        }
        else{
          units = await vm._unitService.selectAllFromJob(key).toPromise();
          e = {
            job: value['job'],
            grouped: false,
            members: []
          };
        }
        //Then we take all units linked to the job and store them
        for (let u of units['data']){
          let ee = {
            unit: u,
            detail: JSON.parse(JSON.stringify(e))
          };
          vm.elements.push(ee);
        }
      });
    }
    catch (error) {
      this.errorMessage = error.message;
    }

  }

  async groupJob(job_id){
    //we load every activity of the job
    let activitiesData = await this._activityService.selectAllFromJob(job_id).toPromise();
    let activities = activitiesData['data'] as Activity[];
    let activity;
    //we search for the one that group all activities in one instance
    console.log(activities);
    for (let a of activities){
      if (a.activity_type == 'super_activity' || a.activity_type == 'sop'){
        //we add it to the array
        activity = a;
      }
    }
    return activity;
  }

  pickUnit(unit) {
    this.unit_selected = unit;
  }

  //add a member to the unit selected Unit>Detail>Members
  pickMember(member) {
    if(!this.unit_selected['detail']['members'].includes(member)) {
      this.unit_selected['detail']['members'].push(member);
    }
  }

  /*
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

      this.branchs = [this.organisation_elements[0]['branchs'][0]];
      this.departments = [this.branchs[0]['departments'][0]];
      this.sub_departments = [this.departments[0]['sub_departments'][0]];
      this.new_sub_department = this.departments[0]['sub_departments'][0];

    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  pickOrganisation(organisation){
    this.branchs = organisation['branchs'];
    this.departments = [this.branchs[0]['departments'][0]];
    this.sub_departments = [this.departments[0]['sub_departments'][0]];
    this.new_sub_department = this.departments[0]['sub_departments'][0];
    this.pick_level = 2;
  }

  pickBranch(branch){
    this.departments = branch['departments'];
    this.sub_departments = [this.departments[0]['sub_departments'][0]];
    this.new_sub_department = this.departments[0]['sub_departments'][0];
    if(branch['branch'].branch_name != 'No branch'){
      this.pick_level = 3;
    }
    else{
      this.pick_level = 2;
    }
  }

  pickDepartment(department){
    this.sub_departments = department['sub_departments'];
    this.new_sub_department = department['sub_departments'][0];
    if(department['department'].department_name != 'No department'){
      this.pick_level = 4;
    }
    else{
      this.pick_level = 3;
    }
  }

  pickSubDepartment(sub_department){
    this.new_sub_department = sub_department;
    this.pick_level = 5;
  }*/

  removeMember(member){
    let indice = this.unit_selected['detail']['members'].indexOf(member);
    this.unit_selected['detail']['members'].splice(indice, 1);
  }

  changeStep(next) {
    if (next) {
      this.stepSelected += 1;
    }
    else {
      this.stepSelected -= 1;
    }
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("member-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  async onSubmit() {

     //We insert the project into the database (project_code & project_work_code to modify!)
     let project_code = "XXXXX";
     let project_work_code = "000000";
     this.new_project.project_work_code = project_work_code;
     this.new_project.project_code = project_code;

     try {
       this.errorMessage = "";
       this.new_project.sub_department_id = this.sub_department.department_id.toString();
     }
     catch (error) {
       this.errorMessage = error.message;
     }

     //We set seconds, minutes, hours to default value with this process
     this.new_project.project_start = new Date (this.new_project_start);
     this.new_project.project_end = new Date (this.new_project_end);
     this.new_project.project_start = new Date(this.new_project.project_start.getFullYear(), this.new_project.project_start.getMonth(), this.new_project.project_start.getDate());
     this.new_project.project_end = new Date(this.new_project.project_end.getFullYear(), this.new_project.project_end.getMonth(), this.new_project.project_end.getDate());

     //We insert the project
     try {
       let project_id = await this._projectService.createProject(this.new_project).toPromise();
       this.errorMessage = "";
       this.new_project.project_id = project_id['data']['project_id'];
     }
     catch (error) {
       this.errorMessage = error.message;
     }

     //We have the project id, now we can insert into project_has_job
     try {
       this.errorMessage = "";
       let vm = this;
       await this.jobs_selected.forEach(async function(value, key){
         await vm._projectService.bindProjectJob(vm.new_project.project_id, key).toPromise();
       });
     }
     catch (error) {
       this.errorMessage = error.message;
     }

     //We have the project id, now we can insert in member_unit_project and member_activity_project
     await this.bindMemberUnitProject();

     await this.bindMemberActivityProject();

     if (this.errorMessage == ""){
       this.router.navigate(['/project-list']);
     }
   }

  async bindMemberUnitProject(){
    try {
      this.errorMessage = "";
      for (let u of this.elements) {
        for (let m of u['detail']['members']) {
          await this._projectService.bindMemberUnitProject(this.new_project.project_id, u['unit'].unit_id, m.member_id.toString(), u['detail']['job'].job_id).toPromise();
        }
      }
    }
    catch (error){
      this.errorMessage = error.message;
    }

  }

  //We insert into the database : member_activity_project
  async bindMemberActivityProject(){
    try {
      this.errorMessage = "";
      for (let element of this.elements) {
        if(element['detail']['grouped'] == false){
          let activities = await this._activityService.selectAllFromUnit(element['unit'].unit_id).toPromise();
          element['detail']['activities'] = [];
          for (let a of activities['data']){
            if(a.activity_type != 'sop' && a.activity_type != 'super_activity'){
              element['detail']['activities'].push(a);
            }
          }
        }
        for (let activity of element['detail']['activities']){
          for (let member of element['detail']['members']){
            let m_a_p = new MemberActivityProject();
            m_a_p.project_id = parseInt(this.new_project.project_id);
            m_a_p.job_id = element['detail']['job'].job_id;
            m_a_p.member_id = member.member_id;
            m_a_p.activity_id = activity.activity_id;
            m_a_p.target_date = this.new_project.project_end.toString();
            m_a_p.date_begin = this.new_project.project_start.toString();
            m_a_p.evaluation = "on date";
            m_a_p.finished_date = null;
            m_a_p.sign = '';
            m_a_p.note = '';
            m_a_p.target_quantity = 0;
            m_a_p.finished_quantity = 0;
            m_a_p.finished_duration = 0;
            await this._projectService.bindMemberActivityProject(m_a_p).toPromise();
          }
        }
      }
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }

  isUnitsReady(){
    let answer = true;
    for (let element of this.elements){
      if (element['detail']['members'].length == 0){
        answer = false;
      }
    }
    this.unitsReady = answer;
  }

  async checkEndDate(){
    let jobs = Array.from(this.jobs_selected.values());
    let jobs_selected = [];
    for (let j of jobs){
      jobs_selected.push(j['job']);
    }
    let p = await this._jobService.computeDateEnd(jobs_selected, this.new_project_start).toPromise();
    let p2 = new Date(p['data']['end_date']);

    //We get the minimum date
    this.minimum_project_end = moment(p2).format('YYYY-MM-DD');

    //We change the end date if needed
    let d1 = new Date(this.new_project_end);
    let d2 = new Date(this.minimum_project_end);
    if(d1<d2){
      let d = new Date(this.minimum_project_end)
      this.new_project_end = moment(d).format('YYYY-MM-DD');
    }
    console.log('mini : ', this.minimum_project_end);
  }

  search() {
    // Declare variables
    var input, filter, select, option, option1, option2, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    select = document.getElementById("select-member");
    option = select.getElementsByTagName("option");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < option.length; i++) {
      option1 = option[i];
      if (option1) {
        if (option1.innerHTML.toUpperCase().indexOf(filter) > -1) {
          option1.style.display = "";
        } else {
          option1.style.display = "none";
        }
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
      }

      this.organisation = this.organisation_elements[0];
      this.branch = this.organisation['branchs'][0];
      this.department = this.branch['departments'][0];
      this.sub_department = this.department['sub_departments'][0];

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
