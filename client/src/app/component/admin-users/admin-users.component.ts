import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../objects/member/member.service";
import {Member} from "../../objects/member/member";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users:[Member];

  constructor(private _memberService: MemberService) { }

  ngOnInit() {

    this._memberService.selectAll()
      .subscribe( (res) => {
          console.log(res['data']);
          this.users=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

}
