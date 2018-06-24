import {
    Component, ChangeDetectorRef
} from '@angular/core';
import {
    BaseTaskMagicComponent
} from "@magic-xpa/angular";
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService,
    MgTitleService,
    MgTableService
} from "@magic-xpa/angular";
import { LoginService } from '../../../login.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'mga-LoginScreenWC',
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
    styleUrls: ['./LoginScreenWC.component.css'],
    templateUrl: './LoginScreenWC.component.html'
}) export class LoginScreenWC extends BaseTaskMagicComponent {

    constructor(
        private loginService: LoginService,
        private router : Router,
        private route  : ActivatedRoute,
        ref: ChangeDetectorRef, 
        task: TaskMagicService, 
        mgSub: MgSubformService, 
        titleService: MgTitleService, 
        tableService: MgTableService
    ){
        super(ref,task,mgSub,titleService,tableService);
        task.detectChanges.subscribe(values=>{
            console.dir(values);
        })
    }

    setLogin(){
        this.loginService.isLogedin = true;
        this.router.navigate([tthis.loginService.url]);
    }


}
