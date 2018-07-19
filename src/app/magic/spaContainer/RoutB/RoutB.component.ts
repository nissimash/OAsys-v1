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
    selector: 'mga-RoutB',
    providers: [TaskMagicService, SubformMagicService, TitleMagicService, TableMagicService],
    styleUrls: ['./RoutB.component.css'],
    templateUrl: './RoutB.component.html'
}) export class RoutB extends TaskBaseMagicComponent {}