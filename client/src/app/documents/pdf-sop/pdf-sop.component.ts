import { Component, OnInit } from '@angular/core';
import * as jsPdf from 'jspdf';
import 'jspdf-autotable';
import {OrganisationService} from "../../objects/organisation/organisation.service";
import {BranchService} from "../../objects/branch/branch.service";
import {DepartmentService} from "../../objects/department/department.service";
import {SubDepartmentService} from "../../objects/sub_department/sub-department.service";
import {SopService} from "../../objects/sop/sop.service";
import {DatePipe} from "@angular/common";
import {ProjectService} from "../../objects/project/project.service";

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-sop',
  templateUrl: './pdf-sop.component.html',
  styleUrls: ['./pdf-sop.component.scss']
})
export class PdfSopComponent implements OnInit {

  sop_id:string="";
  project_id:string="1";


  organisation_id:string;
  organisation_name:string="";

  branch_id:string;
  branch_name:string="";

  department_id:string;
  department_name:string="";

  sub_department_id:string;
  sub_department_name:string="";

  sop_title:string="NA";
  sop_creation:Date=new Date();
  sop_revision:Date=new Date();
  sop_published:Date=new Date();
  sop_approvment:string="NA";
  sop_rules:string="NA";
  sop_warning:string="NA";
  sop_staff_qualification:string="NA";
  sop_tools:string="NA";
  sop_type_reports:string="NA";
  sop_objectives:string="NA";

  units:[string]=[""];
  activities = [];






  constructor(private _organisationService: OrganisationService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService,
              private _sopService: SopService,
              private _projectService: ProjectService) {
  }

  ngOnInit() {
    if(this.sop_id === "" && this.project_id === "") {
      console.log("ERREUR : Aucune donnée envoyé au componnent de création du PDF.")
    }
    else if(this.sop_id !== ""){
      this.getSOP(this.sop_id);
      setTimeout(() => {
        console.log(this.sop_title);
        //console.log("date de creation : "+ );
        console.log("fin");
        //this.download(this.sop_title);

      }, 1000);



     //let value = this.sop_creation.transform(value, 'dd/MM/yyyy');

    }else if(this.project_id !== ""){
      this.getProject(this.project_id);
      setTimeout(() => {
        console.log(this.sop_title);
        //console.log("date de creation : "+ );
        console.log("fin");
        this.download(this.sop_title);

      }, 2000);
    }
  }

  download(sop_title:string) {

    let columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"}
    ];
    let rows = [
      ["", this.organisation_name, "Creation Date",new DatePipe('en-US').transform(this.sop_creation, 'dd-MM-yyyy')],
      ["", this.branch_name, "Revision Date", new DatePipe('en-US').transform(this.sop_revision, 'dd-MM-yyyy')],
      ["", this.department_name, "Published Date", new DatePipe('en-US').transform(this.sop_published, 'dd-MM-yyyy')],
      ["",this.sub_department_name, "Approved By", this.sop_approvment],
      ["","","",""]
    ];

