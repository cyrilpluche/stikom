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

  @Output() success = new EventEmitter<boolean>();


  ngOnInit() {
  }

  goDestination(){
    this.success.emit(true);
    this.router.navigate(['/',this.link]);
  }

}
