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

  actualPassword:string;
  newPassword:string;
  newPasswordCheck:string;
  errorMessage:string="";
  changeFinished:boolean=false;

  constructor(private _memberService: MemberService,) { }

  ngOnInit() {
    let userData = this._memberService.getUserDataFull();
    this.mail=userData['mail'];
    this.firstName=userData['first_name'];
    this.name=userData['name'];


  }

  onSubmit() {
    this.errorMessage = "";
    if (this.actualPassword == null || this.actualPassword == "")
    {
      this.errorMessage = "Actual password is required.";
    }else if (this.newPassword == null || this.newPassword == "") {
      this.errorMessage = "New password is required.";
    }else if(this.newPasswordCheck == null || this.newPasswordCheck == "")
    {
      this.errorMessage = "New password confirmation is required.";
    }else if(this.newPassword !== this.newPasswordCheck)
    {
      this.errorMessage = "New password and confirmation not the same.";
    }else{
      this.sendPassword(this.actualPassword,this.newPassword,this.newPasswordCheck);
    }
  }

  sendPassword(actual:string,newP:string,confP:string)
  {
    this._memberService.passwordUpdate(actual,newP,confP)
      .subscribe( (res) => {
          this.errorMessage = "";
          this.changeFinished=true;
        },
        error => {
          console.log("ERREUR : ",error);

          this.errorMessage = error.error.message;
        });

  }

}
