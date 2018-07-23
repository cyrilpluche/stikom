import { Component, OnInit } from '@angular/core';
import {SopService} from "../../../objects/sop/sop.service";
import {DatePipe} from "@angular/common";
import {UnitService} from "../../../objects/unit/unit.service";

@Component({
  selector: 'app-sop',
  templateUrl: './sop.component.html',
  styleUrls: ['./sop.component.css']
})
export class SopComponent implements OnInit {

  sop_id:string="";
  project_id:string="1";

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

  constructor( private _sopService: SopService,
               private _unitService: UnitService) { }

  ngOnInit() {

    this.sop_id=localStorage.getItem("Sop_id");
    //localStorage.removeItem("Sop_id");

    this.getSOP(this.sop_id);
    setTimeout(() => {
      console.log(this.sop_title);
      //console.log("date de creation : "+ );
      console.log("fin");
      //this.download(this.sop_title);

    }, 400);

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
          this.getUnits(this.sop_id);



        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getUnits(idSop: string){
    console.log("ici : "+idSop);
    await this._unitService.selectAllFromSop(idSop)
      .subscribe( (res) => {
          console.log(res['data']);
          this.units=res['data'];
          //this.res=res['data']

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

}
