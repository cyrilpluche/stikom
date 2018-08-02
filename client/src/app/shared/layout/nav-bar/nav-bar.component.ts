import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../../objects/member/member.service";
import {Router} from "@angular/router";
import {RoleHelperComponent} from "../../../helpers/role-helper/role-helper.component";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn=false;
  reg:RegExp;

  member_role: string;
  role_helper: RoleHelperComponent = new RoleHelperComponent(this._memberService);



  constructor(private _memberService: MemberService,
              private router:Router) { }

  async ngOnInit() {

    this.member_role = await this.role_helper.getRole();
    let result = this._memberService.isLoggedIn();
    if(result){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn =  false;
    }
  }

  onLogoutClick() {
    this._memberService.logout();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500)

  }

  isActive(page:string):boolean{
    this.reg = new RegExp("^/" + page);
    return this.reg.test(this.router.url);
  }



}
