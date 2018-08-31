import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-Attachment',
    providers: [...matMagicProviders],
    styleUrls: ['./Attachment.component.css'],
    templateUrl: './Attachment.component.html'
}) export class Attachment extends BaseMatTableMagicComponent {
    pageEvent:any;
    displayedColumns = ['Document ID',
        'Document Name',
        'Extention',
    ];
}
