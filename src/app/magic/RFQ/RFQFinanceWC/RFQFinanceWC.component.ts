import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-RFQFinanceWC',
    providers: [...magicProviders],
    styleUrls: ['./RFQFinanceWC.component.css'],
    templateUrl: './RFQFinanceWC.component.html'
}) export class RFQFinanceWC extends TaskBaseMagicComponent {}