import { Component, OnInit } from '@angular/core';
import {Job} from "../../objects/job/job";
import {JobService} from "../../objects/job/job.service";
import {SopService} from "../../objects/sop/sop.service";
import {Activity} from "../../objects/activity/activity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  /* ----- Data ----- */
  sop_id: string;
  errorMessage: string = "";
  jobs: Job[];
  newJobTitle: string = "";

  constructor(private _jobService: JobService,
              private _sopService: SopService,
              private router: Router) { }

  ngOnInit() {
    this.sop_id = this._sopService.getSopIdLocal();
    this._jobService.removeJobIdLocal();
    this.loadJobs();
  }

  loadJobs() {
    this.jobs = [];
    this._jobService.selectAllFromSop(this.sop_id).subscribe((res) => {
        this.errorMessage = "";
        for (let element of res['data']) {
          let job = element as Job;
          this.jobs.push(job);
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  addJob() {
    this._jobService.createJob(this.newJobTitle, this.newJobTitle, this.sop_id).subscribe((res) => {
        this.errorMessage = "";
        this.loadJobs();
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  bindActivities(job_id){
    //We store this id in the local storage to re-use it for the activities binding
    localStorage.setItem('Job_id', job_id);
    this.router.navigate(['/','job-creation']);
  }

}
