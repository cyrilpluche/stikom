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
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  stepSelected: number;
  sops: Sop[];
  jobs: Job[];
  units: Unit[];
  members: Member[];

  member_unit_project: Array<Object>;
  activities_from_unit: Activity[];

  sop_id_selected: string;
  unit_selected: Unit;
  member_selected: Member;
  members_binded: Member[][];
  jobs_selected: Job[] = [];
  new_project_title: string = "";
  new_project_start: any;
  new_project_end: any;
  new_project_id: string = "";

  constructor(private _sopService: SopService,
              private _jobService: JobService,
              private _unitService: UnitService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.new_project_start = new Date();
    this.new_project_end = new Date();
    this.new_project_end.setDate(this.new_project_end.getDate()+30);
    this.stepSelected = 0 ;
    this.loadSops();
    this.loadMembers();
  }

  onSubmit() {

    //We insert the project into the database (project_code & project_work_code to modify!)
    let project_code = "XXXXX";
    let project_work_code = "000000";
    let sub_department_id = "";

    //We find the id of the sub_department by checking the member
    this._memberService.select(localStorage.getItem('Id'))
      .subscribe( (res) => {
        this.errorMessage = "";
        sub_department_id = res['data']['sub_department_id'];

          //We insert the project
          this._projectService.createProject(this.new_project_title, project_code, project_work_code, this.new_project_start, this.new_project_end, sub_department_id)
            .subscribe( (res) => {
                this.errorMessage = "";
                this.new_project_id = res['data']['project_id'];

                //We have the project id, now we can insert into project_has_job
                for (let j of this.jobs_selected){
                  this._projectService.bindProjectJob(this.new_project_id, j.job_id)
                    .subscribe( (res) => {
                        this.errorMessage = "";
                      },
                      error => {
                        this.errorMessage = error;
                      });
                }

                //We have the project id, now we can insert in member_unit_project and member_activity_project
                this.bindMemberUnitProject();
                this.router.navigate(['/project-list']);
              },
              error => {
                this.errorMessage = error;
              });

      },
      error => {
        this.errorMessage = error;
      });
  }

  bindMemberUnitProject(){
      this.member_unit_project = [];
      for (let u of this.units){
        let i = this.units.indexOf(u);
        if(this.members_binded[i].length > 0){
          for (let m of this.members_binded[i]){
            this._projectService.bindMemberUnitProject(this.new_project_id, u.unit_id, m.member_id.toString())
              .subscribe( (res) => {
                  this.errorMessage = "";
                  this.member_unit_project.push(res['data']);
                  this.bindMemberActivityProject(res['data']['member_id'], res['data']['unit_id']);
                },
                error => {
                  this.errorMessage = error.error.message;
                });
          }
        }
      }
  }

  //We insert into the database : member_activity_project
  bindMemberActivityProject(member_id, unit_id){

    //First we load all activities of the unit of the member choosen
    this._activityService.selectAllFromUnit(unit_id).subscribe((res) => {
        this.errorMessage = "";
        this.activities_from_unit = res['data'] as Activity[];

        //For each activities we insert into the database member_activity_project
        for (let a of this.activities_from_unit){
          let target_date = new Date();
          this._projectService.bindMemberActivityProject(this.new_project_id, member_id, a.activity_id, target_date, this.new_project_start, "", null, "", "", 0, 0, 0)
            .subscribe( (res) => {
                this.errorMessage = "";
              },
              error => {
                this.errorMessage = error;
              });
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  loadSops(){
    this.sops = [];
    this._sopService.selectAll()
      .subscribe( (res) => {
          this.errorMessage = "";
          this.sops=res['data'] as Sop[];
        },
        error => {
          this.errorMessage = error;
        });
  }

  loadJobsFromSop() {
    this.jobs = [];
    this._jobService.selectAllFromSop(this.sop_id_selected).subscribe((res) => {
        this.errorMessage = "";
        this.jobs = res['data'] as Job[];
        for (let i of this.jobs){
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  loadUnitsFromSop() {
    this.members_binded = [];
    this._unitService.selectAllFromSop(this.sop_id_selected).subscribe((res) => {
        this.errorMessage = "";
        this.units = res['data'] as Unit[];
        for (let i of this.units){
          this.members_binded.push([]);
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  loadMembers(){
    this._memberService.selectAll().subscribe((res) => {
        this.errorMessage = "";
        this.members = res['data'] as Member[];
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }


  pickJob(job) {
    let j = document.getElementById(job.job_id);
    if (j['checked']) {
      this.jobs_selected.push(job);
    }else{
      if(this.jobs_selected.includes(job)){
        let indice = this.jobs_selected.indexOf(job);
        this.jobs_selected.splice(indice, 1);
      }
    }
  }

  pickUnit(unit) {
    this.unit_selected = unit;
  }

  //add a member to the right index of the member_binded array
  pickMember(member) {
    if (!this.members_binded[this.units.indexOf(this.unit_selected)].includes(member)){
      this.members_binded[this.units.indexOf(this.unit_selected)].push(member);
    }
  }

  removeMember(member){
    let indice = this.members_binded[this.units.indexOf(this.unit_selected)].indexOf(member);
    this.members_binded[this.units.indexOf(this.unit_selected)].splice(indice, 1);
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

}
