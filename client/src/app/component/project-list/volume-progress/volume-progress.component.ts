import { Component, OnInit } from '@angular/core';
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {Member} from "../../../objects/member/member";
import {Activity} from "../../../objects/activity/activity";
import {MemberService} from "../../../objects/member/member.service";
import {ActivityService} from "../../../objects/activity/activity.service";
import {Project} from "../../../objects/project/project";
import {ProjectService} from "../../../objects/project/project.service";

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

  ready:boolean = false;

  months_label = [];
  month_index:number = 0;

  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _projectService: ProjectService) { }

  async ngOnInit() {
    await this.loadData();
    await this.sortElements();
    this.calendarRange();
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

  calendarRange() {
    let start = new Date(this.project.project_start);
    let end = new Date (this.project.project_end);
    let intervalDay = this.dateInterval(start, end);
    //let intervalMonth = Math.ceil(intervalDay/31);

    // We get label of all months
    var locale = "en-us";
    let date = start;
    let month:string;
    for (let i = start.getMonth(); i<=end.getMonth(); i++){
      month = date.toLocaleDateString(locale, { month: "long"});
      this.months_label.push(month);
      date.setMonth(date.getMonth()+1);
    }



  }

  /* Give the number of days between 2 dates */
  dateInterval (d1,d2){
    var nb = d2.getTime() - d1.getTime();
    return Math.ceil(nb/(1000*60*60*24));
  }

}
