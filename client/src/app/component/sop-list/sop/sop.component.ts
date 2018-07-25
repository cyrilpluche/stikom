import { Component, OnInit } from '@angular/core';
import {SopService} from "../../../objects/sop/sop.service";
import {DatePipe} from "@angular/common";
import {UnitService} from "../../../objects/unit/unit.service";
import {Sop} from "../../../objects/sop/sop";
import {Unit} from "../../../objects/unit/unit";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service";

@Component({
  selector: 'app-sop',
  templateUrl: './sop.component.html',
  styleUrls: ['./sop.component.css']
})
export class SopComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string;
  ready: boolean = false;
  sop_id: string="";
  project_id: string="";
  sop: Sop;

  units: Unit[] = [];
  activities = new Map;

  constructor( private _sopService: SopService,
               private _unitService: UnitService,
               private _activityService: ActivityService) { }

  async ngOnInit() {

    this.sop_id = this._sopService.getSopIdLocal();
    await this.loadSop();
    await this.loadUnit();
    await this.loadActivities();
    console.log(this.activities);
    this.ready = true;

  }

  async loadSop () {
    try{
      let s = await this._sopService.getSop(this.sop_id).toPromise();
      this.sop = s['data'];
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }
  async loadUnit () {
    try {
      let u = await this._unitService.selectAllFromSop(this.sop_id).toPromise();
      this.units = u['data'];
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }
  async loadActivities() {
    let activities = [];
    try{
      let a = await this._activityService.selectAllFromSop(this.sop_id).toPromise();
      activities = a['data'] as Activity[];
    }
    catch (error) {
      this.errorMessage = error.message;
    }

    for (let activity of activities) {
      if ((activity.activity_id_is_father == null || activity.activity_id_is_father == "") && activity.activity_type != 'sop'){
        let e = {
          activity: activity,
          sub_activities: []
        };
        this.activities.set(activity.activity_id, e)
      }
    }

    for (let activity of activities) {
      if ((activity.activity_id_is_father != null && activity.activity_id_is_father != "") && activity.activity_type != 'super_activity'){
        this.activities.get(activity.activity_id_is_father)['sub_activities'].push(activity);
      }
    }
  }

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

}
