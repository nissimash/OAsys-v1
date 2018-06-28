import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-DisplayProductConfig',
    providers: [...magicProviders],
    styleUrls: ['./DisplayProductConfig.component.css'],
    templateUrl: './DisplayProductConfig.component.html'
}) export class DisplayProductConfig extends BaseTaskMagicComponent {}