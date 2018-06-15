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
    selector: 'mga-RFQHeader',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./RFQHeader.component.css'],
    templateUrl: './RFQHeader.component.html'
}) export class RFQHeader extends BaseTaskMagicComponent {}