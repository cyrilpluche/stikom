import { Component, OnInit } from '@angular/core';
import { SopService } from "../../../objects/sop/sop.service";
import {current} from "codelyzer/util/syntaxKind";
import {MemberService} from "../../../objects/member/member.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sop-creation',
  templateUrl: './sop-creation.component.html',
  styleUrls: ['./sop-creation.component.scss']
})
export class SopCreationComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  space: string = " "; //Used for the id of pagination
  summary: string = "";
  formValid: boolean = false;

  sopId: string = "";

  rules: string[] = [];
  units: string[] = [];
  warnings: string[] = [];
  staffQualifications: string[] = [];
  supportingTools: string[] = [];
  typesFormsReports:  string[] = [];

  captions: string[] = ["Title", "Rules", "Related Working Units", "Warnings", "Staff Qualifications", "Supporting Tools", "Types of Forms and Reports", "Objective"];
  captionSelected: string = this.captions[0];
  stepSelected: number;

  elementsArray: string[] = [];

  newTitle: string = "";
  newRule: string = "";
  newUnit: string = "";
  newWarning: string = "";
  newStaffQualification: string = "";
  newSupportingTool: string = "";
  newTypeFormReport: string = "";
  newObjective: string = "";

  constructor(private _sopService: SopService,
              private _memberService: MemberService,
              private router: Router) { }

  ngOnInit() {
    this.captionSelected = this.captions[0];
    this.elementsArray = this.rules;
    this.stepSelected = 0;
    //document.querySelector(this.captions[2]).className += ".active";
  }


  //Enable to change page with the arrows
  arrowChangeCaption(next, $event) {

    if (next && this.stepSelected < 7) {
      this.changeCaption(this.captions[this.stepSelected+1], $event);

    }
    else if (!next && this.stepSelected > 0) {
      this.changeCaption(this.captions[this.stepSelected-1], $event);
    }

  }

  // This function change the page selected and set the right array to the view list
  changeCaption(stepNumber, $event) {
    this.errorMessage = "";
    this.stepSelected = this.captions.indexOf(stepNumber);
    this.captionSelected = this.captions[this.stepSelected];
    if (this.stepSelected==1) {
      this.elementsArray = this.rules;
    }
    else if (this.stepSelected==2) {
      this.elementsArray = this.units;
    }
    else if (this.stepSelected==3) {
      this.elementsArray = this.warnings;
    }
    else if (this.stepSelected==4) {
      this.elementsArray = this.staffQualifications;
    }
    else if (this.stepSelected==5) {
      this.elementsArray = this.supportingTools;
    }
    else if (this.stepSelected==6) {
      this.elementsArray = this.typesFormsReports;
    }
    else if (this.stepSelected==7){
      this.fieldVerification();
    }

    this.numberNavigation($event, stepNumber);
  }

  // ---------------- ADD FUNCTIONS ---------------- //
  // ---------------- ADD FUNCTIONS ---------------- //
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

  // ---------------- FORM VALIDATION ---------------- //
  // ---------------- FORM VALIDATION ---------------- //
  fakeNext() {
    if (this.newTitle != "") {
      document.getElementById('nextArrow').click();
    }
    else {
      this.fieldVerification();
    }
  }

  fieldVerification () {
    if (this.newTitle == ""){
      this.errorMessage = "SOP title name is required.";
      this.formValid = false;
    }
    else if (this.newObjective == ""){
      this.errorMessage = "Objective indication is required.";
      this.formValid = false;
    }
    else if(this.rules.length == 0){
      this.errorMessage = "At least one rule is required.";
      this.formValid = false;
    }
    else if(this.units.length == 0){
      this.errorMessage = "At least one unit is required.";
      this.formValid = false;
    }
    else {
      this.errorMessage = ""
      this.formValid = true;
    }
  }

  onSubmit() {
    //Need to fix the ligne jump
    this.summary += "Are you sure all informations provided for this SOP are given ? \n\n"
    this.summary += "Title : " + this.newTitle + '\n';
    this.summary += "Objective : "+ this.newObjective + '\n';
    console.log("Form ok.");
  }

  //Final function that add the SOP into the database
  addSop(add) {
    if (add) {

      let date_creation = new Date(Date.now());
      let date_revision = new Date(Date.now());
      let date_published = new Date(Date.now());
      let sop_approvment = "Unknow";

      let sop_rules = "";
      for (let r of this.rules) {
        sop_rules += r;
      }
      let sop_warning = "";
      for (let w of this.warnings) {
        sop_rules += w;
      }
      let sop_staff_qualification = "";
      for (let s of this.staffQualifications) {
        sop_staff_qualification += s;
      }
      let sop_tools = "";
      for (let t of this.supportingTools) {
        sop_tools += t;
      }
      let sop_type_reports = "";
      for (let t of this.typesFormsReports) {
        sop_type_reports += t;
      }

      this._sopService.createSop(
        this.newTitle,
        date_creation,
        date_revision,
        date_published,
        sop_approvment,
        sop_rules,
        sop_warning,
        sop_staff_qualification,
        sop_tools,
        sop_type_reports,
        this.newObjective
      ).subscribe((res) => {
        this.errorMessage = "";
        console.log("Form added");

        //We get the id of the new SOP
        this.sopId = res['data'];
        this.sopId = this.sopId['sop_id'];

        //We store this id in the local storage to re-use it for the activities creation
        localStorage.setItem('Sop_id', this.sopId);
        window.setTimeout(function(){
          this.router.navigate(['/','activity-creation']);
          }, 4000);

      },
        error => {
          this.errorMessage = error.error.message;
        });
    }
  }

  // Active management of the number navigation background
  numberNavigation($event, stepName){
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.className == "page-link" || (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected < 8) || (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1)){
      let currentNumberActive = clickedElement.parentElement.parentElement.querySelector(".active");
      if (currentNumberActive) {
        currentNumberActive.classList.remove("active");
      }

      if (clickedElement.className == "page-link") {
        clickedElement.parentElement.className += " active";
      }
      else if (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1) {
        let id = "#" + stepName.split(" ")[0];
        document.querySelector(id).className += " active";
      }
      else if (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected < 8) {

        let id = "#" + stepName.split(" ")[0];
        document.querySelector(id).className += " active";
      }
    }



  }



}
