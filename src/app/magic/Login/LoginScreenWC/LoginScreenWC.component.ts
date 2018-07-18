import {
    Component, ChangeDetectorRef, OnChanges, SimpleChanges
} from '@angular/core';
import {
    BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {
    TaskMagicService,
    MagicServices
} from "@magic-xpa/angular";
import { LoginService } from '../../../login.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'mga-LoginScreenWC',
    providers: [...magicProviders],
    styleUrls: ['./LoginScreenWC.component.css'],
    templateUrl: './LoginScreenWC.component.html'
}) export class LoginScreenWC extends BaseTaskMagicComponent{
 

    loggedIn: string;

    setLogin(){
        this.loginService.isLogedin = true;
        console.log(this.loginService.url);
        this.router.navigate([this.loginService.url]);
    }
    constructor(
        private loginService: LoginService,
        private router : Router,
        private route  : ActivatedRoute,
        ref: ChangeDetectorRef, 
        task: TaskMagicService, 
        magicServices: MagicServices
    ){
        
        super(ref, magicServices);
        task.detectChanges.subscribe(values=>{
            console.dir(values);
        })
        let timerId = setInterval(() =>
        {
            console.log( this.mgGetValue('msgLogonMessage'));
            if ( this.mgGetValue('msgLogonMessage') === "Success")
            {
                console.log(this.loginService.url);
                this.setLogin();
                clearInterval(timerId);   
            }

        }, 1000);
         
    }

   




}
