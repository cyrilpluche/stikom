import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SopService} from "../../../objects/sop/sop.service";
import {DatePipe} from "@angular/common";
import {UnitService} from "../../../objects/unit/unit.service";
import {Sop} from "../../../objects/sop/sop";
import {Unit} from "../../../objects/unit/unit";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service";
import {ManagmentLevel} from "../../../objects/managment_level/managment_level";
import {ManagmentLevelService} from "../../../objects/managment_level/managment-level.service";
import {ExecuteService} from "../../../objects/execute/execute.service";

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

  isUnitsValide: boolean = true;
  isSopValid: boolean = true;

  units: Unit[] = [];
  management_levels: ManagmentLevel[] = [];
  activities = new Map;
  formNumber: number;

  /* ----- Modal Activity Update ----- */
  activity_selected: Activity;
  sub_activities_linked: Activity[];
  title_modal_activity: string = 'Update activity';
  @Output() refresh = new EventEmitter<boolean>();

  constructor( private _sopService: SopService,
               private _unitService: UnitService,
               private _activityService: ActivityService,
               private _managmentLevel: ManagmentLevelService,
               private _executeService: ExecuteService) { }

  async ngOnInit() {

    this.sop_id = this._sopService.getSopIdLocal();
    localStorage.removeItem("Project_id");
    await this.loadSop();
    await this.loadUnit();
    await this.loadActivities();
    await this.loadManagement();
    this.ready = true;

  }

  async onSubmit(event){
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
        }
        await this.loadUnit();
        await this.loadActivities();
        this.activity_selected = null;
      }
      catch (error){
        this.errorMessage = error.message;
      }
    }
    else if (this.formNumber == 3){
      if(event){
        try{
          await this._activityService.update(this.activity_selected).toPromise();
          await this._executeService.update(this.selectUnit().unit_id, this.activity_selected.activity_id).toPromise();
          if (this.sub_activities_linked != null){
            for (let s of this.sub_activities_linked){
              s.activity_type_duration = this.activity_selected.activity_type_duration;
              await this._activityService.update(s).toPromise();
              await this._executeService.update(this.selectUnit().unit_id, s.activity_id).toPromise();
            }
          }
          await this.loadActivities();
          this.activity_selected = null;
          this.isEditableActivities = false;
        }catch (error){
          this.errorMessage = error.message;
        }
      }
    }
    this.refresh.emit(true);
    this.isEditable = false;
    this.isEditableUnits = false;

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
      this.sub_activities_linked = null;
      this.title_modal_activity = 'Update activity '+activity.activity_title;
    }
  }

  selectUnit(){
    for (let u of this.units){
      if (u.unit_name == this.activity_selected['activity_unit'][0]){
        return u;
      }
    }
  }

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

  makeEditable(table: number) {
    this.errorMessage = "";
    if (table == 1){
      this.isEditable = !this.isEditable;
      this.isEditableUnits = false;
      this.isEditableActivities = false;
      this.checkSop();
    }
    else if (table == 2){
      this.isEditableUnits = !this.isEditableUnits;
      this.isEditableActivities = false;
      this.isEditable = false;

    }
    else if (table == 3){
      this.isEditableActivities = !this.isEditableActivities;
      this.isEditable = false;
      this.isEditableUnits = false;
    }
    this.formNumber = table;
  }

  //Unit verification label
  checkUnits(unit){
    this.errorMessage = "";
    let check = true;
    for (let u of this.units){
      if (u.unit_name.toUpperCase() == unit.unit_name.toUpperCase() && this.units.indexOf(u) != this.units.indexOf(unit)){
        check =false;
        this.errorMessage = "Two or more units have the same name.";
      }
      if(u.unit_name == ""){
        check = false;
        this.errorMessage = "Unit name is required.";
      }
    }
    this.isUnitsValide = check;
  }

  //Sop verification
  checkSop(){
    this.errorMessage = "";
    let check = true;
    if(this.sop.sop_title == ""){
      this.errorMessage = "SOP name is required.";
      check = false;
    }
    else if (this.sop.sop_objectives == ""){
      this.errorMessage = "SOP objective is required.";
      check = false;
    }
    this.isSopValid = check
  }
}
