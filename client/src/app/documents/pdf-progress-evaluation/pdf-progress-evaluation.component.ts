import { Component, OnInit } from '@angular/core';
import {MemberActivityProjectService} from "../../objects/member_activity_project/member-activity-project.service";
import {MemberActivityProject} from "../../objects/member_activity_project/member-activity-project";
import {Member} from "../../objects/member/member";
import {Activity} from "../../objects/activity/activity";
import {MemberService} from "../../objects/member/member.service";
import {ActivityService} from "../../objects/activity/activity.service";
import {Project} from "../../objects/project/project";
import {ProjectService} from "../../objects/project/project.service";
import * as moment from 'moment';
import {first} from "rxjs/internal/operators";
import {JobService} from "../../objects/job/job.service";
import {Job} from "../../objects/job/job";

import {DatePipe} from "@angular/common";
import {PdfService} from "../../objects/pdf/pdf.service";

@Component({
  selector: 'app-pdf-progress-evaluation',
  templateUrl: './pdf-progress-evaluation.component.html',
  styleUrls: ['./pdf-progress-evaluation.component.scss']
})
export class PdfProgressEvaluationComponent implements OnInit {

  idProject:string="3";
  htmlPDF:string;
  jobs:any[]=[];
  project_pdf: Project;


  display_pdf_gantt:boolean = false;

  errorMessage: string = "";
  ready:boolean = false;

  project: Project;
  m_a_p: MemberActivityProject[] = [];
  workers: Member[] = [];
  activities: Object[] = [];
  sorted_workers = [];

  old_cell;

  /*
  * [{date: Date,
  *   elements: [{target_quantity: number,
  *               finished_quantity: number,
  *               finished_rate: number,
  *               member: Member
  *              }]
  *  }]
  * */
  volume_per_days: Object[] = [];
  volume_per_weeks: Object[] = [];
  is_type_weeks: boolean = false;

  /* [{member: Member,
  *    m_a_ps: MemberActivityProject[],
  *    total_target: number,
  *    total_finished: number
  *  }}
  *  */
  elements: Object[] = [];
  element_selected: Object;

  // Volumes that are displayed on the main table
  volumes_displayed = new Map();
  dates_displayed = [];
  volumes_displayed_iterator: number = 0;

  members_activities = new Map();


  display_pdf_progress:boolean=false;

  constructor(private _projectService:ProjectService,
              private _memberActivityProjectService:MemberActivityProjectService,
              private _pdfService: PdfService,
              private _memberService: MemberService,
              private _activityService: ActivityService,
              private _jobService: JobService) { }

  async ngOnInit() {
    await this.loadData();
    await this.sortElements();
    this.ready = true;
    console.log(this.elements);
    await this.getProject(localStorage.getItem("Project_id"));
    this.display_pdf_progress=true;




  }

