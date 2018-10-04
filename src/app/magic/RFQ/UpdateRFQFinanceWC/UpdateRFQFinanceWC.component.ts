import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-UpdateRFQFinanceWC',
    providers: [...magicProviders],
    styleUrls: ['./UpdateRFQFinanceWC.component.css'],
    templateUrl: './UpdateRFQFinanceWC.component.html'
}) export class UpdateRFQFinanceWC extends TaskBaseMagicComponent {}