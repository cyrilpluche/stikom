import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../objects/member/member.service";

@Component({
  selector: 'app-role-helper',
  templateUrl: './role-helper.component.html',
  styleUrls: ['./role-helper.component.scss']
})
export class RoleHelperComponent implements OnInit {

  constructor(private _memberService: MemberService,) { }

  ngOnInit() {
  }

  async getRole () {
    try {
      let i = await this._memberService.getUserDataFull();
      let id = i['id'];
      let r = await this._memberService.getAllRoles(id).toPromise();
      let role = r['data'];
      if (role['member_admin'] == 1) {
        return 'admin';
      }
      else if (role['member_role'].includes('Planner')){
        return 'planner';
      }
      else if (role['member_role'].includes('Project Manager')){
        return 'manager';
      }
      else if (role['member_role'].includes('Performer')){
        return 'performer';
      }
    }
    catch (error){
      return 'none';
    }
  }

}
