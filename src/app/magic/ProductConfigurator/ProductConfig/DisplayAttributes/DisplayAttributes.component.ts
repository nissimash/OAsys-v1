import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-DisplayAttributes',
    providers: [...matProviders],
    styleUrls: ['./DisplayAttributes.component.css'],
    templateUrl: './DisplayAttributes.component.html'
}) export class DisplayAttributes extends BaseMatTableComponent {
    displayedColumns = ['Attribute'
    ];
}