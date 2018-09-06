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
    selector: 'mga-RFQDetail',
    providers: [...matMagicProviders],
    styleUrls: ['./RFQDetail.component.css'],
    templateUrl: './RFQDetail.component.html'
}) export class RFQDetail extends BaseMatTableMagicComponent {
    pageEvent:any;
    displayedColumns = ['Item',
        'Description ',
        'Legacy PN',
        'Quantity',
        'Unit Price',
        'Discount',
        'Total',
        'Lead Time',
    ];

}
