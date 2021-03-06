import { Component, OnInit } from '@angular/core';
import {Project} from "../../objects/project/project";
import {ProjectService} from "../../objects/project/project.service";
import {TextHelperComponent} from "../../helpers/text-helper/text-helper.component";
import {DateHelperComponent} from "../../helpers/date-helper/date-helper.component";
import {SopService} from "../../objects/sop/sop.service";
import {RoleHelperComponent} from "../../helpers/role-helper/role-helper.component";
import {MemberService} from "../../objects/member/member.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  textHelper: TextHelperComponent = new TextHelperComponent();
  dateHelper: DateHelperComponent = new DateHelperComponent();

  projects: any;
  projects_0: Project[]; // Not started
  projects_1: Project[]; // Started
  projects_2: Project[]; // Finished

  project_selected: Project = new Project();
  buttonsTitles: string [] = [];
  buttonsLinks: string [] = [];

  member_role: string;
  role_helper: RoleHelperComponent = new RoleHelperComponent(this._memberService);

  constructor(private _projectService: ProjectService,
              private _sopService: SopService,
              private _memberService: MemberService) { }

  async ngOnInit() {
    this.member_role = await this.role_helper.getRole();
    this.setLinks();
    this._sopService.removeSopIdLocal();
    await this.loadProjects();
  }

  setLinks(){
    if (this.member_role == 'performer' || this.member_role == 'none'){
      this.buttonsTitles = ['Project information', 'Master of work', 'Volume Progress'];
      this.buttonsLinks = ['project', 'master-of-work', 'volume-progress'];
    }else{
      this.buttonsTitles = ['Project information', 'Master of work', 'Gantt', 'Volume Progress'];
      this.buttonsLinks = ['project', 'master-of-work', 'gantt-creation', 'volume-progress'];
    }
  }

  async loadProjects(){
    try {
      this.errorMessage = "";
      this.projects_0 = [];
      this.projects_1 = [];
      this.projects_2 = [];
      let p = await this._projectService.selectAllSort().toPromise();
      this.projects = p['data'];
      this.sortProjects();
    }
    catch (error) {
      this.errorMessage = error.message;
    }
  }

  sortProjects(){
    for (let p of this.projects){
      if (p['state'] == 0){
        this.projects_0.push(p);
      }
      else if (p['state'] == 1){
        this.projects_1.push(p);
      }
      else {
        this.projects_2.push(p);
      }
    }

  }

  sortTable(n, t: number) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    if (t == 1){
      table = document.getElementById("project-table");
    }
    else if (t == 2){
      table = document.getElementById("project-table-2");
    }
    else{
      table = document.getElementById("project-table-3");
    }
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

  search(t: number) {
    // Declare variables
    var input, filter, table, tr, td, td2, i;
    if (t == 1){
      input = document.getElementById("search");
      table = document.getElementById("project-table");
    }
    else if (t == 2){
      input = document.getElementById("search-2");
      table = document.getElementById("project-table-2");
    }
    else{
      input = document.getElementById("search-3");
      table = document.getElementById("project-table-3");
    }
    filter = input.value.toUpperCase();
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td2 = tr[i].getElementsByTagName("td")[2];
      if (td || td2) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  selectProject(project){
    this.project_selected = project;
    localStorage.setItem('Project_id', project.project_id);
  }

  deleteProject(project_id) {
    this._projectService.delete(project_id).subscribe((res) => {
        this.errorMessage = "";
        this.loadProjects();
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

}
