import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseTaskMagicComponent
} from "@magic-xpa/angular";
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService,
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-DisplaySeriesTypes',
    providers: [TaskMagicService, MgSubformService], 
    styleUrls: ['./DisplaySeriesTypes.component.css'],
    templateUrl: './DisplaySeriesTypes.component.html'
}) export class DisplaySeriesTypes extends BaseTaskMagicComponent {}
