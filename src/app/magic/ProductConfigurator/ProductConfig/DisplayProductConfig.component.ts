import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseTaskMagicComponent
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-DisplayProductConfig',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./DisplayProductConfig.component.css'],
    templateUrl: './DisplayProductConfig.component.html'
}) export class DisplayProductConfig extends BaseTaskMagicComponent { }