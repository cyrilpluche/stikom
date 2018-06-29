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
  @Input() isLinkActive: boolean;

  @Output() success = new EventEmitter<boolean>();


  ngOnInit() {
  }

  goDestination(){
    if (this.isLinkActive == true) {
      this.router.navigate(['/',this.link]);
    }else{
      this.success.emit(true);
    }
  }

}
