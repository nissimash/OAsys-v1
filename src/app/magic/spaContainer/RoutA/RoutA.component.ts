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
    selector: 'mga-RoutA',
    providers: [TaskMagicService, MgSubformService, MgTableService],
    styleUrls: ['./RoutA.component.css'],
    templateUrl: './RoutA.component.html'
}) export class RoutA extends BaseTaskMagicComponent {}