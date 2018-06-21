import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  /* ----- Data ----- */
  @Input() title: string = "";
  @Input() message: string = "";


  ngOnInit() {
  }

}