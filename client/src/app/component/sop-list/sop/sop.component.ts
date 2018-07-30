import { Component, OnInit } from '@angular/core';
import {SopService} from "../../../objects/sop/sop.service";
import {DatePipe} from "@angular/common";
import {UnitService} from "../../../objects/unit/unit.service";
import {Sop} from "../../../objects/sop/sop";
import {Unit} from "../../../objects/unit/unit";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service";
import {ManagmentLevel} from "../../../objects/managment_level/managment_level";
import {ManagmentLevelService} from "../../../objects/managment_level/managment-level.service";

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
  isEditable: boolean = false;
  isEditableUnits: boolean = false;
  isEditableActivities: boolean = false;

  units: Unit[] = [];
  management_levels: ManagmentLevel[] = [];
  activities = new Map;
  formNumber: number;

  /* ----- Modal Activity Update ----- */
  activity_selected: Activity;
  sub_activities_linked: Activity[];
  title_modal_activity: string = 'Update activity ';

  constructor( private _sopService: SopService,
               private _unitService: UnitService,
               private _activityService: ActivityService,
               private _managmentLevel: ManagmentLevelService) { }

  async ngOnInit() {

    this.sop_id = this._sopService.getSopIdLocal();
    await this.loadSop();
    await this.loadUnit();
    await this.loadActivities();
    await this.loadManagement();
    console.log(this.activities);
    this.ready = true;

  }

  async onSubmit(){
    this.ready = false;
    this.errorMessage = "";
    if (this.formNumber == 1){
      try{
        this.sop.sop_revision = new Date().toString();
        await this._sopService.updateSop(this.sop).toPromise();
        await this.loadSop();
      }
      catch (error){
        this.errorMessage = error.message;
      }
    }
    else if (this.formNumber == 2){
      try{
        for (let u of this.units){
          await this._unitService.updateUnit(u).toPromise();
          this.loadUnit();
        }
        await this.loadUnit();
      }
      catch (error){
        this.errorMessage = error.message;
      }
    }
    else if (this.formNumber == 3){

    }

    this.isEditable = false;
    this.isEditableUnits = false;
    this.isEditableActivities = false;
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
      this.units = u['data'] as Unit[];
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }
  async loadManagement () {
    try {
      let m = await this._managmentLevel.selectAll().toPromise();
      this.management_levels = m['data'] as ManagmentLevel[];
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

  pickActivity(activity: any, level: number) {
    if ( level == 1 ){
      this.activity_selected = activity['activity'];
      this.title_modal_activity = 'Update activity '+activity['activity'].activity_title;
      this.sub_activities_linked = activity['sub_activities'];
    }
    else{
      this.activity_selected = activity;
      this.title_modal_activity = 'Update activity '+activity.activity_title;
    }
  }

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

  makeEditable(table: number) {
    if (table == 1){
      this.isEditable = !this.isEditable;
    }
    else if (table == 2){
      this.isEditableUnits = !this.isEditableUnits;
    }
    else if (table == 3){
      this.isEditableActivities = !this.isEditableActivities;
    }
    this.formNumber = table;
  }
}
