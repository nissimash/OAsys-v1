import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
import {
    MagicModalInterface
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-PartsListSelectionWC',
    providers: [...matProviders],
    styleUrls: ['./PartsListSelectionWC.component.css'],
    templateUrl: './PartsListSelectionWC.component.html'
}) export class PartsListSelectionWC extends BaseMatTableComponent implements MagicModalInterface {
    private static readonly formName: string = "PartsListSelectionWC";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 900;
    private static readonly height: number = 650;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
     X() {
        return PartsListSelectionWC.x;
    }
     Y() {
        return PartsListSelectionWC.y;
    }
     Width() {
        return PartsListSelectionWC.width;
    }
     Height() {
        return PartsListSelectionWC.height;
    }
     IsCenteredToWindow() {
        return PartsListSelectionWC.isCenteredToWindow;
    }
     FormName() {
        return PartsListSelectionWC.formName;
    }
     ShowTitleBar() {
        return PartsListSelectionWC.showTitleBar;
    }
     ShouldCloseOnBackgroundClick() {
        return PartsListSelectionWC.shouldCloseOnBackgroundClick;
    }
}