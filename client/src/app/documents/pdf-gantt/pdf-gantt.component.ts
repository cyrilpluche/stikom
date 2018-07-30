import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import {ProjectService} from "../../objects/project/project.service";
import {MemberActivityProjectService} from "../../objects/member_activity_project/member-activity-project.service";
import {Project} from "../../objects/project/project";
import {DatePipe} from "@angular/common";
import {PdfService} from "../../objects/pdf/pdf.service";

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-gantt',
  templateUrl: './pdf-gantt.component.html',
  styleUrls: ['./pdf-gantt.component.scss']
})
export class PdfGanttComponent implements OnInit {

  idProject:string="3";
  project:Project;
  activities:any[];
  htmlPDF:string;
  jobs:any[]=[];

  constructor(private _projectService:ProjectService,
              private _memberActivityProjectService:MemberActivityProjectService,
              private _pdfService: PdfService) { }

  ngOnInit() {
    this.getProject(this.idProject);


  }

  filupPDF()
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
    font-size: 4.5mm;
    
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

    for(let j=0; j<this.jobs.length; j++)
    {

      let theJob=this.jobs[j];
      console.log("JobId : "+theJob['job_id']);
      let tempActivites:any[]=[];

      //We sore all the activities that are linked to that job

      for(let activitie of this.activities)
      {
        if(activitie['job_id']==theJob['job_id'])
        {
          tempActivites.push(
            activitie
          )
        }

      }
      let tempJobActivity;
      let tempSubActivities:any[]=[];

      for(let activitate of tempActivites)
      {
        if (activitate['activity_id_is_father'] == null)
        {
          tempJobActivity=activitate;
        }else{
          tempSubActivities.push(activitate);
        }
      }

      console.log(tempActivites);

      if(j>0)
      {
        this.htmlPDF  += `<div class="saut-page"></div> `;
      }

    this.htmlPDF  += `
    <h5 style="margin-left: 45%; font-size: 140%;font-weight: bold;margin-top: 25mm;">GANTT CHART</h5>
    
    <table style="margin-left: 10%; width: 80%;">
        <tr class="no-borders">
            <td class="no-borders" style="width: 20%">Work Code</td>
            <td class="no-borders" style="width: 15%">`+theJob['job_id']+`</td>
            <td class="no-borders" style="width: 15%">Project Code</td>
            <td class="no-borders" style="width: 15%">`+this.project.project_id+`</td>
            <td class="no-borders" style="width: 35%"></td>
        </tr>
        <tr class="no-borders">
            <td class="no-borders">Name of Project Work</td>
            <td colspan="4" class="no-borders">`+tempJobActivity['activity_title']+`</td>
    
        </tr>
        
    </table>
    
    <table style="margin-left: 5%; width: 90%; margin-top: 10mm;">
      <tr>
        <td style="width: 5%" class="center-align text-bold">No</td>
        <td style="width: 15%" class="center-align text-bold">Activity</td>
        <td style="width: 10%" class="center-align text-bold">Target Date</td>
        <td style="width: 10%" class="center-align text-bold">Finished Date</td>
        <td style="width: 15%" class="center-align text-bold">Evaluation</td>
        <td style="width: 15%" class="center-align text-bold">Staff Name</td>
        <td style="width: 10%" class="center-align text-bold">Sign</td>
        <td style="width: 20%" class="center-align text-bold">Note</td>
         
      </tr>
      `;

      for(let activity of tempSubActivities) {

        this.htmlPDF += ` 
      <tr>
        <td class="center-align">`+activity['activity_id']+`</td>
        <td>`+activity['activity_title']+`</td>
        <td class="center-align">`+new DatePipe('en-US').transform(activity['target_date'], 'dd-MM-yyyy')+`</td>
        <td class="center-align">`+new DatePipe('en-US').transform(activity['finished_date'], 'dd-MM-yyyy')+`</td>
        <td class="center-align">`+activity['evaluation']+`</td>
        <td>Staff Names</td>
        <td>`+activity['sign']+`</td>
        <td>`+activity['note']+`</td>
         
      </tr>`;

      }

      this.htmlPDF  += `
    </table>`;


    }


