import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayOptions',
    providers: [...matMagicProviders],
    styleUrls: ['./DisplayOptions.component.css'],
    templateUrl: './DisplayOptions.component.html'
}) export class DisplayOptions extends BaseMatTableMagicComponent {
    displayedColumns = ['Column2',
        // 'Update',
        'Option',
        'colDescr1',
        'colDescr2',
        'colDescr3',
        'colDescr4',
        'colDescr5',
    ];
}