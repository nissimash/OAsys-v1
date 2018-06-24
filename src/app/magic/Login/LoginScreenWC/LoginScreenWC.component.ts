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
    MgTitleService,
    MgTableService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-LoginScreenWC',
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
    styleUrls: ['./LoginScreenWC.component.css'],
    templateUrl: './LoginScreenWC.component.html'
}) export class LoginScreenWC extends BaseTaskMagicComponent {}