  async filupPDF()
  {
    this.htmlPDF  = `<html>
<head>
<style>
table{
  border-collapse: collapse;
}
 td {
    border: 0.5mm solid black;
    margin: 0;
    padding: 2mm;
    font-size: 3mm;
    
}
tr{
  margin: 0;
  padding: 0;
}
.text-bold{
    font-weight: bold;
}
.saut-page
{
    page-break-after: always;
}
.no-borders
{
    border: none;
}
.center-align
{
    text-align: center;
}
</style>
</head>
<body>
`;
    console.log(this.activities)
    let tmp_job_done:any[]=[];
    for(let i=0; i<this.activities.length;i++)
    {
      let boolTest=false;
      for(let j=0; j<tmp_job_done.length; j++)
      {
        if(tmp_job_done[j] == this.activities[i]['job']['job_id'])
        {
          boolTest=true;
        }
      }

      if(boolTest== false)
      {


        try {
          console.log("ici");
          await this.loadVolumePerDay(this.activities[i]['job']['job_id']);
          console.log(this.volumes_displayed);

          if(i>0)
          {
            this.htmlPDF  += `<div class="saut-page"></div> `;
          }

              this.htmlPDF  += `
            <h5 style="margin-left: 37%; font-size: 140%;font-weight: bold;margin-top: 25mm;">VOLUME PROGRESS EVALUATION </h5>
            
            <table style="margin-left: 5%; width: 90%;">
                <tr class="no-borders">
                    <td class="no-borders" style="width: 20%">Work Code</td>
                    <td class="no-borders" style="width: 15%">`+this.activities[i]['job']['job_id']+`</td>
                    <td class="no-borders" style="width: 15%">Project Code</td>
                    <td class="no-borders" style="width: 15%">`+this.project_pdf.project_id+`</td>
                    <td class="no-borders" style="width: 35%"></td>
                </tr>
                <tr class="no-borders">
                    <td class="no-borders">Name of Project Work</td>
                    <td colspan="4" class="no-borders">Name of the job</td>
            
                </tr>
                
            </table>
            
            <table style="margin-left: 5%; width: 90%; margin-top: 10mm;">
              <tr>
                <td style="width: 3%" class="center-align text-bold" rowspan="3">No</td>
                <td style="width: 10%" class="center-align text-bold" rowspan="3">Staff Names</td>
                <td style="width: 7%" class="center-align text-bold" rowspan="3">Total <br> Target</td>
                <td style="width: 10%" class="center-align text-bold" rowspan="3">Total Target <br> vs Details</td>
                <td style="width: 45%" class="center-align text-bold" colspan="27">w1</td>
                <td style="width: 8%" class="center-align text-bold" rowspan="3">Total Finished</td>
                <td style="width: 7%" class="center-align text-bold" rowspan="3">%</td>
                <td style="width: 10%" class="center-align text-bold" rowspan="3">Note</td>
                 
              </tr>
              <tr>
                <td colspan="3" class="center-align">D1</td>
                <td colspan="3" class="center-align">D2</td>
                <td colspan="3" class="center-align">D3</td>
                <td colspan="3" class="center-align">D4</td>
                <td colspan="3" class="center-align">D5</td>
                <td colspan="3" class="center-align">D6</td>
                <td colspan="3" class="center-align">D7</td>
              </tr>
              <tr>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
                <td class="center-align">Target</td>
                <td class="center-align">Finished</td>
                <td class="center-align">%</td>
              </tr>
              `;

            for (let member of this.convertMap(this.volumes_displayed))
            {
              this.htmlPDF += `
                <tr>
              <td >`+member['member'].member_id+`</td>
              <td class="text-small">`+member['member'].member_name+` `+member['member'].member_first_name+`</td>
               <td>`+member['total_finished']+` `+member['total_target']+` `+member['total_rates']+` </td>
               <td></td>
               `;
              for(let volume of member['volumes'])
              {
                this.htmlPDF += `
                <td>`+volume['target_quantity']+`</td>
                <td>`+volume['finished_quantity']+`</td>
                <td>`+volume['finished_rate']+`</td>
                `;
              }
              this.htmlPDF += `</tr>`;

            }



              this.htmlPDF  += `
            </table>`;

          console.log("là");
        }
        catch (error){
          this.errorMessage = error.message;
        }




      }
    }


    this.htmlPDF +=`</body></html>`;

   this.download("");
  }


  filupPDFWeek()
  {
    this.htmlPDF  = `<html>
<head>
<style>
table{
  border-collapse: collapse;
}
 td {
    border: 0.5mm solid black;
    margin: 0;
    padding: 2mm;
    font-size: 3mm;
    
}
tr{
  margin: 0;
  padding: 0;
}
.text-bold{
    font-weight: bold;
}
.saut-page
{
    page-break-after: always;
}
.no-borders
{
    border: none;
}
.center-align
{
    text-align: center;
}
</style>
</head>
<body>
`;


    this.htmlPDF  += `
    <h5 style="margin-left: 37%; font-size: 140%;font-weight: bold;margin-top: 25mm;">VOLUME PROGRESS EVALUATION </h5>
    
    <table style="margin-left: 5%; width: 90%;">
        <tr class="no-borders">
            <td class="no-borders" style="width: 20%">Work Code</td>
            <td class="no-borders" style="width: 15%">0000000</td>
            <td class="no-borders" style="width: 15%">Project Code</td>
            <td class="no-borders" style="width: 15%">`+this.project_pdf.project_id+`</td>
            <td class="no-borders" style="width: 35%"></td>
        </tr>
        <tr class="no-borders">
            <td class="no-borders">Name of Project Work</td>
            <td colspan="4" class="no-borders">Name of the job</td>
    
        </tr>
        
    </table>
    
    <table style="margin-left: 5%; width: 90%; margin-top: 10mm;">
      <tr>
        <td style="width: 3%" class="center-align text-bold" rowspan="3">No</td>
        <td style="width: 10%" class="center-align text-bold" rowspan="3">Staff Names</td>
        <td style="width: 7%" class="center-align text-bold" rowspan="3">Total <br> Target</td>
        <td style="width: 10%" class="center-align text-bold" rowspan="3">Total Target <br> vs Details</td>
        <td style="width: 45%" class="center-align text-bold" colspan="12">M1</td>
        <td style="width: 8%" class="center-align text-bold" rowspan="3">Total Finished</td>
        <td style="width: 7%" class="center-align text-bold" rowspan="3">%</td>
        <td style="width: 10%" class="center-align text-bold" rowspan="3">Note</td>
         
      </tr>
      <tr>
        <td colspan="3" class="center-align">M1</td>
        <td colspan="3" class="center-align">M2</td>
        <td colspan="3" class="center-align">M3</td>
        <td colspan="3" class="center-align">M4</td>
      </tr>
      <tr>
        <td class="center-align">Target</td>
        <td class="center-align">Finished</td>
        <td class="center-align">%</td>
        <td class="center-align">Target</td>
        <td class="center-align">Finished</td>
        <td class="center-align">%</td>
        <td class="center-align">Target</td>
        <td class="center-align">Finished</td>
        <td class="center-align">%</td>
        <td class="center-align">Target</td>
        <td class="center-align">Finished</td>
        <td class="center-align">%</td>
      </tr>
      `;



    this.htmlPDF  += `
    </table>`;


    this.htmlPDF +=`</body></html>`;

    this.download("");


  }


