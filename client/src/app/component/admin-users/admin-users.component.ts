import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../objects/member/member.service";
import {Member} from "../../objects/member/member";
import {Role} from "../../objects/role/role";
import {RoleService} from '../../objects/role/role.service';

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

  roles:Role[]=[];

  mdlSampleIsOpen:boolean=false;

  user:string = "error";
  user_id:string;
  user_admin:number;
  user_roles:Role[]=[];

  roleChossen:string = "";

  constructor(private _memberService: MemberService,
              private _roleService: RoleService) { }

  ngOnInit() {

   this.getAllUsers();
   this.getAllRoles();
  }

  async getAllUsers(){
    await this._memberService.selectAll()
      .subscribe( (res) => {
          this.users=res['data'];

        },
        error => {
          console.log("ERREUR : ",error);

        });
  }

  async getAllRoles(){
    await this._roleService.selectAll()
      .subscribe( (res) => {
          this.roles=res['data'];

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



  async manageRoles(user_id,user_admin)
  {
    this.user_id=user_id;

    await this._memberService.getAllRoles(user_id)
    .subscribe( (res) => {
       this.user_roles=res['data']['member_role'];
       this.user_admin=res['data']['member_admin'];
       this.mdlSampleIsOpen=true;
      },
      error => {
      console.log(error.message);
      });


  }


  async grantUser()
  {

    await this._memberService.grantMember(this.user_id, this.roleChossen)
      .subscribe( (res) => {
          this.mdlSampleIsOpen=false;
          this.manageRoles(this.user_id,this.user_admin);
        },
        error => {
          console.log(error.message);
        });


  }

  async unGrantUser(roleChossen)
  {

    await this._memberService.unGrantMember(this.user_id, roleChossen)
      .subscribe( (res) => {
          this.mdlSampleIsOpen=false;
          this.manageRoles(this.user_id,this.user_admin);
        },
        error => {
          console.log(error.message);
        });


  }

  closeModal()
  {
    this.mdlSampleIsOpen=false;
  }

}
