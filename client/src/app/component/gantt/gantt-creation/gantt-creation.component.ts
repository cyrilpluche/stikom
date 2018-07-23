import { Component, OnInit } from '@angular/core';
import {Project} from "../../../objects/project/project";
import {Activity} from "../../../objects/activity/activity";
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {ActivityService} from "../../../objects/activity/activity.service";
import {ProjectService} from "../../../objects/project/project.service";
import {Member} from "../../../objects/member/member";
import {MemberService} from "../../../objects/member/member.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {JobService} from "../../../objects/job/job.service";



@Component({
  selector: 'app-gantt-creation',
  templateUrl: './gantt-creation.component.html',
  styleUrls: ['./gantt-creation.component.scss']
})
export class GanttCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";

  ready: boolean = false;

  /* NEW */
  project: Project;
  activities_jobs_id_distinct: MemberActivityProject[];
  m_a_ps: MemberActivityProject[];
  activitiesJobs: Object[];
  m_a_ps_members: Object[];
  elements: Object[];
  element_selected;

  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _activityService: ActivityService,
              private _projectService: ProjectService,
              private _memberService: MemberService,
              private _jobService: JobService,
              private router: Router) { }

  async ngOnInit() {
    this.loadData();
  }

  async onSubmit(){

    for (let element of this.elements){
      for(let map of element['maps_members']){
        let m = map['m_a_p'] as MemberActivityProject;
        m.target_date = element['date_target'];
        m.date_begin = element['date_begin'];
        await this._memberActivityProjectService.update(m).toPromise();
      }
    }

    this.router.navigate(['/project-list']);
  }

  async loadProject(){
    try {
      let project_id = localStorage.getItem('Project_id');
      let project = await this._projectService.select(project_id).toPromise();
      this.project = project['data'];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }
  }

  async loadData() {

    this.ready = false;

    await this.loadProject();

    //We select all id activities DISTINCT
    try {
      this.activities_jobs_id_distinct = [];
      let maps = await this._memberActivityProjectService.selectAllFromProjectDistinct(this.project.project_id).toPromise();
      this.activities_jobs_id_distinct = maps['data'] as MemberActivityProject[];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    //Now that we have all id activity distinct of the project, we select information of each activity
    try {
      this.activitiesJobs = [];
      for (let a of this.activities_jobs_id_distinct) {
        let activity = await this._activityService.select(a.activity_id).toPromise();
        let job = await this._jobService.select(a.job_id).toPromise();
        let e = {
          activity: activity['data'],
          job: job['data']
        };
        this.activitiesJobs.push(e);
      }
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    //We select now all m_a_p
    try {
      this.m_a_ps = [];
      let map = await this._memberActivityProjectService.selectAllFromProject(this.project.project_id).toPromise();
      this.m_a_ps = map['data'] as MemberActivityProject[];
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

    //Now we select all members linked
    try {
      this.m_a_ps_members = [];
      for (let m of this.m_a_ps){
        let member = await this._memberService.select(m.member_id).toPromise();
        let element = {
          m_a_p: m as MemberActivityProject,
          member: member['data'] as Member
        };
        this.m_a_ps_members.push(element);
      }
    }
    catch (error) {
      this.errorMessage = error.error;
    }

    //Now we insert all inside the element array to use it in the view
    this.elements = [];
    for (let a of this.activitiesJobs){
      let element = {
        activity: a['activity'],
        job: a['job']
      };

      //We group all map linked to this activity
      let mm_linked = [];
      for (let m of this.m_a_ps_members){
        if (a['activity'].activity_id == m['m_a_p'].activity_id && a['job'].job_id == m['m_a_p'].job_id){
          mm_linked.push(m);
        }
      }

      element['maps_members'] = mm_linked;
      element['date_target'] = element['maps_members'][0]['m_a_p'].target_date;
      element['date_begin'] = element['maps_members'][0]['m_a_p'].date_begin;

      //We calcul the min and max date target
      let date = new Date(this.project.project_start);
      if (element['activity'].activity_type_duration == 'days'){
        date.setDate(date.getDate() + element['activity'].activity_duration);
      }
      else if (element['activity'].activity_type_duration == 'month'){
        date.setMonth(date.getMonth() + element['activity'].activity_duration);
      }
      element['min_date_target'] = date;
      date = new Date(this.project.project_end);
      element['max_date_target'] = date;

      //We calcul min and max date begin
      date = new Date(this.project.project_start);
      element['min_date_begin'] = date;
      date = new Date(element['date_target']);
      if (element['activity'].activity_type_duration == 'days'){
        date.setDate(date.getDate() - element['activity'].activity_duration);
      }
      else if (element['activity'].activity_type_duration == 'month'){
        date.setMonth(date.getMonth() - element['activity'].activity_duration);
      }
      element['max_date_begin'] = date;

        this.elements.push(element);
    }

    console.log(this.elements);
    this.ready = true;

  }

  minMaxBeginDates(element){
    element['min_date_begin'] = new DatePipe('en-US').transform(this.project.project_start, 'yyyy-MM-dd');
    let date = new Date(element['date_target']);
    if (element['activity'].activity_type_duration == 'days'){
      date.setDate(date.getDate() - element['activity'].activity_duration);
    }
    else if (element['activity'].activity_type_duration == 'month'){
      date.setMonth(date.getMonth() - element['activity'].activity_duration);
    }
    element['max_date_begin'] = new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
    this.verificationDates(element);
  }

  verificationDates(element){
    let date_begin = new Date(element['date_begin']);
    let max_date_begin = new Date(element['max_date_begin']);

    if (element['activity'].activity_type_duration != 'days' && element['activity'].activity_type_duration != 'months') {
      if (date_begin > max_date_begin) {
        date_begin = new Date(element['date_target']);
        element['date_begin'] = new DatePipe('en-US').transform(date_begin, 'yyyy-MM-dd');
      }
    }
    else{
      if (date_begin >= max_date_begin) {
        date_begin = new Date(element['date_target']);
        if (element['activity'].activity_type_duration == 'days'){
          date_begin.setDate(date_begin.getDate() - element['activity'].activity_duration)
        }
        else if (element['activity'].activity_type_duration == 'months'){
          date_begin.setMonth(date_begin.getMonth() - element['activity'].activity_duration)
        }
        element['date_begin'] = new DatePipe('en-US').transform(date_begin, 'yyyy-MM-dd');
      }
    }
  }

  selectRow(element) {
    this.element_selected = element;
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("gantt-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  sortTable1(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("worker-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  search() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("gantt-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}
