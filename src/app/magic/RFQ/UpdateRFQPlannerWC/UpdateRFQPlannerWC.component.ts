import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-UpdateRFQPlannerWC',
    providers: [...magicProviders],
    styleUrls: ['./UpdateRFQPlannerWC.component.css'],
    templateUrl: './UpdateRFQPlannerWC.component.html'
}) export class UpdateRFQPlannerWC extends BaseTaskMagicComponent {}