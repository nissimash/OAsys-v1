import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
// import {
//     Router,
//     ActivatedRoute
// } from '@angular/router';
@Component({
    selector: 'mga-CustomerList',
    providers: [...matProviders],
    styleUrls: ['./CustomerList.component.css'],
    templateUrl: './CustomerList.component.html'
}) export class CustomerList extends BaseMatTableComponent {
    pageEvent:any;

    displayedColumns = ['Customer',
        'Address',
    ];

}
