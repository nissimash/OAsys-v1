import {
    Component, ChangeDetectorRef
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
}) export class LoginScreenWC extends BaseTaskMagicComponent {

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
    }

    setLogin(){
        this.loginService.isLogedin = true;
        this.router.navigate([this.loginService.url]);
    }


}
