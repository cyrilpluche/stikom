import { Component, OnInit } from '@angular/core';
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-sop-creation',
  templateUrl: './sop-creation.component.html',
  styleUrls: ['./sop-creation.component.scss']
})
export class SopCreationComponent implements OnInit {

  /* ----- Data ----- */
  rules: string[] = [];
  units: string[] = [];
  warnings: string[] = [];
  staffQualifications: string[] = [];
  supportingTools: string[] = [];
  typesFormsReports:  string[] = [];

  captions: string[] = ["Rules", "Related Working Units", "Warnings", "Staff Qualifications", "Supporting Tools", "Types of Forms and Reports", "Objective"];
  captionSelected: string = this.captions[0];
  stepSelected: number;

  elementsArray: string[] = [];

  newRule: string = "";
  newUnit: string = "";
  newWarning: string = "";
  newStaffQualification: string = "";
  newSupportingTool: string = "";
  newTypeFormReport: string = "";
  newObjective: string = "";

  constructor() { }

  ngOnInit() {
    this.captionSelected = this.captions[0];
    this.elementsArray = this.rules;
    this.stepSelected = 0;
  }

  changeCaption(stepNumber) {
    this.stepSelected = stepNumber;
    this.captionSelected = this.captions[stepNumber];
    if (stepNumber==0) {
      this.elementsArray = this.rules;
    }
    else if (stepNumber==1) {
      this.elementsArray = this.units;
    }
    else if (stepNumber==2) {
      this.elementsArray = this.warnings;
    }
    else if (stepNumber==3) {
      this.elementsArray = this.staffQualifications;
    }
    else if (stepNumber==4) {
      this.elementsArray = this.supportingTools;
    }
    else if (stepNumber==5) {
      this.elementsArray = this.typesFormsReports;
    }
  }

  addNewRule () {
    if (this.newRule != "" && !this.rules.includes(this.newRule)) {
      this.rules.push(this.newRule);
    }
  }

  addNewUnit () {
    if (this.newUnit != "" && !this.units.includes(this.newUnit)) {
      this.units.push(this.newUnit);
    }
  }

  addNewWarning () {
    if (this.newWarning != "" && !this.warnings.includes(this.newWarning)) {
      this.warnings.push(this.newWarning);
    }
  }

  addNewStaffQualification () {
    if (this.newStaffQualification != "" && !this.staffQualifications.includes(this.newStaffQualification)) {
      this.staffQualifications.push(this.newStaffQualification);
    }
  }

  addNewSupportingTool () {
    if (this.newSupportingTool != "" && !this.supportingTools.includes(this.newSupportingTool)) {
      this.supportingTools.push(this.newSupportingTool);
    }
  }

  addNewTypeFormReport () {
    if (this.newTypeFormReport != "" && !this.typesFormsReports.includes(this.newTypeFormReport)) {
      this.typesFormsReports.push(this.newTypeFormReport);
    }
  }

  onSubmit() {

    if (this.newObjective == ""){
      console.log("pas d'objectif grooos")
    }
    else if(this.rules.length == 0){
      console.log("pas de rules grooos")
    }
    else if(this.units.length == 0){
      console.log("pas d'units grooos")
    }
    else {
      console.log("Finish");
    }
  }

  // Active management of the number navigation
  numberNavigation($event){

    let clickedElement = $event.target || $event.srcElement;

    if(clickedElement) {
      let currentNumberActive = clickedElement.parentElement.parentElement.querySelector(".active");
      if (currentNumberActive) {
        currentNumberActive.classList.remove("active");
      }
      clickedElement.parentElement.className += " active";
    }

  }



}
