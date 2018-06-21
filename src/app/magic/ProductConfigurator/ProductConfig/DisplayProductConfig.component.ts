import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent
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
    providers: [TaskMagicService, MgSubformService,  MgTableService],
    styleUrls: ['./DisplayProductConfig.component.css'],
    templateUrl: './DisplayProductConfig.component.html'
}) export class DisplayProductConfig extends BaseTaskMagicComponent {}

