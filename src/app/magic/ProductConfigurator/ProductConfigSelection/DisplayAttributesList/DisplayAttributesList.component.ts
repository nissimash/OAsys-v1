import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayAttributesList',
    providers: [...matProviders],
    styleUrls: ['./DisplayAttributesList.component.css'],
    templateUrl: './DisplayAttributesList.component.html'
}) export class DisplayAttributesList extends BaseMatTableComponent {
    displayedColumns = ['Column2', ];
}