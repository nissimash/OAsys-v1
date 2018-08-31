import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import {
    Router,
    ActivatedRoute
} from '@angular/router';
@Component({
    selector: 'mga-CustRegList',
    providers: [...matMagicProviders],
    styleUrls: ['./CustRegList.component.css'],
    templateUrl: './CustRegList.component.html'
}) export class CustRegList extends BaseMatTableMagicComponent {
    pageEvent:any;

    displayedColumns = ['Customer Id',
        'Customer Name',
        'Address',
        'Currency',
    ];

}
