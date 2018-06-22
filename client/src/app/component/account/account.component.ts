import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../objects/member/member.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  mail:string;
  firstName:string;
  name:string;

  constructor(private _memberService: MemberService,) { }

  ngOnInit() {
    let userData = this._memberService.getUserDataFull();
    this.mail=userData['mail'];
    this.firstName=userData['first_name'];
    this.name=userData['name'];


  }

}
