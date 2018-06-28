import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
import {
    Router,
    ActivatedRoute
} from '@angular/router';
@Component({
    selector: 'mga-CustRegList',
    providers: [...matProviders],
    styleUrls: ['./CustRegList.component.css'],
    templateUrl: './CustRegList.component.html'
}) export class CustRegList extends BaseMatTableComponent {
    pageEvent:any;

    displayedColumns = ['Customer Id',
        'Customer Name',
        'Address',
        'Currency',
    ];

}
