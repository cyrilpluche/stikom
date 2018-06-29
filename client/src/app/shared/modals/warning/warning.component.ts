import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  constructor(private router: Router) { }

  /* ----- Data ----- */
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() isLink: boolean;

  @Output() success = new EventEmitter<boolean>();


  ngOnInit() {
  }

  goDestination(){
    if (this.isLink) {
      this.router.navigate(['/',this.link]);
    }
    else {
      console.log("Get out");
      this.success.emit(true);
    }
  }

}
