import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-Attachment',
    providers: [...matProviders],
    styleUrls: ['./Attachment.component.css'],
    templateUrl: './Attachment.component.html'
}) export class Attachment extends BaseMatTableComponent {
    pageEvent:any;
    displayedColumns = ['Document ID',
        'Document Name',
        'Extention',
    ];
}
