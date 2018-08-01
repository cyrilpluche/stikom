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
import {PdfService} from "../../objects/pdf/pdf.service";

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-sop',
  templateUrl: './pdf-sop.component.html',
  styleUrls: ['./pdf-sop.component.scss']
})
export class PdfSopComponent implements OnInit {

  sop_id:string;
  project_id:string;


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


  htmlPDF:string;

  display_pdf_project:boolean=false;
  display_pdf_sop:boolean=false;

  sop_pdf_button:boolean=false;
  project_pdf_button:boolean=false;






  constructor(private _organisationService: OrganisationService,
              private _branchService: BranchService,
              private _departmentService: DepartmentService,
              private _subDepartmentService: SubDepartmentService,
              private _sopService: SopService,
              private _projectService: ProjectService,
              private _pdfService: PdfService) {
  }


  async ngOnInit() {
    this.project_id=localStorage.getItem("Project_id");
    this.sop_id=localStorage.getItem("Sop_id");

    if(this.sop_id === null && this.project_id === null) {
      console.log("ERROR : No data send to the PDF.")
    }
    else if(this.sop_id !== null){
      this.sop_pdf_button=true;
      await this.getSOP(this.sop_id);
      setTimeout(() => {
        this.filupPDF();
        this.display_pdf_sop=true;
      }, 1000);


    }else if(this.project_id !== null){
      this.project_pdf_button=true;
      await this.getProject(this.project_id);
      setTimeout(() => {
        this.filupPDF();
        this.display_pdf_project=true;

      }, 2000);
    }
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
</style>
</head>
<body>
  <table style="width: 90%; margin-left: 5%;margin-top: 15mm;"> 
    <tr>
      <td style="width: 20%" rowspan="5"> <img src="images/logo-stikom.png" style="width: 20mm;margin-left: 20mm;"></td>
      <td style="width: 40%"><strong>`+this.organisation_name+`</strong></td>
      <td style="width: 20%"><strong>SOP Number</strong></td>
      <td style="width: 20%">`+this.sop_id+`</td>
    </tr>
    <tr>
      <td><strong>`+this.branch_name+`</strong></td>
      <td><strong>Creation Date</strong></td>
      <td>`+new DatePipe('en-US').transform(this.sop_creation, 'dd-MM-yyyy')+`</td>
    </tr>
    <tr>
      <td><strong>`+this.department_name+`</strong></td>
      <td><strong>Revision Date</strong></td>
      <td>`+new DatePipe('en-US').transform(this.sop_revision, 'dd-MM-yyyy')+`</td>
    </tr>
    <tr>
      <td><strong>`+this.sub_department_name+`</strong></td>
      <td><strong>Published Date</strong></td>
      <td>`+new DatePipe('en-US').transform(this.sop_published, 'dd-MM-yyyy')+`</td>
    </tr>
    <tr>
      <td></td>
      <td><strong>Approved by</strong></td>
      <td>`+this.sop_approvment+`</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: center;font-size: 6mm; padding: 2mm;line-height: 8mm"><strong>STANDARD OPERATIONAL PROCEDURE <br> `+this.sop_title+`</strong></td>
    </tr>
  </table>
  
  <table  style="width: 90%; margin-left: 5%;margin-top: 8mm;">
    <tr>
      <td style="width: 45%"><strong>Base Rule/Regulation</strong></td>
      <td style="width: 10%" rowspan="6"></td>
      <td style="width: 45%"><strong>Staff Qualification</strong></td>
    </tr>
    <tr>
      <td>`+this.sop_rules+`</td>
      <td>`+this.sop_staff_qualification+`</td>
    </tr>
    <tr>
      <td><strong>Related Working Units</strong></td>
      <td><strong>Supporting Tools</strong></td>
    </tr>
     <tr>
      <td>to add</td>
      <td>`+this.sop_tools+`</td>
    </tr>
    <tr>
      <td><strong>Warning</strong></td>
      <td><strong>Types of Forms and Reports</strong></td>
    </tr>
    <tr>
      <td>`+this.sop_warning+`</td>
      <td>`+this.sop_type_reports+`</td>
    </tr>
    <tr>
    <td colspan="3" style="padding-top: 10mm; line-height: 8mm; padding-left: 30mm;"><strong>Objectives : </strong><br> `+this.sop_objectives+`<br> </td>
  </tr>
  
  </table>

  <div class="saut-page">
  
  </div>
  
  <table style="width: 90%; margin-left: 5%;margin-top: 15mm;"> 
    <tr>
       <td style="width: 4%" rowspan="2"><strong>No</strong></td>
       <td style="width: 18%" rowspan="2"><strong>Activity</strong></td>`;

for (let i=0;i<this.units.length;i++)
{
  if(i<4)
  {
    this.htmlPDF  +=` <td style="width: 12%" rowspan="2"><strong>`+this.units[i]+`</strong></td>`;
  }

}

this.htmlPDF  +=`
       
       <td style="width: 30%" colspan="3"><strong>Quality Standard</strong></td>
       
    </tr>
    <tr>
        <td style="width: 10%; font-size: 3.5mm"><strong>Supporting<br>Materials/Inputs</strong></td>
        <td style="width: 10%; font-size: 3.5mm"><strong>Duration</strong></td>
        <td style="width: 10%; font-size: 3.5mm"><strong>Output</strong></td>
    </tr>`;

for (let i=0;i<this.activities.length;i++)
{
  this.htmlPDF += ` <tr>`;
  for (let j=0;j<this.activities[i].length;j++) {
    if(j<9) //Have just the 4 first unit
    {
      this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
      if(j==1) //Jump because of the activities table disposition put the unit at the end
      {
        j=4;
      }
    }

  }
  for (let j=2;j<5;j++) { //add the quality standards collum because of the jump in the last for
    this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
  }

  this.htmlPDF += ` </tr>`;
}

this.htmlPDF  +=`
  </table>`

  if(this.units.length>3) // if more than 4 units
  {
    this.htmlPDF  +=`<div class="saut-page">

      </div>

      <table style="width: 90%; margin-left: 5%;margin-top: 15mm;">
  <tr>
    <td style="width: 4%" rowspan="2"><strong>No</strong></td>
  <td style="width: 18%" rowspan="2"><strong>Activity</strong></td>`;

for (let i=0;i<this.units.length;i++)
{
  if(i>3 && i<8)
  {
    this.htmlPDF  +=` <td style="width: 12%" rowspan="2"><strong>`+this.units[i]+`</strong></td>`;
  }

}

this.htmlPDF  +=`

  <td style="width: 30%" colspan="3"><strong>Quality Standard</strong></td>

  </tr>
  <tr>
  <td style="width: 10%; font-size: 3.5mm"><strong>Supporting<br>Materials/Inputs</strong></td>
  <td style="width: 10%; font-size: 3.5mm"><strong>Duration</strong></td>
  <td style="width: 10%; font-size: 3.5mm"><strong>Output</strong></td>
  </tr>`;

    for (let i=0;i<this.activities.length;i++)
    {
      this.htmlPDF += ` <tr>`;
      for (let j=0;j<this.activities[i].length;j++) {
        if(j<5 || (j>8 && j<13)) //Have just the 4 first unit
        {
          this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
          if(j==1) //Jump because of the activities table disposition put the unit at the end
          {
            j=4;
          }
        }

      }
      for (let j=2;j<5;j++) { //add the quality standards collum because of the jump in the last for
        this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
      }

      this.htmlPDF += ` </tr>`;
    }

    this.htmlPDF  +=`
  </table>`;

  }


    if(this.units.length>7) // if more than 8 units
    {
      this.htmlPDF  +=`<div class="saut-page">

      </div>

      <table style="width: 90%; margin-left: 5%;margin-top: 15mm;">
  <tr>
    <td style="width: 4%" rowspan="2"><strong>No</strong></td>
  <td style="width: 18%" rowspan="2"><strong>Activity</strong></td>`;

      for (let i=0;i<this.units.length;i++)
      {
        if(i>7 && i<12)
        {
          this.htmlPDF  +=` <td style="width: 12%" rowspan="2"><strong>`+this.units[i]+`</strong></td>`;
        }

      }

      this.htmlPDF  +=`

  <td style="width: 30%" colspan="3"><strong>Quality Standard</strong></td>

  </tr>
  <tr>
  <td style="width: 10%; font-size: 3.5mm"><strong>Supporting<br>Materials/Inputs</strong></td>
  <td style="width: 10%; font-size: 3.5mm"><strong>Duration</strong></td>
  <td style="width: 10%; font-size: 3.5mm"><strong>Output</strong></td>
  </tr>`;

      for (let i=0;i<this.activities.length;i++)
      {
        this.htmlPDF += ` <tr>`;
        for (let j=0;j<this.activities[i].length;j++) {
          if(j<5 || (j>12 && j<17)) //Have just the 4 first unit
          {
            this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
            if(j==1) //Jump because of the activities table disposition put the unit at the end
            {
              j=4;
            }
          }

        }
        for (let j=2;j<5;j++) { //add the quality standards collum because of the jump in the last for
          this.htmlPDF += ` <td>`+this.activities[i][j]+`</td>`;
        }

        this.htmlPDF += ` </tr>`;
      }

      this.htmlPDF  +=`
  </table>`;

    }

  this.htmlPDF +=`
  
</body>

</html>`;
  }

  async download()
  {
    await this._pdfService.generatePdf(this.htmlPDF)
      .subscribe( (res) => {
          if (!window.navigator.msSaveOrOpenBlob){
            // BLOB NAVIGATOR
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `sop-`+this.sop_title+`.pdf`);
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


  async getAllSopFromProject(idProject: string){
    await this._projectService.selectAllFromProject(idProject)
      .subscribe( (res) => {

          // Take all the sop informations and preparing them for display in the var
          this.sop_id=res['data'][0]['sop_id'];
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
          this.sop_title=res['data'][0]['sop_title'];

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
          //End unit tab filling up
          let counter2=0;
          for (let job of res['data'])
          {
            for (let activitie of job['activities'])
            {
              if (activitie['activity_id_is_father']==null){

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

              }else{
                let pointeur=0;
                for(let j=0; j<this.activities.length; j++)
                {
                  if (this.activities[j][0]===activitie['activity_id_is_father'])
                  {

                    if(activitie['activity_unit']!==null){
                      let points=0;
                      let res;
                      for(let k=0; k<this.units.length; k++)
                      {
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
        },//end subscribe
        error => {
          console.log("ERREUR : ",error);

        });
  }


  async getAllSopFromProject2(){
    await this._projectService.selectAllFromSOP(this.sop_id)
      .subscribe( (res) => {

          // Take all the sop informations and preparing them for display in the var
          this.sop_id=res['data']['sop_id'];
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
          this.sop_title=res['data']['sop_title'];

          //creating a table of the units working for this project
          let counter=0;
          for (let job of res['data']['jobs'])
          {
            for (let activitie of job['activities'])
            {
              for (let unit of activitie['activity_unit'])
              {
                if(!this.isInUnitTable(unit))
                {
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
          //End unit tab filling up
          let counter2=0;
          for (let job of res['data']['jobs'])
          {

            for (let activitie of job['activities'])
            {

              if (activitie['activity_id_is_father']==null){

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


              }else{
                let pointeur=0;
                for(let j=0; j<this.activities.length; j++)
                {
                  if (this.activities[j][0]===activitie['activity_id_is_father'])
                  {

                    if(activitie['activity_unit']!==null){
                      let points=0;
                      let res;
                      for(let k=0; k<this.units.length; k++)
                      {
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

        },//end subscribe
        error => {
          console.log("ERREUR : ",error);

        });
  }


  async getOrganisation(idSubDepartment: string){
    await this._organisationService.selectSchema(idSubDepartment)
      .subscribe( (res) => {
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
    await this._sopService.getSop(idSop)
      .subscribe( (res) => {
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
          this.sop_title=res['data']['sop_title'];

          this.getAllSopFromProject2();



        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getProject(idProject: string){
    await this._projectService.getProject(idProject)
      .subscribe( (res) => {
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
