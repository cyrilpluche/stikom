import { Component, OnInit } from '@angular/core';
import {Job} from "../../../objects/job/job";
import {JobService} from "../../../objects/job/job.service";
import {Activity} from "../../../objects/activity/activity";
import {SopService} from "../../../objects/sop/sop.service";
import {ActivityService} from "../../../objects/activity/activity.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.scss']
})
export class JobCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  job: Job = new Job();
  activities: Activity[];
  sub_activities: Activity[][];
  sop_id: string;
  isJobChecked: boolean;

  constructor(private _jobService: JobService,
              private _sopService: SopService,
              private _activityService: ActivityService,
              private router: Router) { }

  ngOnInit() {
    this.sop_id = this._sopService.getSopIdLocal();
    this.job.job_id = this._jobService.getJobIdLocal();
    this.loadActivity();
    this.selectJob(this.job.job_id);
    this.loadChekedActivities();
  }

  onSubmit() {
    let elements = document.querySelectorAll(".form-check-input");
    let sub_id: string;
    for (let i = 0; i<elements.length; i++){
      if (elements[i]['checked'] == true) {
        sub_id = elements[i].id;
        this._jobService.bind_job_activity(this.job.job_id, sub_id).subscribe((res) => {
            this.errorMessage = "";
            this.router.navigate(['/job-list']);
          },
          error => {
            this.errorMessage = error.error.message;
          });;
      }
    }
  }

  loadChekedActivities(){
    this._activityService.selectAllFromJob(this.job.job_id).subscribe((res) => {
        this.errorMessage = "";
        let picks = document.querySelectorAll(".form-check-input");
        let activities = res['data'];
        console.log(activities);
        for (let i = 0; i<picks.length; i++){
          for (let a of activities){
            if (a['activity_id'] == picks[i]['id']) {
              picks[i]['checked'] = true;
            }
          }
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  loadActivity() {
    this.activities = [];
    this.sub_activities = [[]];
    this._activityService.selectAllFromSop(this.sop_id).subscribe((res) => {
        this.errorMessage = "";
        for (let element of res['data']) {
          let activity = element as Activity;
          if (activity.activity_id_is_father == null || activity.activity_id_is_father == ""){
            this.activities.push(activity);
            this.sub_activities.push([]);
          }
        }
        console.log(this.activities);
        for (let element of res['data']) {
          let activity = element as Activity;
          if (activity.activity_id_is_father != null || activity.activity_id_is_father != ""){
            let i = 0;
            while (i<this.activities.length && this.activities[i].activity_id != element.activity_id_is_father ) {
              i++;
            }
            if(i<this.activities.length){
              this.sub_activities[i].push(activity);
            }
          }
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  selectJob (job_id) {
    this._jobService.select(job_id).subscribe((res) => {
        this.errorMessage = "";
        this.job = res['data'] as Job;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  pickActivity(activity){

    let sub_a = this.sub_activities[this.activities.indexOf(activity)];
    let a = document.getElementById(activity.activity_id);

    let old = document.getElementsByTagName('input');
    for (let i = 0; i < (old.length); i++){
      old[i]['checked'] = false;
    }

    a['checked'] = true;

    for (let s of sub_a){
      document.getElementById(s.activity_id)['checked'] = true;
    }

    /*
    if (a['checked']) {
      for (let s of sub_a){
        document.getElementById(s.activity_id)['checked'] = true;
      }
    }else{
      for (let s of sub_a){
        document.getElementById(s.activity_id)['checked'] = false;
      }
    }*/
  }

  isActivityPicked() {
    let elements = document.querySelectorAll(".form-check-input");
    let isChecked: boolean = false;
    for (let i = 0; i<elements.length; i++){
      console.log("Let's check");
      if (elements[i]['checked'] == true) {
        isChecked = true;
      }
    }
    this.isJobChecked = isChecked;
  }


}
