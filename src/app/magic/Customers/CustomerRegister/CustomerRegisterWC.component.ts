import {    Component} from '@angular/core';

import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-CustomerRegisterWC',
    providers: [...magicProviders],
    styleUrls: ['./CustomerRegisterWC.component.css'],
    templateUrl: './CustomerRegisterWC.component.html'
}) export class CustomerRegisterWC extends TaskBaseMagicComponent {}