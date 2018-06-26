import { Component, OnInit } from '@angular/core';
import { SopService } from "../../objects/sop/sop.service";
import { Sop } from "../../objects/sop/sop";

@Component({
  selector: 'app-sop-list',
  templateUrl: './sop-list.component.html',
  styleUrls: ['./sop-list.component.css']
})
export class SopListComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  sopList: [Sop];

  constructor(private _sopService: SopService) { }



  ngOnInit() {
    this.getAllSop();
  }

  getAllSop(){
    this._sopService.selectAll()
      .subscribe( (res) => {
        console.log(res['data']);
        this.sopList=res['data'];
        },
        error => {
          console.log("ERREUR : ",error);
        });
  }

}
