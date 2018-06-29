import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SopService} from "../../../objects/sop/sop.service";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service"; [ ActivityService]

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
  subActivityArray: Activity[][] = [[]];

  activitySelected: Activity;
  isCheckboxChecked: boolean = false;
  activity_index: number;

  newActivityTitle: string = "";
  newActivityDescription: string = "";
  newActivityTypeDuration: string = "";
  newActivityDuration: number;
  newActivityType: string = "";
  newActivityTypeOutput: string = "";

  newSubActivityTitle: string = "";
  newSubActivityDescription: string = "";
  newSubActivityTypeDuration: string = "";
  newSubActivityDuration: number;
  newSubActivityType: string = "";
  newSubActivityTypeOutput: string = "";

  errorMessage: string = "";

  sopId: string = "";

  constructor(private router: Router,
              private _sopService: SopService,
              private _activityService: ActivityService) { }

  ngOnInit() {
    this.sopId = this._sopService.getSopIdLocal();
    this.step1 = true;
    this.step2 = false;
    this.loadActivity();
  }

  onSubmit() {

  }

  loadActivity() {
    this._activityService.selectAllFromSop(this.sopId).subscribe((res) => {
        this.errorMessage = "";
        console.log(res['data']);
        for (let element of res['data']) {
          let activity = element as Activity;
          if (activity.activity_id_is_father == null || activity.activity_id_is_father == ""){
            this.activityArray.push(activity);
          }
        }
        for (let element of res['data']) {
          let activity = element as Activity;
          if (activity.activity_id_is_father != null || activity.activity_id_is_father != ""){
            let i = 0;
            console.log(activity, " + ", this.activityArray[i])
            while (i<this.activityArray.length && this.activityArray[i].activity_id != element.activity_id_is_father ) {
              console.log(i)
              i++;
            }
            if(i<this.activityArray.length){
              this.subActivityArray[i].push(activity);
            }
          }
        }

      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  changeStep(step1) {
    this.step1 = step1;
    this.step2 = !step1;
  }

  //Give the activity checked to the activitySelected attribut
  checkActivity(activity) {
    this.activitySelected = activity;
    this.activity_index = this.activityArray.indexOf(activity);
  }

  checkboxActive(activity) {
    if (this.activitySelected != null){
      return this.activitySelected.activity_id==activity.activity_id
    }
    else {
      return false;
    }

  }

  isCheckboxActive(){
    let elements = document.querySelectorAll(".form-check-input");
    let isChecked: boolean = false;

    for (let i = 0; i<elements.length; i++){
      if (elements[i]['checked']) {
        isChecked = true;
      }
    }
    this.isCheckboxChecked = isChecked;
  }

  addNewActivity() {
    let newActivity: Activity;

    //We check if all fields are filled
    let verificationTrue = this.fieldsVerification();

    if (verificationTrue) {
      //We create the activity that may will be added
      newActivity = new Activity();
      newActivity.sop_id = this.sopId;
      newActivity.activity_title = this.newActivityTitle;
      newActivity.activity_description = this.newActivityDescription;
      newActivity.activity_type_duration = this.newActivityTypeDuration;
      newActivity.activity_duration = this.newActivityDuration;
      newActivity.activity_type_output = this.newActivityTypeOutput;
      newActivity.activity_id_is_father = null;
      newActivity.activity_shape = 'shape of you';
      newActivity.activity_type = null;

      //We check for all activity added, if the new one already exist
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

        //Database insert
        this._activityService.createActivity(newActivity.activity_title, newActivity.activity_description, newActivity.activity_type_duration, newActivity.activity_duration, newActivity.activity_type,
          newActivity.activity_type_output, newActivity.activity_shape, newActivity.activity_id_is_father, newActivity.sop_id).subscribe((res) => {
            this.errorMessage = "";

            //We get the id of the new activity
            newActivity.activity_id = res['data'];
            newActivity.activity_id = newActivity.activity_id['activity_id'];
            console.log("activity_id : "+newActivity.activity_id);
            //View insert
            this.activityArray.push(newActivity);
          },
          error => {
            this.errorMessage = error.error.message;
          });
      }
    }
  }

  addNewSubActivity() {
    let newSubActivity: Activity;
    //We check if all fields are filled
    let verificationTrue = this.subFieldsVerification();

    if (verificationTrue) {
      //We create the activity that may will be added
      newSubActivity = new Activity();
      newSubActivity.activity_id_is_father = this.activitySelected.activity_id;
      newSubActivity.sop_id = this.sopId;
      newSubActivity.activity_title = this.newSubActivityTitle;
      newSubActivity.activity_description = this.newSubActivityDescription;
      newSubActivity.activity_type_duration = this.newSubActivityTypeDuration;
      newSubActivity.activity_duration = this.newSubActivityDuration;
      newSubActivity.activity_type_output = this.newSubActivityTypeOutput;
      newSubActivity.activity_shape = 'body';
      newSubActivity.activity_type = null;

      //We check for all activity added, if the new one already exist
      let activityExist: boolean = false;
      console.log("The Index is : ", this.activity_index);
      console.log("The sub array index give : ", this.subActivityArray[this.activity_index]);
      for (let a of this.subActivityArray[this.activity_index]) {
        activityExist = (a.activity_title == newSubActivity.activity_title &&
          a.activity_description == newSubActivity.activity_description &&
          a.activity_type_duration == newSubActivity.activity_type_duration &&
          a.activity_duration == newSubActivity.activity_duration &&
          a.activity_type_output == newSubActivity.activity_type_output);
      }

      if (activityExist) {
        this.errorMessage = "This activity already exists.";
      }
      else {
        this.errorMessage = "";

        //Database insert
        this._activityService.createActivity(newSubActivity.activity_title, newSubActivity.activity_description, newSubActivity.activity_type_duration, newSubActivity.activity_duration, newSubActivity.activity_type,
          newSubActivity.activity_type_output, newSubActivity.activity_shape, newSubActivity.activity_id_is_father, newSubActivity.sop_id).subscribe((res) => {
            this.errorMessage = "";

            //We get the id of the new activity
            newSubActivity.activity_id = res['data'];
            newSubActivity.activity_id = newSubActivity.activity_id['activity_id'];
            console.log("activity_id : "+newSubActivity.activity_id);
            //View insert
            this.subActivityArray[this.activity_index].push(newSubActivity);
          },
          error => {
            this.errorMessage = error.error.message;
          });


      }
    }
  }

  fieldsVerification() {
    this.errorMessage = "";
    if (this.newActivityTitle == "") {
      console.log("Title");
      this.errorMessage = "Title is required.";
    }
    else if (this.newActivityDescription == "") {
      console.log("Description");
      this.errorMessage = "Description is required.";
    }
    else if (this.newActivityTypeDuration == "") {
      console.log("Type duration");
      this.errorMessage = "Type duration is required.";
    }
    else if (this.newActivityDuration == 0) {
      console.log("Duration");
      this.errorMessage = "Duration time is required.";
    }
    else if (this.newActivityTypeOutput == "") {
      console.log("Output");
      this.errorMessage = "Output type is required.";
    }
    return this.errorMessage == "";
  }

  subFieldsVerification() {
    this.errorMessage = "";
    if (this.newSubActivityTitle == "") {
      console.log("Title");
      this.errorMessage = "Title is required.";
    }
    else if (this.newSubActivityDescription == "") {
      console.log("Description");
      this.errorMessage = "Description is required.";
    }
    else if (this.newSubActivityTypeDuration == "") {
      console.log("Type duration");
      this.errorMessage = "Type duration is required.";
    }
    else if (this.newSubActivityDuration == 0) {
      console.log("Duration");
      this.errorMessage = "Duration time is required.";
    }
    else if (this.newSubActivityTypeOutput == "") {
      console.log("Output");
      this.errorMessage = "Output type is required.";
    }
    return this.errorMessage == "";
  }


}
