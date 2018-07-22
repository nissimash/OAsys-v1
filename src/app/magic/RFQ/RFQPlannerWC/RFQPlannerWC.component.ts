import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-RFQPlannerWC',
    providers: [...magicProviders],
    styleUrls: ['./RFQPlannerWC.component.css'],
    templateUrl: './RFQPlannerWC.component.html'
}) export class RFQPlannerWC extends TaskBaseMagicComponent {}