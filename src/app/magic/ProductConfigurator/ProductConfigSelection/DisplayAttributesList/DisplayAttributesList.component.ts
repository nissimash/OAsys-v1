import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayAttributesList',
    providers: [...matMagicProviders],
    styleUrls: ['./DisplayAttributesList.component.css'],
    templateUrl: './DisplayAttributesList.component.html'
}) export class DisplayAttributesList extends BaseMatTableMagicComponent {
    displayedColumns = ['Column2', ];
}