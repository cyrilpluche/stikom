import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SopService} from "../../../objects/sop/sop.service";
import {Activity} from "../../../objects/activity/activity";

@Component({
  selector: 'app-activity-creation',
  templateUrl: './activity-creation.component.html',
  styleUrls: ['./activity-creation.component.scss']
})
export class ActivityCreationComponent implements OnInit {

  /* ----- Data ----- */
  step1: boolean;
  step2: boolean;

  activityArray: Activity[] = [];

  newActivityTitle: string = "";
  newActivityDescription: string = "";
  newActivityTypeDuration: string = "";
  newActivityDuration: number = 0;
  newActivityType: string = "";
  newActivityTypeOutput: string = "";

  errorMessage: string = "";

  @Input() sopId: string = "";

  constructor(private router: Router,
              private _sopService: SopService) { }

  ngOnInit() {
    this.sopId = this._sopService.getSopIdLocal();
    this.step1 = true;
    this.step2 = false;
  }

  onSubmit() {

  }

  changeStep(step1) {
    this.step1 = step1;
    this.step2 = !step1;
  }

  addNewActivity() {
    console.log(this.newActivityTitle);
    let newActivity: Activity;
    if (this.newActivityTitle == "") {
      this.errorMessage = "Title is required.";
    }
    else if (this.newActivityDescription == "") {
      this.errorMessage = "Description is required.";
    }
    else if (this.newActivityTypeDuration == "") {
      this.errorMessage = "Type duration is required.";
    }
    else if (this.newActivityDuration == 0) {
      this.errorMessage = "Duration time is required.";
    }
    else if (this.newActivityTypeOutput == "") {
      this.errorMessage = "Output type is required.";
    }
    else {
      newActivity = new Activity();
      newActivity.activity_title = this.newActivityTitle;
      newActivity.activity_description = this.newActivityDescription;
      newActivity.activity_type_duration = this.newActivityTypeDuration;
      newActivity.activity_duration = this.newActivityDuration;
      newActivity.activity_type_output = this.newActivityTypeOutput;
    }

    let activityExist: boolean = false;
    for (let a of this.activityArray) {
      activityExist = (a.activity_title == newActivity.activity_title &&
        a.activity_description == newActivity.activity_description &&
        a.activity_type_duration == newActivity.activity_type_duration &&
        a.activity_duration == newActivity.activity_duration &&
        a.activity_type_output == newActivity.activity_type_output);
    }

    if (activityExist) {
      this.errorMessage = "This activity already exists.";
    }
    else {
      this.errorMessage = "";
      this.activityArray.push(newActivity);
    }
  }

}
