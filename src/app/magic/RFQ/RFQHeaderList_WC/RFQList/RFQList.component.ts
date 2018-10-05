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
    selector: 'mga-RFQList',
    providers: [...matMagicProviders],
    styleUrls: ['./RFQList.component.css'],
    templateUrl: './RFQList.component.html'
}) export class RFQList extends BaseMatTableMagicComponent {
    pageEvent:any;
    displayedColumns = ['RFQID',
        'QuotedTo',
        'Status',
        'RevisionNo',
        'Customer #',
        // 'color',
    ];
}
