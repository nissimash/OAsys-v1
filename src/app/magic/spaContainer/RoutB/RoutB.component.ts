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
    MgSubformService, MgTableService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-RoutB',
    providers: [TaskMagicService, MgSubformService, MgTableService],
    styleUrls: ['./RoutB.component.css'],
    templateUrl: './RoutB.component.html'
}) export class RoutB extends BaseTaskMagicComponent {}