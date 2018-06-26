import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


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


  constructor(private router: Router,
              private _location: Location) { }

  ngOnInit() {
  }

  goDestination(){
    if(this.link=="back")
    {
      this._location.back();
    }else{
      this.router.navigate(['/',this.link]);
    }

  }

}
