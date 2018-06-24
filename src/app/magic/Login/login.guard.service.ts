import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from "./login.service";

Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    constructor(
         private logedinService  : LoginService,
         private router          : Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('canActivate')
        /*
        if(!this.logedinService.isLogedin){
            this.router.navigate(['login',{url:state.url}]);
        }
        return this.logedinService.isLogedin;
        */
       return false;
    }
}