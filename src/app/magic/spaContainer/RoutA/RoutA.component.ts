import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent, TitleMagicService
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListMagicService,
    CommandsCollectorMagicService,
    SubformMagicService, TableMagicService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-RoutA',
    providers: [TaskMagicService, SubformMagicService, TitleMagicService, TableMagicService],
    styleUrls: ['./RoutA.component.css'],
    templateUrl: './RoutA.component.html'
}) export class RoutA extends TaskBaseMagicComponent {}