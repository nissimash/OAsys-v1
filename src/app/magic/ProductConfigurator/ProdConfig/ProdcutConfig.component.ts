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
    selector: 'mga-ProdcutConfig',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./ProdcutConfig.component.css'],
    templateUrl: './ProdcutConfig.component.html'
}) export class ProdcutConfig extends BaseTaskMagicComponent {}