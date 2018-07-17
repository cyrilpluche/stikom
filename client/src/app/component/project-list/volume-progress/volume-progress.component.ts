import { Component, OnInit } from '@angular/core';
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {Member} from "../../../objects/member/member";
import {Activity} from "../../../objects/activity/activity";
import {MemberService} from "../../../objects/member/member.service";
import {ActivityService} from "../../../objects/activity/activity.service";
import {Project} from "../../../objects/project/project";
import {ProjectService} from "../../../objects/project/project.service";
import * as moment from 'moment';
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-volume-progress',
  templateUrl: './volume-progress.component.html',
  styleUrls: ['./volume-progress.component.scss']
})
export class VolumeProgressComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  project: Project;
  m_a_p: MemberActivityProject[] = [];
  workers: Member[] = [];
  activities: Activity[] = [];
  elements: Object[] = [];
  sorted_workers = [];
  targets = new Map();

  ready:boolean = false;

  calendar:Object[];
  calendarType: string;
  weeks = [];
  month_selected: string;
  months = [];

  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _projectService: ProjectService) { }

  async ngOnInit() {
    await this.loadData();
    await this.sortElements();
    console.log(this.elements);
    this.typeOfCalendar();
    this.calculTargetsPerWeek();

    this.calculMonths();
    console.log(this.targets);
  }

  /* Load the project & all m_a_p data with the activity & member linked */
  async loadData() {

    this.ready = false;

    //We select the project
    try {
      let project_id = localStorage.getItem('Project_id');
      let project = await this._projectService.select(project_id).toPromise();
      this.project = project['data'];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    //We select all MemberActivityProject linked to the project
    this.m_a_p = [];
    try {
      let m_a_p = await this._memberActivityProjectService.selectAllFromProject(this.project.project_id).toPromise();
      this.m_a_p = m_a_p['data'];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    //We select all Members & Activities linked to theses m_a_p
    this.workers = [];
    this.activities = [];
    this.elements = [];
    try {
      for (let m of this.m_a_p) {
        let worker = await this._memberService.select(m.member_id).toPromise();
        let activity = await this._activityService.select(m.activity_id).toPromise();
        this.workers.push(worker['data'] as Member);
        this.activities.push(activity['data'] as Activity);
      }
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    this.ready = true;

  }

  /* For one member, we group all his m_a_p inside the elements array.It's like a distinct member request */
  sortElements() {
    this.sorted_workers = [];
    let add: boolean;
    //I CHECK EVERY WORKERS
    for (let w of this.workers){
      add = true;
      for (let s of this.sorted_workers){
        if(s.member_id == w.member_id){
          add = false;
        }
      }
      if (add) {
        this.sorted_workers.push(w);
      }
    }

    //NOW I INSERT ALL M_A_P
    for (let s of this.sorted_workers){
      let sorted_map = [];
      let total_target = 0;
      for (let m of this.m_a_p){
        if (s.member_id == m.member_id){
          sorted_map.push(m);
          total_target += m.target_quantity;
        }
      }
      let element = {member: s, m_a_ps: sorted_map, total_target: total_target};
      this.elements.push(element);
    }
  }

  /* Give the number of days between 2 dates */
  intervalDate(d1, d2){
    let start = new Date(d1);
    let end = new Date(d2);
    let interval = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) ) /(1000 * 60 * 60 * 24));
    return interval;
  }

  /* Store every target of each m_a_ps in the good week of the period */
  calculTargetsPerWeek() {
    //Map where MEMBER is the key, value : new MAP { Week date : quantity }
    this.targets = new Map();

    //We check every members
    for (let element of this.elements) {
      this.targets.set(element['member'].member_id, new Map());

      /* ----- We check every m_a_ps of the member ----- */
      for (let map of element['m_a_ps']) {

        let start = new Date(map.date_begin);
        let end = new Date(map.target_date);

        //Interval in days & quantity per day
        let interval = moment(end).diff(start) / (1000 * 60 * 60 * 24) + 1;
        let one_quantity: number = Math.floor(map.target_quantity / interval);
        let one_quantity_finished: number = Math.floor(map.finished_quantity / interval);

        let quantity_given = 0;
        let quantity_finished_given = 0;
        let quantity = one_quantity;
        let quantity_finished = one_quantity_finished;
        let full_quantity = one_quantity * interval;
        let full_quantity_finished = one_quantity_finished * interval;

        if (one_quantity == 0){
          one_quantity = parseFloat((map.target_quantity / interval).toFixed(1));
          full_quantity = parseFloat((one_quantity * interval).toFixed(1));

          console.log('oui oui : ', parseInt((map.target_quantity / interval).toFixed(1)));
        }
        if (one_quantity_finished == 0){
          one_quantity_finished = parseFloat((map.finished_quantity / interval).toFixed(1));
          full_quantity_finished = parseFloat((one_quantity_finished * interval).toFixed(1));
        }

        let w;

        //The day that will be the key of the amount of quantity calculated
        if (moment(start).format('dddd') == 'Monday'){
          w = new Date(start.getFullYear(), start.getMonth(), start.getDate()); //We do this process to have minutes, hours & seconds at default value
        }else{
          let fake_date = new Date(start);
          let first_day = moment(fake_date).format('dddd');
          while (first_day != 'Monday' && fake_date != start){
            fake_date.setDate(fake_date.getDate()-1);
            first_day = moment(fake_date).format('dddd');
          }
          //FIRST KEY
          w = new Date(fake_date.getFullYear(), fake_date.getMonth(), fake_date.getDate());
        }


        /* ----- We check every days ----- */
        /* ----- We check every days ----- */
        for (let i = new Date(start); i <= end; i.setDate(i.getDate() + 1)) {

          let day = moment(i).format('dddd');

          //If it's Monday, we store the previous quantity in a week, and continue in a new week
          if (day == 'Monday' && i.toString() != start.toString()) {

            //If it's the last day, we need to add the rest of the quantity
            if(i.toString() == end.toString()){
              quantity = full_quantity - quantity_given;
              quantity_finished = full_quantity_finished - quantity_finished_given;
            }

            let previous_quantity = 0;
            let previous_quantity_finished = 0;
              if (this.targets.get(element['member'].member_id).get(w.toString()) != null){
              //Yes, we need to increase with the existing quantity
              previous_quantity = this.targets.get(element['member'].member_id).get(w.toString())['target_quantity'];
              previous_quantity_finished = this.targets.get(element['member'].member_id).get(w.toString())['finished_quantity'];
            }
            let e = {
                finished_quantity: previous_quantity_finished+quantity_finished,
                target_quantity: previous_quantity+quantity
            }
            this.targets.get(element['member'].member_id).set(w.toString(), e);
            quantity_given += quantity;
            quantity_finished_given += quantity_finished;

            //We get the new Monday date for next quantities
            w = new Date(i.getFullYear(), i.getMonth(), i.getDate());
            quantity = 0;
            quantity_finished = 0;
          }
          else {
            quantity += one_quantity;
            quantity_finished += one_quantity_finished;
          }
        }
        /* ----- /We check every days ----- */

        //If it's Monday, we have already add the quantity, so we add only if it's not monday
        let last_day = moment(end).format('dddd');
        if (last_day != 'Monday') {
          //Is the week already exist ?
          quantity = full_quantity - quantity_given;
          quantity_finished = full_quantity_finished - quantity_finished_given;
          let previous_quantity = 0;
          let previous_quantity_finished = 0;

          if (this.targets.get(element['member'].member_id).get(w.toString()) != null) {
            //Yes, we need to increase with the existing quantity
            previous_quantity = this.targets.get(element['member'].member_id).get(w.toString())['target_quantity'];
            previous_quantity_finished = this.targets.get(element['member'].member_id).get(w.toString())['finished_quantity'];
          }
          let e = {
            target_quantity: previous_quantity+quantity,
            finished_quantity: previous_quantity_finished+quantity_finished
          };
          this.targets.get(element['member'].member_id).set(w.toString(), e);
        }
      }
      /* ----- /We check every m_a_ps of the member ----- */
    }
  }

  /* Give all weeks for a given month (used for the targets display data) */
  calculWeeksPerMonth(year, month){
    this.weeks = [];
    let start = new Date(year, month);
    let end = new Date(year, month+1, 0);

    let first_day = moment(start).format('dddd');
    while (first_day != 'Monday'){
      start.setDate(start.getDate()-1);
      first_day = moment(start).format('dddd');
    }

    let i = new Date(start);
    let date_label = "";
    let j =0
    while(i<=end && j<56){
      let key = new Date(i);
      date_label = moment(i).format('M/D')+' - '
      i.setDate(i.getDate()+6);
      date_label += moment(i).format('M/D');
      this.weeks.push([date_label, key.toString()]);
      i.setDate(i.getDate()+1);
      j++;
    }
  }

  calculPourcentage(value, total){
    console.log(value, 'and ', total);
    console.log(Math.ceil(value*100/total))
    return Math.ceil(value*100/total);
  }

  calculMonths(){
    let start = new Date(this.project.project_start);
    let end = new Date(this.project.project_end);
    start.setDate(1);
    end.setMonth(end.getMonth()+1);
    end.setDate(0);
    console.log('start : ',start);
    let i = new Date(start);
    while (i<end){
      let m = {
        month: new Date(i),
        month_label: moment(i).format('MMMM')
      };
      this.months.push(m);
      i.setMonth(i.getMonth()+1);
      console.log('i : ',i);
    }
    console.log(this.months);
    this.month_selected = this.months[0];
    this.calculWeeksPerMonth(start.getFullYear(), start.getMonth());
  }

  changeMonth(next){
    let indice = this.months.indexOf(this.month_selected);
    let changed: boolean = false;
    console.log(this.month_selected);
    if (next &&  indice < this.months.length-1){
      this.month_selected = this.months[indice+1];

      changed = true;
    }
    else if (!next && indice>0){
      this.month_selected = this.months[indice-1];
      changed = true;
    }
    console.log('become ', this.month_selected);

    if (changed) {
      let date = new Date(this.month_selected['month']);
      console.log(date, 'and', date.getFullYear(), ' and ', date.getMonth());
      this.calculWeeksPerMonth(date.getFullYear(), date.getMonth());
    }
  }

  /* Give the number of days between 2 dates */
  dateInterval (d1,d2){
    var nb = d2.getTime() - d1.getTime();
    return Math.ceil(nb/(1000*60*60*24));
  }

  typeOfCalendar(){

    let interval = this.intervalDate(this.project.project_start, this.project.project_end);

    if (interval<8){
      this.calendarType = "1week";
    }
    else if (interval<15){
      this.calendarType = "2week";
    }
    else if (interval<22){
      this.calendarType = "3week";
    }
    else {
      this.calendarType = "month";
    }
    console.log(this.calendarType);
  }

  async calendarRange() {

    let start = new Date(this.project.project_start);
    let end = new Date (this.project.project_end);
    let fake_start = new Date(this.project.project_start);
    let fake_end = new Date(this.project.project_end);

    this.calendar = [];

    // We prepare var for month's label
    var locale = "en-us";
    let date = new Date(start);

    /* ----- We get each days ----- */
    /* ----- We get each days ----- */
    for (let i = start.getFullYear(); i<=end.getFullYear(); i++){
      let element = {
        year: i,
        months: []
      };

      fake_start.setFullYear(i);
      fake_end.setFullYear(i);

      /* ----- We check first and last month of the loop ----- */

      //If it's not the first year, we need to begin at January
      if(i != start.getFullYear()){
        fake_start.setMonth(0);
      }

      //If it's the last year, we need to finish at the right Month
      if(i == end.getFullYear()){
        fake_end.setMonth(end.getMonth());
      }
      else {
        fake_end.setMonth(11);
      }

      /* ----- We get each months ----- */
      /* ----- We get each months ----- */

      for (let j = fake_start.getMonth(); j<=fake_end.getMonth(); j++){

        let fake_start_2 = new Date(fake_start);
        let fake_end_2 = new Date(fake_end);
        fake_start_2.setMonth(j);
        fake_end_2.setMonth(j);

        date.setMonth(j);
        let month = {
          month: j,
          month_label: date.toLocaleDateString(locale, { month: "long"}),
          days: []
        };
        /* ----- We check first and last day of the loop ----- */

        //if it's not the first month of the first year, we need to begin the 1st
        if( !(i == start.getFullYear() && j ==start.getMonth()) ){
          fake_start_2.setDate(1);
        }
        //If it's the last month of the last year, we need to finish at the right day
        if(i == end.getFullYear() && j == end.getMonth()){
          fake_end_2.setDate(end.getDate());
        }
        else {
          fake_end_2.setMonth(j+1);
          fake_end_2.setDate(0);
        }

        /* ----- We get each days ----- */
        /* ----- We get each days ----- */
        for (let k = fake_start_2.getDate(); k <= fake_end_2.getDate(); k++){
          date.setDate(k);
          let day = {
            day: k,
            target_quantity: 0,
            quantity_finished: 0
          };
          month['days'].push(day);
        }
        /* ----- /We get each days ----- */

        element['months'].push(month);
      }
      /* ----- /We get each months ----- */

      this.calendar.push(element);

    }
    /* ----- /We get each years ----- */
    console.log(this.calendar);
  }

}
