import { Component, OnInit } from '@angular/core';
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {Member} from "../../../objects/member/member";
import {Activity} from "../../../objects/activity/activity";
import {MemberService} from "../../../objects/member/member.service";
import {ActivityService} from "../../../objects/activity/activity.service";

@Component({
  selector: 'app-volume-progress',
  templateUrl: './volume-progress.component.html',
  styleUrls: ['./volume-progress.component.scss']
})
export class VolumeProgressComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  project_id:string;
  m_a_p: MemberActivityProject[] = [];
  workers: Member[] = [];
  activities: Activity[] = [];
  elements: Object[] = [];
  sorted_workers = [];

  ready:boolean = false;


  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _memberService: MemberService,
              private _activityService: ActivityService) { }

  async ngOnInit() {
    this.project_id = localStorage.getItem('Project_id');
    await this.loadData();
    await this.sortElements();
  }

  async loadData() {

    this.ready = false;

    //We select all MemberActivityProject linked to the project
    this.m_a_p = [];
    try {
      let m_a_p = await this._memberActivityProjectService.selectAllFromProject(this.project_id).toPromise();
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

    console.log('Worker array : ', typeof this.workers);
    console.log('M_A_P array : ', typeof this.m_a_p);
    this.ready = true;

  }

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

    for (let s of this.sorted_workers){
      let sorted_map = [];
      for (let m of this.m_a_p){
        if (s.member_id == m.member_id){
          sorted_map.push(m);
        }
      }
      let element = {member: s, m_a_ps: sorted_map}
      this.elements.push(element);
    }
  }
}
