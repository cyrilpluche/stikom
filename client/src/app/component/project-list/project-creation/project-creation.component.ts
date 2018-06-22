import { Component, OnInit } from '@angular/core';
import { Sop } from "../../../objects/sop/sop";

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  stepSelected: number;

  newSop: Sop;
  newTitle: string = "";


  constructor() { }

  ngOnInit() {
    this.stepSelected = 0 ;
  }

  onSubmit() {

  }

  changeStep(next) {
    if (next) {
      this.stepSelected += 1;
    }
    else {
      this.stepSelected -= 1;
    }
  }

}
