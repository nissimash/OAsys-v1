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
    selector: 'mga-RFQList',
    providers: [...matProviders],
    styleUrls: ['./RFQList.component.css'],
    templateUrl: './RFQList.component.html'
}) export class RFQList extends BaseMatTableComponent {
    pageEvent:any;

    displayedColumns = ['RFQID',
        'QuotedTo',
        'Status',
        'RevisionNo',
        'Customer #',
    ];
}
