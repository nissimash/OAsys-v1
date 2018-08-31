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
    selector: 'mga-WLParts',
    providers: [...matMagicProviders],
    styleUrls: ['./WLParts.component.css'],
    templateUrl: './WLParts.component.html'
}) export class WLParts extends BaseMatTableMagicComponent {
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
