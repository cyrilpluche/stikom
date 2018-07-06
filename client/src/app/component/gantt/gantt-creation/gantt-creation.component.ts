import { Component, OnInit } from '@angular/core';
import {Project} from "../../../objects/project/project";
import {Activity} from "../../../objects/activity/activity";
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {ActivityService} from "../../../objects/activity/activity.service";



@Component({
  selector: 'app-gantt-creation',
  templateUrl: './gantt-creation.component.html',
  styleUrls: ['./gantt-creation.component.scss']
})
export class GanttCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  project_id: string = "";
  ready: boolean = false;

  elements: Object[][] = [];
  activities_from_project: Activity[] = [];
  members_activities_project: MemberActivityProject[] = [];
  activity_selected: Activity = new Activity();
  member_activity_project_selected: MemberActivityProject = new MemberActivityProject();

  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _activityService: ActivityService) { }

  ngOnInit() {
    this.project_id = localStorage.getItem('Project_id');
    this.loadRows();
  }

  loadRows(){
    this.elements = [];
    this.activities_from_project = [];
    this.members_activities_project = [];

    let vm = this;

    this.loadRowsDistinct()
    setTimeout(function () {
      vm._memberActivityProjectService.selectAllFromProject(vm.project_id)
        .subscribe((res) => {
            vm.errorMessage = "";
            vm.members_activities_project = res['data'] as MemberActivityProject[];
            let i = 0;

            console.log('Element size : '+vm.elements.length)
            //For each m_a_p we check which activity is linked
            for (let e of vm.elements){
              let sort_map = [];
              //We look at all activities
              for (let map of vm.members_activities_project){
                if (map.activity_id == e[1]['activity_id']){
                  sort_map.push(map);
                }
              }
              e[2] = sort_map;
              i++;
            }
            vm.ready=true;
          },
          error => {
            vm.errorMessage = error.error.message;
          });
    }, 2000)


  }

  loadRowsDistinct(){
    let promise = new Promise((resolve, reject) => {
      this._memberActivityProjectService.selectAllFromProjectDistinct(this.project_id).toPromise()
        .then(res => {
            this.errorMessage = "";
            for (let map of res['data']){
              //Now that we have all m_a_p of the project, we select information of each activity
              this._activityService.select(map['activity_id'])
                .subscribe((res1) => {
                    this.errorMessage = "";
                    this.activities_from_project.push(res1['data'] as Activity);
                    this.elements.push([map, res1['data'], []]);
                  },
                  error => {
                    this.errorMessage = error.error.message;
                  });
            }
            resolve();
          },
          error => {
            this.errorMessage = error.error.message;
            reject(error);
          });
    });
    return promise;
  }

  selectRow(element) {
    this.activity_selected = element[1];
    this.member_activity_project_selected = element[0];
  }

}
