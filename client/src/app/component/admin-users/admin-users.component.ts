import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../objects/member/member.service";
import {Member} from "../../objects/member/member";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  actionFinished:boolean=false;
  users:[Member];
  title:string;
  text:string;

  constructor(private _memberService: MemberService) { }

  ngOnInit() {

   this.getAllUsers();
  }

  async getAllUsers(){
    await this._memberService.selectAll()
      .subscribe( (res) => {
          console.log(res['data']);
          this.users=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }
  async validateUser(idUser:string)
  {

    await this._memberService.validateUser(idUser)
    .subscribe( (res) => {
        this.getAllUsers();
        this.title="Member has been validated";
        this.text="He can now login with his mail and password";
        this.actionFinished=true;

      },
      error => {
        this.title="Error";
        this.text=error.error.message;
        this.actionFinished=true;
      });


  }

  goBack(){
    this.title="";
    this.text=""
    this.actionFinished=false;
  }

}
