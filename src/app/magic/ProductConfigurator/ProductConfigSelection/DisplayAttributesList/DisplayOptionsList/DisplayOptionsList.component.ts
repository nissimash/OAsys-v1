import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayOptionsList',
    providers: [...matMagicProviders],
    styleUrls: ['./DisplayOptionsList.component.css'],
    templateUrl: './DisplayOptionsList.component.html'
}) export class DisplayOptionsList extends BaseMatTableMagicComponent {
    pageEvent: any;
    displayedColumns = ['Selection',
        'Option',
        'colDescr1',
        'colDescr2',
        'colDescr3',
        'colDescr4',
        'colDescr5',
        // 'colDescr6',
        // 'colDescr7',
        // 'colDescr8',
        // 'colDescr9',
        // 'colDescr10',
        // 'colDescr11',
        // 'colDescr12',
    ];
}
