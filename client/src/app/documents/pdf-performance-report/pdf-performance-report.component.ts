import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import {ProjectService} from "../../objects/project/project.service";
import {MemberActivityProjectService} from "../../objects/member_activity_project/member-activity-project.service";
import {Project} from "../../objects/project/project";
import {DatePipe} from "@angular/common";
import {PdfService} from "../../objects/pdf/pdf.service";
import {MemberService} from "../../objects/member/member.service";

@Component({
  selector: 'app-pdf-performance-report',
  templateUrl: './pdf-performance-report.component.html',
  styleUrls: ['./pdf-performance-report.component.scss']
})
export class PdfPerformanceReportComponent implements OnInit {

  errorMessage: string = "";
  idProject:string="3";
  project:Project;
  activities:any[];
  htmlPDF:string;
  jobs:any[]=[];

  name:string="";

  staffActivities:any[]=[];

  constructor(private _projectService:ProjectService,
              private _memberActivityProjectService:MemberActivityProjectService,
              private _pdfService: PdfService,
              private _memberService: MemberService) { }

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

    for(let j=0; j<this.staffActivities.length; j++)
    {

      let performance = "99%";

      if(j>0)
      {
        this.htmlPDF  += `<div class="saut-page"></div> `;
      }

      this.htmlPDF  += `
    <h5 style="margin-left: 37%; font-size: 140%;font-weight: bold;margin-top: 25mm;">STAFF PERFORMANCE REPORT</h5>
    
    <table style="margin-left: 10%; width: 80%;">
        <tr class="no-borders">
            <td class="no-borders" style="width: 20%">Staff Name : `+this.staffActivities[j]['member_name']+`</td>
        </tr>
    </table>
    
    <table style="margin-left: 5%; width: 90%; margin-top: 10mm;">
      <tr>
        <td class="center-align text-bold" rowspan="2">No</td>
        <td class="center-align text-bold" rowspan="2">WORK PROJECT</td>
        <td class="center-align text-bold" colspan="4">TARGET</td>
        <td class="center-align text-bold" colspan="2">REALISATION</td>
        <td class="center-align text-bold" rowspan="2">PERFORMANCE<br>VALUE</td>
      </tr>
      <tr>
        <td colspan="2">OUTPUT QUANTITY</td>
        <td colspan="2">DURATION</td>
        <td class="center-align text-bold" colspan="2">OUTPUT QUANTITY</td>
      </tr>
      <tr>
        <td class="center-align" style="width: 5%">(1)</td>
        <td class="center-align" style="width: 40%">(2)</td>
        <td class="center-align" style="width: 5%">(3)</td>
        <td class="center-align" style="width: 10%">(4)</td>
        <td class="center-align" style="width: 5%">(5)</td>
        <td class="center-align" style="width: 10%">(6)</td>
        <td class="center-align" style="width: 5%">(7)</td>
        <td class="center-align" style="width: 10%">(8)</td>
        <td class="center-align" style="width: 10%">(11)</td>
      </tr>
      `;

      for(let activity of this.staffActivities[j]['staff_activities']) {

        this.htmlPDF += `
      <tr>
        <td class="center-align">`+activity['activity_id']+`</td>
        <td>`+activity['activity_title']+`</td>
        <td class="center-align">`+activity['target_quantity']+`</td>
        <td class="center-align">`+activity['activity_type_output']+`</td>
        <td class="center-align">`+activity['activity_duration']+`</td>
        <td class="center-align">`+activity['activity_type_duration']+`</td>
         <td class="center-align">`+activity['finished_quantity']+`</td>
        <td class="center-align">`+activity['activity_type_output']+`</td>
        <td class="center-align">`+performance+`</td>


      </tr>`;

      }

      this.htmlPDF  += `
    </table>`;


    }


    this.htmlPDF  += `
</body>
</html>`;

    this.download("Staff-Performance-Report.pdf");
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

  async fillUpJobTable()
  {
    for(let activitie of this.activities)
    {
      let actualStaff = activitie['member_id'];
      let bool:boolean=false;
      for(let i=0; i<this.staffActivities.length; i++)
      {
        if(this.staffActivities[i]['member_id'] == actualStaff)
        {
          bool=true;
        }

      }
      if(bool==false)
      {
        this.name==""
        await this.getMember(actualStaff);
        let tmp_activites=[];
        for(let activitie2 of this.activities)
        {
          if(activitie2['member_id'] == actualStaff)
          {
            tmp_activites.push(activitie2);

          }
        }
        this.staffActivities.push({
          staff_activities:tmp_activites,
          member_id:actualStaff,
          member_name:this.name
        })
      }

    }
    console.log(this.staffActivities);


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

  async getMember(idMember: string){
    try {
      let n = await this._memberService.select(idMember).toPromise();
      this.name = n['data']['member_first_name']+" "+n['data']['member_name'];
    }
    catch (error){
      this.errorMessage = error.message;
    }
  }





}
