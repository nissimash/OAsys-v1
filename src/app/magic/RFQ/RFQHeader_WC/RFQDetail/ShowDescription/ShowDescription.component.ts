import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-ShowDescription',
    providers: [...magicProviders],
    styleUrls: ['./ShowDescription.component.css'],
    templateUrl: './ShowDescription.component.html'
}) export class ShowDescription extends BaseTaskMagicComponent {}