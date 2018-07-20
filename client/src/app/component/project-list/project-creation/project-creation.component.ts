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

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  formReady = false;

  // {unit:Unit, detail: {activities [Activities], grouped:boolean, job: Job} }
  elements: Object[];
  sops: Sop[];
  new_project: Project;
  new_project_start: any;
  new_project_end: any;

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

  new_project_id: string = "";

  constructor(private _sopService: SopService,
              private _jobService: JobService,
              private _unitService: UnitService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _projectService: ProjectService,
              private router: Router) {
  }

  async ngOnInit() {
    this.stepSelected = 0 ;
    this.initializeProject();

    await this.loadSops();
    await this.loadMembers();
  }

  //We create the new project with the right date end
  initializeProject(){
    this.new_project = new Project();
    let start = new Date();
    this.new_project_start = moment(start).format('YYYY-MM-DD');
    let end = new Date();
    end.setMonth(end.getMonth()+1);
    this.new_project_end = moment(end).format('YYYY-MM-DD');
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
    for (let a of activities){
      if (a.activity_type == 'grouped'){
        //we add it to the array
        activity = await this._unitService.selectAllFromActivity(a.activity_id).toPromise();
      }
    }
    return activity
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

     // Temporary
    try {
      let member = await this._memberService.select(localStorage.getItem('Id')).toPromise();
      this.errorMessage = "";
      this.new_project.sub_department_id = member['data']['sub_department_id'];
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
      console.log("Let's go for these elements : ", this.elements);
      for (let element of this.elements) {
        let activities = await this._activityService.selectAllFromUnit(element['unit'].unit_id).toPromise();
        element['detail']['activities'] = activities['data'] as Activity[];
        console.log("Let's go for these activities : ", element['detail']['activities']);
        for (let activity of element['detail']['activities']){
          console.log("Let's go for these members : ", element['detail']['members']);
          for (let member of element['detail']['members']){
            console.log('Job : ', element['detail']['job'].job_id);
            let m_a_p = new MemberActivityProject();
            m_a_p.project_id = parseInt(this.new_project.project_id);
            m_a_p.job_id = element['detail']['job'].job_id;
            m_a_p.member_id = member.member_id;
            m_a_p.activity_id = activity.activity_id;
            m_a_p.target_date = new Date().toString();
            m_a_p.date_begin = this.new_project.project_start.toString();
            m_a_p.evaluation = "on date";
            m_a_p.finished_date = null;
            m_a_p.sign = '';
            m_a_p.note = '';
            m_a_p.target_quantity = 0;
            m_a_p.finished_quantity = 0;
            m_a_p.finished_duration = 0;
            await this._projectService.bindMemberActivityProject(m_a_p).toPromise();
            console.log(m_a_p.project_id, ' - ', m_a_p.member_id, ' - ', m_a_p.activity_id);
          }
        }
      }
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }

  isFormReady(){
    let answer = true;
    for (let element of this.elements){
      if (element['detail']['members'].length == 0){
        answer = false;
      }
    }
    this.formReady = answer;
  }
}
