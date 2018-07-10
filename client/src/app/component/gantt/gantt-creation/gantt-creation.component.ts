import { Component, OnInit } from '@angular/core';
import {Project} from "../../../objects/project/project";
import {Activity} from "../../../objects/activity/activity";
import {MemberActivityProjectService} from "../../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../../objects/member_activity_project/member-activity-project";
import {ActivityService} from "../../../objects/activity/activity.service";
import {ProjectService} from "../../../objects/project/project.service";
import {Member} from "../../../objects/member/member";
import {MemberService} from "../../../objects/member/member.service";



@Component({
  selector: 'app-gantt-creation',
  templateUrl: './gantt-creation.component.html',
  styleUrls: ['./gantt-creation.component.scss']
})
export class GanttCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  project_id: string = "";
  project: Project;
  ready: boolean = false;

  test: string = "0";
  elements: Object[][] = [];
  element_selected = [];
  workers_selected: Object[];
  target_quantities = new Map();
  activities_from_project: Activity[] = [];
  members_activities_project: MemberActivityProject[] = [];
  activity_selected: Activity = new Activity();
  member_activity_project_selected: MemberActivityProject = new MemberActivityProject();

  new_dates_target: string[] = [];

  constructor(private _memberActivityProjectService: MemberActivityProjectService,
              private _activityService: ActivityService,
              private _projectService: ProjectService,
              private _memberService: MemberService) { }

  ngOnInit() {
    this.project_id = localStorage.getItem('Project_id');
    this.loadProject();
    this.loadRows();
  }

  onSubmit(){

  }

  loadProject(){
    this._projectService.select(this.project_id).subscribe((res) => {
        this.errorMessage = "";
        this.project = res['data'] as Project;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  loadRows(){
    this.elements = [];
    this.activities_from_project = [];
    this.members_activities_project = [];

    let vm = this;

    //
    //
    this.allFromProject()

    /* pour remettre à 0
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
              vm._memberService.select(e)
              let sort_map = [];
              let sort_members = [];
              for (let map of vm.members_activities_project){
                if (map.activity_id == e[1]['activity_id']){
                  sort_map.push(map);
                  vm._memberService.select(map.member_id)
                    .subscribe((res) => {
                        vm.errorMessage = "";
                        let libelle = map.activity_id.toString() + map.member_id.toString();
                        console.log('quantity : ', map.target_quantity);
                        vm.target_quantities.set(libelle, map.target_quantity as number);
                        sort_members.push(res['data'] as Member)
                      },
                      error => {
                        vm.errorMessage = error.error.message;
                      });
                }
              }
              e[3] = sort_members;
              e[2] = sort_map;
              i++;
            }

            vm.ready=true;
          },
          error => {
            vm.errorMessage = error.error.message;
          });
    }, 2000)

     */

  }

  async allFromProject () {
    let vm = this
    await this.loadRowsDistinct().then(function () {

      vm._memberActivityProjectService.selectAllFromProject(vm.project_id)
        .subscribe((res) => {
            vm.errorMessage = "";
            vm.members_activities_project = res['data'] as MemberActivityProject[];
            let i = 0;

            console.log('Element size : '+vm.elements.length)

            //For each m_a_p we check which activity is linked
            for (let e of vm.elements){
              vm._memberService.select(e)
              let sort_map = [];
              let sort_members = [];
              for (let map of vm.members_activities_project){
                if (map.activity_id == e[1]['activity_id']){
                  sort_map.push(map);
                  vm._memberService.select(map.member_id)
                    .subscribe((res) => {
                        vm.errorMessage = "";
                        let libelle = map.activity_id.toString() + map.member_id.toString();
                        console.log('quantity : ', map.target_quantity);
                        vm.target_quantities.set(libelle, map.target_quantity as number);
                        sort_members.push(res['data'] as Member)
                      },
                      error => {
                        vm.errorMessage = error.error.message;
                      });
                }
              }
              e[3] = sort_members;
              e[2] = sort_map;
              i++;
            }

            vm.ready=true;
          },
          error => {
            vm.errorMessage = error.error.message;
            throw error
          });
    }).catch(function (e) {
      console.log(e)
      vm.errorMessage = e.error.message
    })

  }

  loadRowsDistinct(){
    return new Promise((resolve, reject) => {
      this._memberActivityProjectService.selectAllFromProjectDistinct(this.project_id).toPromise()
        .then(res => {
            this.errorMessage = "";
            for (let map of res['data']){
              //Now that we have all m_a_p of the project, we select information of each activity
              this._activityService.select(map['activity_id'])
                .subscribe((res1) => {
                    this.errorMessage = "";
                    this.activities_from_project.push(res1['data'] as Activity);
                    this.elements.push([map, res1['data'], [], []]);
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

  }

  selectRow(element) {
    console.log(element);
    this.element_selected = element;
    this.activity_selected = element[1];
    this.member_activity_project_selected = element[0];
    this.workers_selected = [];
    for (let e of element[3]){
      //We get the quantity stored in the Map
      let libelle = element[1]['activity_id'].toString()+e['member_id'];
      let q:number = this.target_quantities.get(libelle) as number;
      console.log('value : ',q)
      console.log('tpe : ', typeof q)
      //We add it the the displayed list
      this.workers_selected.push([e, q])
    }

  }

  saveTarget(member_id){
    //We take the quantity from the input
   let quantity = document.getElementById('q_'+member_id)['value'];
   //We store it into the Map
    this.target_quantities.set(this.activity_selected.activity_id.toString()+member_id, quantity);
    console.log(this.target_quantities);
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
      console.log(td);
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  calculDateTarget(element){
    let activity = element[1] as Activity;
    let informations = element[2][0] as MemberActivityProject;
    let answer = new Date(informations.date_begin);
    if (activity.activity_type_duration == "days") {
      answer.setDate(answer.getDate()+activity.activity_duration);
    }
    else if (activity.activity_type_duration == "months") {
      answer.setMonth(answer.getMonth()+activity.activity_duration);
    }
    return answer;
  }

}
