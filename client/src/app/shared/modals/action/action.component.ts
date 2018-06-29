import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  /* ----- Data ----- */
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() buttons: string;
  buttonsArray: string[];
  @Input() links: string;
  linksArray: string[];
  @Input() isLinkActive: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.buttonsArray = this.buttons.split(',');
    this.linksArray = this.links.split(',');
  }

  goDestination(link){
    if (this.isLinkActive) {
      this.router.navigate(['/',link]);
    }
  }

}
