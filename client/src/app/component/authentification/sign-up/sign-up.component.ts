import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /* ----- Data ----- */
  step1: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

  changeStep() {
    this.step1 = !this.step1;
  }

}
