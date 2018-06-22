import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseTaskMagicComponent, MgTitleService
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService,
    MgTableService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-DisplaySeriesTypes',
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
    styleUrls: ['./DisplaySeriesTypes.component.css'],
    templateUrl: './DisplaySeriesTypes.component.html'
}) export class DisplaySeriesTypes extends BaseTaskMagicComponent {}