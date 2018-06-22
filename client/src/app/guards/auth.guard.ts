import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from './../objects/member/member.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private memberService: MemberService,
              private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.memberService.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["authentification"]);
      return false;
    }
  }
}
