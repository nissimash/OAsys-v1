import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayAttributes',
    providers: [...matMagicProviders],
    styleUrls: ['./DisplayAttributes.component.css'],
    templateUrl: './DisplayAttributes.component.html'
}) export class DisplayAttributes extends BaseMatTableMagicComponent {
    displayedColumns = ['Column2', ];
}