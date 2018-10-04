import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-RFQFinanceList',
    providers: [...matMagicProviders],
    styleUrls: ['./RFQFinanceList.component.css'],
    templateUrl: './RFQFinanceList.component.html'
}) export class RFQFinanceList extends BaseMatTableMagicComponent {
    displayedColumns = ['clQuoteNo',
        // 'clItem',
        'clPartno',
        'clDesc',
        'clQty',
        'clQuotePrice',
        'clFROZENCOST',
        'clUser',
    ];
}