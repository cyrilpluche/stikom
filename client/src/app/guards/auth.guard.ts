import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from './../objects/member/member.service';
import {Router} from '@angular/router';
import { tap, map } from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";
import { of } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private memberService: MemberService,
              private myRoute: Router){
  }
  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.memberService.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["authentification"]);
      return false;
    }
  }*/

  canActivate(): Observable<boolean> {
    //get user data
    return this.memberService.setUserDetails().pipe(
      catchError((err) => {
          this.memberService.logout();
          this.myRoute.navigate(['/authentification']);
        return throwError('some message');
        }
      ),
      map((res)=>{
        if(res!==null){
          this.memberService.storeUserDataFull(res['data']);
          return true;
        }else{
          this.memberService.logout();
          this.myRoute.navigate(['/authentification']);
          return false;
        }
      })

    );
  }
}
