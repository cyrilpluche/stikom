import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../objects/member/member.service";
import {Router} from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.scss']
})
export class AccountValidationComponent implements OnInit {

  seed:string="";
  statut:boolean=false;
  message:string="";
  title:string="";

  constructor(private _memberService: MemberService,
              private _route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this._route.params.subscribe(
      params=>{
        this.seed = params['seed'];
      }
    )

    console.log(this.seed);

    this._memberService.seedCheck(this.seed)
      .subscribe( (res) => {
          console.log("OK : ",res);
          this.message="Your account will be available when an administrator will have validate it.";
          this.title="Your mail has been validated";
          this.statut=true;
        },
        error => {
          console.log("ERREUR : ",error);
          this.title = "ERRROR";
          this.message = "The link you've just clicked is not valide anymore";
          this.statut=false;
        });




  }

}
