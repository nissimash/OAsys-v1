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
    selector: 'mga-WLParts',
    providers: [...matProviders],
    styleUrls: ['./WLParts.component.css'],
    templateUrl: './WLParts.component.html'
}) export class WLParts extends BaseMatTableComponent {
  pageEvent:any;

    displayedColumns = ['Source',
        'Item NO',
        'Description',
        'Legacy',
        'UOM',
        'CommodityCode',
        'ListPrice',
        'MakeBuy',
    ];
}
