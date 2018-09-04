import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-RFQPlannerList',
    providers: [...matMagicProviders],
    styleUrls: ['./RFQPlannerList.component.css'],
    templateUrl: './RFQPlannerList.component.html'
}) export class RFQPlannerList extends BaseMatTableMagicComponent {
    pageEvent:any;
    displayedColumns = ['QuoteNo',
        'QuoteDate',
        // 'Priority',
        'Item',
        'PartNo',
        'Description',
        'Quantity',
        'User',
        // 'ProductFamily',
        'LeadTime',
        'LeadTimeIn',
        'ShipDate',
    ];
}