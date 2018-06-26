import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  /* ----- Data ----- */
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() isLinkActive: boolean = true;

  @Output() success = new EventEmitter<boolean>();


  ngOnInit() {
  }

  goDestination(){
    if (this.isLinkActive) {
      this.success.emit(true);
      this.router.navigate(['/',this.link]);
    }
  }

}
