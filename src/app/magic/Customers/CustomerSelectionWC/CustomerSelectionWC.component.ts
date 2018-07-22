import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {
    MagicModalInterface
} from "@magic-xpa/angular";

@Component({
    selector: 'mga-CustomerSelectionWC',
    providers: [...magicProviders],
    styleUrls: ['./CustomerSelectionWC.component.css'],
    templateUrl: './CustomerSelectionWC.component.html'
}) export class CustomerSelectionWC extends TaskBaseMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "Select Customer";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 600;
    private static readonly height: number = 600;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
     X() {
        return CustomerSelectionWC.x;
    }
     Y() {
        return CustomerSelectionWC.y;
    }
     Width() {
        return CustomerSelectionWC.width;
    }
     Height() {
        return CustomerSelectionWC.height;
    }
     IsCenteredToWindow() {
        return CustomerSelectionWC.isCenteredToWindow;
    }
     FormName() {
        return CustomerSelectionWC.formName;
    }
     ShowTitleBar() {
        return CustomerSelectionWC.showTitleBar;
    }
     ShouldCloseOnBackgroundClick() {
        return CustomerSelectionWC.shouldCloseOnBackgroundClick;
    }
}
