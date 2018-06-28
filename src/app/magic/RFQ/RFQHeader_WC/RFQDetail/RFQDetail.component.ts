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
    selector: 'mga-RFQDetail',
    providers: [...matProviders],
    styleUrls: ['./RFQDetail.component.css'],
    templateUrl: './RFQDetail.component.html'
}) export class RFQDetail extends BaseMatTableComponent {
    pageEvent:any;
    displayedColumns = ['Item',
        'Description ',
        'Quantity',
        'Unit Price',
        'Amount',
        'Discount',
        'Total',
        'Lead Time',
    ];

}
