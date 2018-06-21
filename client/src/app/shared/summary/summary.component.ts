import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() buttonTitle:string;
  @Input() link:string;
  @Input() title:string;
  @Input() text:string;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goDestination(){
    this.router.navigate(['/',this.link]);
  }

}
