import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import {ProjectService} from "../../objects/project/project.service";
import {MemberActivityProjectService} from "../../objects/member_activity_project/member-activity-project.service";
import {Project} from "../../objects/project/project";
import {DatePipe} from "@angular/common";

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-gantt',
  templateUrl: './pdf-gantt.component.html',
  styleUrls: ['./pdf-gantt.component.scss']
})
export class PdfGanttComponent implements OnInit {

  idProject:string="1";
  project:Project;
  activities:any[];

  constructor(private _projectService:ProjectService,
              private _memberActivityProjectService:MemberActivityProjectService) { }

  ngOnInit() {
    this.getProject(this.idProject);
    // this.download();
  }
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
      /*
    var rows2 = [
      ["1", "Step I Process", "", "", "", "Staff 1", "", ""],
      ["2", "Step II Process", "", "", "", "Staff 1, Staff 2", "", ""],
      ["3", "Step III Process", "", "", "", "Staff 1", "", ""],
      ["4", "Step IV Process", "", "", "", "Staff 1", "", ""],
      ["5", "Step V Process", "", "", "", "Staff 1", "", ""],
      ["6", "Step VI Process", "", "", "", "Staff 1", "", ""],
      ["7", "Step VII Process", "", "", "", "Staff 1", "", ""],
      ["8", "Step VIII Process", "", "", "", "Staff 1", "", ""],
      ["9", "Step IX Process", "", "", "", "Staff 1", "", ""],
      ["1", "Step X Process", "", "", "", "Staff 1", "", ""],
    ];*/




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
  }

}