    this.htmlPDF  += `
</body>
</html>`;

    this.download("Gantt-charts.pdf");
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
            link.setAttribute('download', nom);
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

  fillUpJobTable()
  {
    for(let activitie of this.activities)
    {
      let bool:boolean=false;
      for(let i=0; i<this.jobs.length; i++)
      {
        if(this.jobs[i]['job_id'] == activitie['job_id'])
        {
          bool=true;
        }

      }
      if(bool==false)
      {
        this.jobs.push({
          job_id:activitie['job_id'],
        })
      }

    }
    console.log(this.jobs);


    this.filupPDF();


  }



  async selectAllFromProject(idProject: string){
    console.log("ici : "+idProject);
    await this._memberActivityProjectService.selectAllFromProjectFull(idProject)
      .subscribe( (res) => {
        console.log(res['data']);
          this.activities=res['data'];
          this.fillUpJobTable();

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getProject(idProject: string){
    console.log("ici projet id : "+idProject);
    await this._projectService.getProject(idProject)
      .subscribe( (res) => {

          this.project=res['data'];
          this.selectAllFromProject(idProject);


        },
        error => {
          console.log("ERREUR : ",error);

        });
  }







  /*
  download() {

    var columns = [{title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"}
    ];
    var rows = [
      ["Work Code", "0301000"+this.project.project_code, "Project Code", this.project.project_work_code],
      ["Name of Project", this.project.project_title, "", ""],
    ];

    var doc = new jsPDF('l', 'pt');

    doc.autoTableSetDefaults({
      margin: {top: 30},
      addPageContent: function(data) {
        doc.setFontSize(14);
        doc.text('GANTT CHART', 380, 50);
      }
    });

    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 0
      },
      showHeader: 'never',
      startY: 60,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);

      },
      drawCell: function (cell, data) {
        // Rowspan

      }
    });



    var columns2 = [{title: "No", dataKey: "0"},
      {title: "Activity", dataKey: "1"},
      {title: "Target Date", dataKey: "2"},
      {title: "Finished Date", dataKey: "3"},
      {title: "Evaluation", dataKey: "4"},
      {title: "Staff Name", dataKey: "5"},
      {title: "Sign", dataKey: "6"},
      {title: "Note", dataKey: "7"}
    ];

    var rows2=[];
    for (let i=0; i<this.activities.length; i++)
    {
      rows2.push([this.activities[i]["activity_id"], this.activities[i]["activity_title"], new DatePipe('en-US').transform(this.activities[i]["target_date"], 'dd-MM-yyyy'), new DatePipe('en-US').transform(this.activities[i]["finished_date"], 'dd-MM-yyyy'), this.activities[i]["evaluation"], "Staff 1", this.activities[i]["sign"], this.activities[i]["note"]])
    }

    console.log(rows2);





    doc.autoTable(columns2, rows2, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1
      },
      showHeader: 'everyPage',
      startY: 120,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);

      },
      drawCell: function (cell, data) {
        // Rowspan

      }
    });


    doc.save("Gantt-charts.pdf");
  }


  async selectAllFromProject(idProject: string){
    console.log("ici : "+idProject);
    await this._memberActivityProjectService.selectAllFromProject(idProject)
      .subscribe( (res) => {
          console.log(res['data']);
          //this.res=res['data'];
        this.activities=res['data'];

        console.log("res :");
        console.log(this.project);
        console.log(this.activities);
        this.download();
        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getProject(idProject: string){
    console.log("ici projet id : "+idProject);
    await this._projectService.getProject(idProject)
      .subscribe( (res) => {
          console.log(res['data']);
          //this.res=res['data'];
        this.project=res['data'];
          this.selectAllFromProject(idProject);


        },
        error => {
          console.log("ERREUR : ",error);

        });
  }**/

}