  async getProject(idProject: string){
    console.log("ici projet id : "+idProject);
    await this._projectService.getProject(idProject)
      .subscribe( (res) => {

          this.project_pdf=res['data'];



        },
        error => {
          console.log("ERREUR : ",error);

        });
  }




  async download(nom)
  {
    await this._pdfService.generatePdf(this.htmlPDF)
      .subscribe( (res) => {
          console.log(res);

          if (!window.navigator.msSaveOrOpenBlob){
            // BLOB NAVIGATOR
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Progress-evaluation-`+this.project.project_title+`.pdf`);
            document.body.appendChild(link);
            link.click();
          }else{
            // BLOB FOR EXPLORER 11
            const url = window.navigator.msSaveOrOpenBlob(new Blob([res]), `${res['data']}${name}.pdf`);
          }



        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  /* ----------- METHODS ----------- */

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
        let job = await this._jobService.select(m.job_id).toPromise();
        this.workers.push(worker['data'] as Member);
        let e = {
          activity: activity['data'],
          job: job['data']
        };
        this.activities.push(e);
      }
    }
    catch (error) {
      this.errorMessage = error.error.message;
    }

  }

  /* For one member, we group all his m_a_p inside the elements array.It's like a distinct member request */
  async sortElements() {
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
      let total_finished = 0;
      for (let m of this.m_a_p){
        if (s.member_id == m.member_id){
          try{
            let a = await this._activityService.select(m.activity_id).toPromise();
            let j = await this._jobService.select(m.job_id).toPromise();
            this.calculState(m);
            let e = {
              m_a_p: m,
              activity: a['data'] as Activity,
              job: j['data'] as Job,
            };
            sorted_map.push(e);
            total_target += m.target_quantity;
            total_finished += m.finished_quantity;
          }
          catch (error){
            this.errorMessage = error.error.message;
          }
        }
      }
      let element = {
        member: s,
        m_a_ps: sorted_map,
        total_target: total_target,
        total_finished: total_finished
      };
      this.elements.push(element);
    }
  }

  /* Ask to the server side to compute every target quantity, quantity finished, rates and store it in an array per days */
  async loadVolumePerDay(job_id){
    try {
      let v = await this._projectService.volume_per_days_pdf(this.project.project_id,job_id).toPromise();
      this.volume_per_days = v['data'];
      this.volumes_displayed_iterator = 0;
      await this.selectVolumes(0);
    }
    catch(error){
      this.errorMessage = error.message;
    }
  }

  async loadVolumePerWeek(){
    try {
      let v = await this._projectService.volume_per_weeks(this.project.project_id).toPromise();
      this.volume_per_weeks = v['data'];
      this.volumes_displayed_iterator = 0;
      await this.selectVolumes(0);
    }
    catch(error){
      this.errorMessage = error.message;
    }
  }

  selectVolumes(i:number) {
    if (this.is_type_weeks){
      this.selectVolumesWeeks(i);
    }
    else {
      this.selectVolumesDays(i);
    }
  }

  /* Take 7 elements from Monday to Sunday, and store it in the array that is shown on the view */
  selectVolumesDays(i:number) {
    // We convert the volume_per_days array to fit with the ngFor view
    this.ready = false;
    this.volumes_displayed = new Map();
    this.dates_displayed = [];
    for (let volume of this.volume_per_days.slice(i, i+7)){
      this.dates_displayed.push(volume['date']);
      for (let member of volume['elements']){

        //We initialize the map if needed
        if(this.volumes_displayed.get(member['member'].member_id) == null){
          let quantities = this.foundQuantities(member['member'].member_id);
          let o = {
            member: member['member'],
            volumes: [],
            total_finished: quantities[0],
            total_target: quantities[1],
            total_rates: quantities[2]
          };
          this.volumes_displayed.set(member['member'].member_id, o);
        }

        //We store quantity
        let e = {
          target_quantity: member['target_quantity'],
          finished_quantity: member['finished_quantity'],
          finished_rate: member['finished_rate']
        };

        this.volumes_displayed.get(member['member'].member_id)['volumes'].push(e);
      }
    }
    this.ready = true;
  }
  /* Take all elements of a month, and store it in the array that is shown on the view */
  selectVolumesWeeks(i:number) {
    // We convert the volume_per_weeks array to fit with the ngFor view
    this.ready = false;
    this.volumes_displayed = new Map();
    this.dates_displayed = [];
    for (let volume of this.volume_per_weeks[i]['weeks']){
      this.dates_displayed.push(volume['date']);
      for (let member of volume['elements']){

        //We initialize the map if needed
        if(this.volumes_displayed.get(member['member'].member_id) == null){
          let o = {
            member: member['member'],
            volumes: []
          };
          this.volumes_displayed.set(member['member'].member_id, o);
        }
        //We store quantity
        let e = {
          target_quantity: member['target_quantity'],
          finished_quantity: member['finished_quantity'],
          finished_rate: member['finished_rate']
        };

        this.volumes_displayed.get(member['member'].member_id)['volumes'].push(e);
      }
    }
    this.ready = true;
  }

  /* Found the total quantities inside the elements array */
  foundQuantities(member_id){
    for (let e of this.elements){
      if(e['member'].member_id == member_id){
        let total_rates = Math.round(100*e['total_finished']/e['total_target']);
        return [e['total_finished'], e['total_target'], total_rates]
      }
    }
  }

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

  //Load the seven next days
  next(){
    if (this.is_type_weeks){
      if(this.volumes_displayed_iterator < this.volume_per_days.length-1){
        this.volumes_displayed_iterator += 1;
        let i = this.volumes_displayed_iterator;
        this.selectVolumes(i);
      }
    }
    else {
      //We do next only if we don't have the last portion of the array
      if(this.volumes_displayed_iterator <= this.volume_per_days.length-7){
        this.volumes_displayed_iterator += 7;
        let i = this.volumes_displayed_iterator;
        this.selectVolumes(i);
      }
    }
  }

  //Load the seven previous days
  previous(){
    if (this.is_type_weeks){
      if(this.volumes_displayed_iterator > 0){
        this.volumes_displayed_iterator -= 1;
        let i = this.volumes_displayed_iterator;
        this.selectVolumes(i);
      }
    }
    else {
      //We do next only if we don't have the last portion of the array
      if(this.volumes_displayed_iterator != 0){
        this.volumes_displayed_iterator -= 7;
        let i = this.volumes_displayed_iterator;
        this.selectVolumes(i);
      }
    }
  }

  /* Show all activities of the member selected */
  selectMember(member_id){
    if(this.element_selected != null){
      let oldCell = document.getElementById(this.element_selected['member']['member_id']);
      oldCell.className = "";
    }

    /* We search for the right element of the array */
    for (let e of this.elements){
      if(e['member'].member_id == member_id){
        this.element_selected = e;
      }
    }

    let newCell = document.getElementById(member_id);
    newCell.className += "selected";
  }

  /* Calcul if the member activity project is late, on date or something else */
  async calculState(m_a_p){
    let target = new Date(m_a_p.target_date);
    let finished_date = new Date(m_a_p.finished_date);
    let now = new Date();
    let isChanged: boolean = false;


    //The activity is finished
    if (m_a_p.target_quantity == m_a_p.finished_quantity){
      if(m_a_p.evaluation == 'on date' || m_a_p.evaluation == 'finished on date'){
        if(target.getTime()<finished_date.getTime()){
          m_a_p.evaluation = 'finished late';
        }
        else{
          m_a_p.evaluation = 'finished on date';
        }
        isChanged = true;
      }
      else if(m_a_p.evaluation == 'late'){
        m_a_p.evaluation = 'finished late';
        isChanged = true;
      }
    }
    //The activity is still running
    else if (m_a_p.evaluation == 'finished late' || m_a_p.evaluation == 'finished on date'){
      m_a_p.finished_date = new Date();
      m_a_p.finished_date = moment(m_a_p.finished_date).format('Y-MM-D');
      if(target.getTime()<now.getTime()){
        m_a_p.evaluation = 'late';
      }
      else{
        m_a_p.evaluation = 'on date';
      }
      isChanged = true;
    }
    else if (target.getTime()<now.getTime()){
      m_a_p.evaluation = 'late';
      isChanged = true;
    }
    else {
      m_a_p.finished_date = new Date();
      m_a_p.finished_date = moment(m_a_p.finished_date).format('Y-MM-D');
      isChanged = true;
    }

    if (isChanged) {
      await this._memberActivityProjectService.update(m_a_p).toPromise();
    }
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("volume-table");
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
    table = document.getElementById("activity-table");
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
    table = document.getElementById("volume-table");
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

