import {
    Component
} from '@angular/core';
import {
<<<<<<< HEAD
    Title
} from '@angular/platform-browser';
import {
    BaseTaskMagicComponent, MgTitleService
=======
    BaseTaskMagicComponent
>>>>>>> 53fa1d55d943beff3407755daa74b37384b2377f
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService,
    //MgTitleService,
    MgTableService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-DisplayProductConfig',
<<<<<<< HEAD
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
=======
    providers: [TaskMagicService, MgSubformService,  MgTableService],
>>>>>>> 53fa1d55d943beff3407755daa74b37384b2377f
    styleUrls: ['./DisplayProductConfig.component.css'],
    templateUrl: './DisplayProductConfig.component.html'
}) export class DisplayProductConfig extends BaseTaskMagicComponent {}

