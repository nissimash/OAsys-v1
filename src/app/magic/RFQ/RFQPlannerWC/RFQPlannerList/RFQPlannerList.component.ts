import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-RFQPlannerList',
    providers: [...matProviders],
    styleUrls: ['./RFQPlannerList.component.css'],
    templateUrl: './RFQPlannerList.component.html'
}) export class RFQPlannerList extends BaseMatTableComponent {
    displayedColumns = ['QuoteNo',
        'QuoteDate',
        'Priority',
        'Item',
        'PartNo',
        'Description',
        'Quantity',
        'User',
        'ProductFamily',
        'LeadTime',
        'ShipDate',
    ];
}