import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-ChangePasswordWC',
    providers: [...magicProviders],
    styleUrls: ['./ChangePasswordWC.component.css'],
    templateUrl: './ChangePasswordWC.component.html'
}) export class ChangePasswordWC extends TaskBaseMagicComponent {}