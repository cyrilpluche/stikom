import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../objects/project/project.service";
import {Project} from "../../objects/project/project";
import {TextHelperComponent} from "../../helpers/text-helper/text-helper.component";
import {DateHelperComponent} from "../../helpers/date-helper/date-helper.component";
import {Activity} from "../../objects/activity/activity";
import {ActivityService} from "../../objects/activity/activity.service";
import {MemberActivityProject} from "../../objects/member_activity_project/member-activity-project";
import {MemberActivityProjectService} from "../../objects/member_activity_project/member-activity-project.service";
import {JobService} from "../../objects/job/job.service";
import {UnitService} from "../../objects/unit/unit.service";
import {Unit} from "../../objects/unit/unit";

@Component({
  selector: 'app-master-of-work',
  templateUrl: './master-of-work.component.html',
  styleUrls: ['./master-of-work.component.scss']
})
export class MasterOfWorkComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  ready: boolean = false;
  textHelper: TextHelperComponent = new TextHelperComponent();

  project: Project;

  /*
   * activities: MAP[KEY: job_id, VALUES: {job: Job,
   *                                       activities: MAP[KEY: activity_id, VALUES: {activity: Activity,
   *                                                                                  sub_activities: Activity[]
   *                                                                                 }
   *                                                      ]
   *                                       }
   *                ]
   */
  activities = new Map();
  units = new Map();

  constructor(private _projectService: ProjectService,
              private _activityService: ActivityService,
              private _jobService: JobService,
              private _unitService: UnitService,
              private _memberActivityProjectService: MemberActivityProjectService) { }

  async ngOnInit() {
    await this.loadData();
    this.ready = true;
    console.log(this.units);
  }


  /* ------------------ LOAD METHODS ------------------ */
  /* ------------------ LOAD METHODS ------------------ */

  async loadData() {
    await this.loadProject();
    await this.loadActivitiesFromProject();
  }

  async loadProject() {
    try{
      let project_id = localStorage.getItem("Project_id");
      let p = await this._projectService.getProject(project_id).toPromise();
      this.project = p['data'] as Project;
    }
    catch(error){
      this.errorMessage = error.message;
    }
  }

  async loadActivitiesFromProject() {
    //We select all id activities DISTINCT
    try {
      let maps = await this._memberActivityProjectService.selectAllFromProjectDistinct(this.project.project_id).toPromise();
      let activities_id = maps['data'];

      let activities: Object[] = [];
      for (let activity_id of activities_id){
        let activity = await this._activityService.select(activity_id['activity_id']).toPromise();
        let job = await this._jobService.select(activity_id['job_id']).toPromise();
        let unit = await this._unitService.selectAllFromActivity(activity_id['activity_id']).toPromise();
        let e = {
          activity: activity['data'],
          job: job['data'],
          unit: unit['data']
        };
        activities.push(e);
        this.units.set(unit['data'][0].unit_id, unit['data'][0]);
      }

      this.sortActivities(activities);
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  /* ------------------ SORT METHODS ------------------ */
  /* ------------------ SORT METHODS ------------------ */

  /*
   * DATA - activities: {job: Job, activity: Activity, unit: Unit}
   */
  sortActivities(activities: Object[]){
    //We have a main activity
    for (let activity of activities){
      if (activity['activity'].activity_id_is_father == null || activity['activity'].activity_id_is_father == ""){

        //We create the job if needed
        if (this.activities.get(activity['job'].job_id) == null) {
          let e1 = {
            job: activity['job'],
            activities: new Map()
          };
          this.activities.set(activity['job'].job_id, e1);
        }

        //We store the activity
        let a = this.activities.get(activity['job'].job_id)['activities'];
        let e2 = {
          activity: activity['activity'],
          unit: activity['unit'],
          sub_activities: []
        };
        a.set(activity['activity'].activity_id, e2);
      }
    }

    //We have sub activities
    for (let activity of activities){
      if (activity['activity'].activity_id_is_father != null && activity['activity'].activity_id_is_father != ""){
        let main_activity = this.activities.get(activity['job'].job_id)['activities'];
        let sub_activities = main_activity.get(activity['activity'].activity_id_is_father)['sub_activities'];
        sub_activities.push(activity['activity']);
      }
    }
  }


  /* ------------------ HELPER ------------------ */
  /* ------------------ HELPER ------------------ */

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

}
