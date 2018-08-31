import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
// import {
//     Router,
//     ActivatedRoute
// } from '@angular/router';
@Component({
    selector: 'mga-CustomerList',
    providers: [...matMagicProviders],
    styleUrls: ['./CustomerList.component.css'],
    templateUrl: './CustomerList.component.html'
}) export class CustomerList extends BaseMatTableMagicComponent {
    pageEvent:any;

    displayedColumns = ['Customer',
        'Address',
    ];

}
