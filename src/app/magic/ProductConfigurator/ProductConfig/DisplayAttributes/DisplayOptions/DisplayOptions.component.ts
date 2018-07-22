import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayOptions',
    providers: [...matProviders],
    styleUrls: ['./DisplayOptions.component.css'],
    templateUrl: './DisplayOptions.component.html'
}) export class DisplayOptions extends BaseMatTableComponent {
    displayedColumns = ['Selection',
        'Update',
        'Option',
        'colDescr1',
        'colDescr2',
        'colDescr3',
        'colDescr4',
        'colDescr5',
        'colDescr6',
        'colDescr7',
        'colDescr8',
        'colDescr9',
        'colDescr10',
        'colDescr11',
        'colDescr12',
    ];
}