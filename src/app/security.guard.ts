import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(
    private router : Router,
    private login  : LoginService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(`canActivate -> isLogedin : ${this.login.isLogedin}`);

    if(!this.login.isLogedin){
         this.login.url = state.url;
         this.router.navigate(['Login',{url:state.url}]);
     }
     return this.login.isLogedin;
  }

}
