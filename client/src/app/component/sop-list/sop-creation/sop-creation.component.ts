import { Component, OnInit } from '@angular/core';
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-sop-creation',
  templateUrl: './sop-creation.component.html',
  styleUrls: ['./sop-creation.component.scss']
})
export class SopCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";

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
    //document.querySelector(this.captions[2]).className += ".active";
  }


  //Enable to change page with the arrows
  arrowChangeCaption(next, $event) {

    if (next && this.stepSelected < 6) {
      this.changeCaption(this.captions[this.stepSelected+1], $event);

    }
    else if (!next && this.stepSelected > 0) {
      this.changeCaption(this.captions[this.stepSelected-1], $event);
    }

  }

  // This function change the page selected and set the right array to the view list
  changeCaption(stepNumber, $event) {
    console.log($event);
    this.errorMessage = "";
    this.stepSelected = this.captions.indexOf(stepNumber);
    this.captionSelected = this.captions[this.stepSelected];
    if (this.stepSelected==0) {
      this.elementsArray = this.rules;
    }
    else if (this.stepSelected==1) {
      this.elementsArray = this.units;
    }
    else if (this.stepSelected==2) {
      this.elementsArray = this.warnings;
    }
    else if (this.stepSelected==3) {
      this.elementsArray = this.staffQualifications;
    }
    else if (this.stepSelected==4) {
      this.elementsArray = this.supportingTools;
    }
    else if (this.stepSelected==5) {
      this.elementsArray = this.typesFormsReports;
    }
    this.numberNavigation($event, stepNumber);
  }

  addNewRule () {
    if (this.newRule == "") {
      this.errorMessage = "Rule indication field is required.";
    }
    else if (this.rules.includes(this.newRule)) {
      this.errorMessage = "This rule indication already exists.";
    }
    else {
      this.rules.push(this.newRule);
      this.errorMessage = "";
    }
  }

  addNewUnit () {
    if (this.newUnit == "") {
      this.errorMessage = "Unit name is required.";
    }
    else if (this.units.includes(this.newUnit)) {
      this.errorMessage = "This unit name already exists.";
    }
    else {
      this.units.push(this.newUnit);
      this.errorMessage = "";
    }
  }

  addNewWarning () {
    if (this.newWarning == "") {
      this.errorMessage = "Warning indication field is required.";
    }
    else if (this.warnings.includes(this.newWarning)) {
      this.errorMessage = "This warning indication already exists.";
    }
    else {
      this.errorMessage = "";
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

  // Active management of the number navigation background
  numberNavigation($event, stepName){

    let clickedElement = $event.target || $event.srcElement;
    console.log(clickedElement.className);
    console.log(clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1);
    if (clickedElement.className == "page-link" || (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected<7) || (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1)){

      let currentNumberActive = clickedElement.parentElement.parentElement.querySelector(".active");

      if (currentNumberActive) {
        currentNumberActive.classList.remove("active");
      }


      if (clickedElement.className == "page-link") {
        clickedElement.parentElement.className += " active";
      }
      if (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1) {
        let id = "#"+stepName;
        console.log(id)
        document.querySelector(id).className += " active";
      }
      if (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected < 7) {

        let id = "#"+stepName;
        console.log(id)
        document.querySelector(id).className += " active";
      }
    }



  }



}
