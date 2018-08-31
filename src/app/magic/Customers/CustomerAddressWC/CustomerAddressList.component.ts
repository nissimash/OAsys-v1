import {
    Component
} from '@angular/core';
import{
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {
    MagicModalInterface
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-CustomerAddressList',
    providers: [...magicProviders],
    styleUrls: ['./CustomerAddressList.component.css'],
    templateUrl: './CustomerAddressList.component.html'
}) export class CustomerAddressList extends TaskBaseMagicComponent implements MagicModalInterface {
    pageEvent :any;
    private static readonly formName: string = "CustomerAddressList";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
     X() {
        return CustomerAddressList.x;
    }
     Y() {
        return CustomerAddressList.y;
    }
     Width() {
        return CustomerAddressList.width;
    }
     Height() {
        return CustomerAddressList.height;
    }
     IsCenteredToWindow() {
        return CustomerAddressList.isCenteredToWindow;
    }
     FormName() {
        return CustomerAddressList.formName;
    }
     ShowTitleBar() {
        return CustomerAddressList.showTitleBar;
    }
     ShouldCloseOnBackgroundClick() {
        return CustomerAddressList.shouldCloseOnBackgroundClick;
    }

    displayedColumns = ['Street1',
        'Street2',
        'Country',
        'State',
        'Postal code',
    ];

}
