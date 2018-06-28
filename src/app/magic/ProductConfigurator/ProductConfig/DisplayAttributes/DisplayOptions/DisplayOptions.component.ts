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
        'Option',
        'Descr1',
        'Descr2',
        'Descr3',
        'Descr4',
        'Descr5',
        'Descr6',
        'Descr7',
        'Descr8',
        'Descr9',
        'Descr10',
        'Descr11',
        'Descr12',
    ];

}