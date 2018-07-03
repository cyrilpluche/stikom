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

  sop_id_selected: string;
  unit_selected: Unit;
  activity_selected: Activity;
  member_selected: Member;
  members_binded: Member[][];
  unit_binded: Unit[][];
  activities_binded: Activity[];
  jobs_selected: Job[] = [];
  new_project_title: string = "";

  constructor(private _sopService: SopService,
              private _jobService: JobService,
              private _unitService: UnitService,
              private _memberService: MemberService,
              private _activityService: ActivityService) { }

  ngOnInit() {
    this.stepSelected = 0 ;
    this.activities_binded = [];
    console.log(this.stepSelected)
    this.loadSops();
    this.loadMembers();
  }

  onSubmit() {

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
          this.activities_binded = [];
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

  loadActivityFromJob() {
    this.unit_binded = [];
    for(let j of this.jobs_selected){
      this._activityService.selectAllFromJob(j.job_id).subscribe((res) => {
          this.errorMessage = "";

          //We add all activities of a job selected to an array
          for (let a of res['data']){
            let a_cast = a as Activity;
            this.activities_binded.push(a_cast);
          }

          for (let a of this.activities_binded){
            this.unit_binded.push([]);
          }
        },
        error => {
          this.errorMessage = error.error.message;
        });
    }
  }

  pickJob(job) {
    let j = document.getElementById(job.job_id);
    if (j['checked']) {
      this.jobs_selected.push(job);
    }else{
      if(this.jobs_selected.includes(job)){
        let indice = this.jobs_selected.indexOf(job);
        this.activities_binded.pop();
        this.jobs_selected.splice(indice, 1);
      }
    }
    console.log(this.jobs_selected);
  }

  pickUnit(unit) {
    this.unit_selected = unit;
    console.log(this.unit_selected);
  }

  pickActivity(activity) {
    console.log("Activity : "+ activity)
    this.activity_selected = activity;
  }

  //add a member to the right index of the member_binded array
  pickMember(member) {
    console.log(this.members_binded);
    if (!this.members_binded[this.units.indexOf(this.unit_selected)].includes(member)){
      this.members_binded[this.units.indexOf(this.unit_selected)].push(member);
    }
  }

  bindUnitActivity(unit) {
    console.log("Let's add !")
    if (!this.unit_binded[this.activities_binded.indexOf(this.activity_selected)].includes(unit)){
      console.log("Add okey !")
      this.unit_binded[this.activities_binded.indexOf(this.activity_selected)].push(unit);
      console.log(this.unit_binded);
    }
  }

  removeMember(member){
    let indice = this.members_binded[this.units.indexOf(this.unit_selected)].indexOf(member);
    this.members_binded[this.units.indexOf(this.unit_selected)].splice(indice, 1);
  }

  removeUnit(unit){
    let indice = this.unit_binded[this.activities_binded.indexOf(this.activity_selected)].indexOf(unit);
    this.unit_binded[this.activities_binded.indexOf(this.activity_selected)].splice(indice, 1);
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
