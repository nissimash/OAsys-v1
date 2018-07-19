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
    selector: 'mga-ProductConfigSelection',
    providers: [...magicProviders],
    styleUrls: ['./ProductConfigSelection.component.css'],
    templateUrl: './ProductConfigSelection.component.html'
}) export class ProductConfigSelection extends TaskBaseMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "ProductConfigSelection";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 1000;
    private static readonly height: number = 700;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return ProductConfigSelection.x;
    }
    Y() {
        return ProductConfigSelection.y;
    }
    Width() {
        return ProductConfigSelection.width;
    }
    Height() {
        return ProductConfigSelection.height;
    }
    IsCenteredToWindow() {
        return ProductConfigSelection.isCenteredToWindow;
    }
    FormName() {
        return ProductConfigSelection.formName;
    }
    ShowTitleBar() {
        return ProductConfigSelection.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ProductConfigSelection.shouldCloseOnBackgroundClick;
    }
}