    let doc = new jsPDF('l', 'pt');


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 60,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
        if (row.index === 4) {
          doc.setTextColor(0,0,0);
          doc.rect(data.settings.margin.left, row.y, data.table.width, 40, 'S');
          doc.autoTableText(sop_title, data.settings.margin.left + data.table.width / 2, row.y + row.height, {
            halign: 'center',
            valign: 'middle'
          });
          data.cursor.y += 60;
        }
      },
      drawCell: function (cell, data) {
        // Rowspan
        if (data.row.index === 4) {
          if (data.column.dataKey === '0') {
            if (data.row.index % 5 === 0) {
              doc.rect(cell.x, cell.y, data.table.width, cell.height * 5, 'S');
              doc.autoTableText("Logo", cell.x + cell.width / 2, cell.y + cell.height * 5 / 2, {
                halign: 'center',
                valign: 'middle'
              });
            }
            return false;
          }
          return false;
        }
      }
    });

    columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"}
    ];
    rows = [
      ["Base Rule/Regulation","", "Staff Qualifications"],
      [this.sop_rules,"", this.sop_staff_qualification],
      ["Related Working Units","", "Supporting tools"],
      ["No units","", this.sop_tools],
      ["Warning","", "Types of Forms and Reports"],
      [this.sop_warning,"", this.sop_type_reports],
      ["","","",""]
    ];

    let sopObjectives:string=this.sop_objectives;

    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 210,
      drawRow: function (row2, data2) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
        if (row2.index === 6) {
          doc.setTextColor(0,0,0);
          doc.rect(data2.settings.margin.left, row2.y, data2.table.width, 40, 'S');
          doc.autoTableText(sopObjectives, data2.settings.margin.left + data2.table.width / 2, row2.y + row2.height, {
            halign: 'left',
            valign: 'middle'
          });
          data2.cursor.y += 60;
        }
      },
      drawCell: function (cell2, data2) {
        // Rowspan
        if (data2.row.index === 6) {
          if (data2.column.dataKey === '1') {
            if (data2.row.index % 6 === 0 && data2.row.index !== 6) {
              doc.rect(cell2.x, cell2.y,45, cell2.height * 6, 'S');
              doc.autoTableText("", cell2.x + cell2.width/2 , cell2.y + cell2.height * 6 / 2, {
                halign: 'left',
                valign: 'middle'
              });
            }
            return false;
          }
          return false;
        }

      }
    });

    doc.addPage();

    columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"},
      {title: "4", dataKey: "4"},
      {title: "5", dataKey: "5"},
      {title: "6", dataKey: "6"},
      {title: "7", dataKey: "7"},
      {title: "8", dataKey: "8"}
    ];
    rows = [
      ["No","Activity", this.units[0], this.units[1],this.units[2],"Unit 4","Supporting \n Materials/input","Duration",
        "Output"],
      [this.activities[0][0],this.activities[0][1], this.activities[0][5],this.activities[0][6],this.activities[0][7],
        "schema",this.activities[0][2],this.activities[0][3],this.activities[0][4]],
      [this.activities[1][0],this.activities[1][1], this.activities[1][5],this.activities[1][6],this.activities[1][7],
        "schema",this.activities[1][2],this.activities[1][3],this.activities[1][4]],
      [this.activities[2][0],this.activities[2][1], this.activities[2][5],this.activities[2][6],this.activities[2][7],
        "schema",this.activities[2][2],this.activities[2][3],this.activities[2][4]],
      [this.activities[3][0],this.activities[3][1], this.activities[3][5],this.activities[3][6],this.activities[3][7],
        "schema",this.activities[3][2],this.activities[3][3],this.activities[3][4]],

    ];


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        overflow: 'linebreak',
        lineColor: 0,
        lineWidth: 1,
        columnWidth: [10,40,30,30,30,30,30,30,30]},
      showHeader: 'never',
      startY: 10,
      drawRow: function (row2, data2) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
      },
      drawCell: function (cell2, data2) {
        // Rowspan

      }
    });



    doc.save("sop.pdf");




  }

  async getAllSopFromProject(idProject: string){
    await this._projectService.selectAllFromProject(idProject)
      .subscribe( (res) => {
          console.log(res['data']);

          // Take all the sop informations and preparing them for display in the var
          this.sop_creation=new Date(res['data'][0]['sop_creation']);
          this.sop_revision=new Date(res['data'][0]['sop_revision']);
          this.sop_published=new Date(res['data'][0]['sop_published']);
          this.sop_approvment=res['data'][0]['sop_approvment'];
          this.sop_rules=res['data'][0]['sop_rules'];
          this.sop_warning=res['data'][0]['sop_warning'];
          this.sop_staff_qualification=res['data'][0]['sop_staff_qualification'];
          this.sop_tools=res['data'][0]['sop_tools'];
          this.sop_type_reports=res['data'][0]['sop_type_reports'];
          this.sop_objectives=res['data'][0]['sop_objectives'];
          this.sop_title="STANDARD OPERATION PROCEDURE \n "+res['data'][0]['sop_title'];

          //creating a table of the units working for this project
        let counter=0;
        for (let job of res['data'])
        {
          for (let activitie of job['activities'])
          {
            for (let unit of activitie['activity_unit'])
            {
               if(!this.isInUnitTable(unit))
               {
                 console.log(unit);
                 if(counter==0)
                 {
                   this.units[0]=unit;
                 }else{
                   this.units.push(unit);
                 }


               }
              counter=counter+1;
            }
          }
        }
          console.log("Tableau final 1 : "+this.units);
        //End unit tab filling up
          let counter2=0;
          console.log("Tableau des jobs :");
          console.log(res['data']);
          for (let job of res['data'])
          {
            console.log("Job "+counter2+" :");
            console.log(job);
            for (let activitie of job['activities'])
            {
              console.log("Activité :");
              console.log(activitie);
              if (activitie['activity_id_is_father']==null){
                console.log("Est père car atribue est : ");
                console.log(activitie['activity_id_is_father']);

               let temp:string[]=[];
               temp.push(activitie['activity_id']);
               temp.push(activitie['activity_title']+ " : "+activitie['activity_description']);
                temp.push(activitie['activity_type']);
                temp.push(activitie['activity_duration']+" "+activitie['activity_type_duration']);
                temp.push(activitie['activity_type_output']);
               for(let i of this.units)
               {
                 temp.push("");
               }
               if ( this.activities[0] =="")
               {
                 this.activities[0]=temp;
               }else{
                 this.activities.push(temp);
               }

                console.log("Is father :");
                console.log(temp);

              }else{
                let pointeur=0;
                console.log("Père recherché :");
                console.log(activitie['activity_id_is_father']);
                console.log("dans le tableau d'acitivté suivant :");
                console.log(this.activities);
                for(let j=0; j<this.activities.length; j++)
                {
                  console.log("j :");
                  console.log(this.activities[j]);
                  console.log("j[0] :");
                  console.log(this.activities[j][0]);
                  if (this.activities[j][0]===activitie['activity_id_is_father'])
                  {

                    console.log("J'y suis père trouvé");
                    if(activitie['activity_unit']!==null){
                      let points=0;
                      let res;
                      for(let k=0; k<this.units.length; k++)
                      {
                        console.log("activitie['activity_unit'][0] :");
                        console.log(activitie['activity_unit'][0]);
                        if (this.units[k]==activitie['activity_unit'][0])
                        {
                          res=points;
                        }
                        points=points+1;

                      }
                      if (res !== null)
                      {
                        this.activities[pointeur][res+5]=activitie['activity_title']+ " : "+activitie['activity_description'];
                      }

                    }

                  }
                  pointeur=pointeur+1;
                }
              }


            }
          }

        console.log("Tableau final 2 : ");
          console.log(this.activities);



        },//end subscribe
        error => {
          console.log("ERREUR : ",error);

        });
  }


  async getOrganisation(idSubDepartment: string){
    await this._organisationService.selectSchema(idSubDepartment)
      .subscribe( (res) => {
          console.log(res['data']);
          this.sub_department_name=res['data'][0]['sub_department_name'];
          this.department_name=res['data'][0]['department_name'];
          this.branch_name=res['data'][0]['branch_name'];
          this.organisation_name=res['data'][0]['organisation_name'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getSOP(idSop: string){
    console.log("ici : "+idSop);
    await this._sopService.getSop(idSop)
      .subscribe( (res) => {
          console.log(res['data']);
          //this.res=res['data'];
          this.sop_creation=new Date(res['data']['sop_creation']);
          this.sop_revision=new Date(res['data']['sop_revision']);
          this.sop_published=new Date(res['data']['sop_published']);
          this.sop_approvment=res['data']['sop_approvment'];
          this.sop_rules=res['data']['sop_rules'];
          this.sop_warning=res['data']['sop_warning'];
          this.sop_staff_qualification=res['data']['sop_staff_qualification'];
          this.sop_tools=res['data']['sop_tools'];
          this.sop_type_reports=res['data']['sop_type_reports'];
          this.sop_objectives=res['data']['sop_objectives'];
          this.sop_title="STANDARD OPERATION PROCEDURE \n "+res['data']['sop_title'];
          console.log(res['data']['sop_title']);



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


          this.getOrganisation(res['data']['sub_department_id']);
          this.getAllSopFromProject(idProject);






        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  isInUnitTable(value:string)
  {
    let exist=false;
    for (let pin of this.units)
    {
      if(pin==value && !exist)
      {
        exist=true;
      }
    }
    return exist;
  }


}
