import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-Dashboard',
    providers: [...magicProviders],
    styleUrls: ['./Dashboard.component.css'],
    templateUrl: './Dashboard.component.html'
}) export class Dashboard extends TaskBaseMagicComponent {}