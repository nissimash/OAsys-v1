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
    selector: 'mga-Notes',
    providers: [...magicProviders],
    styleUrls: ['./Notes.component.css'],
    templateUrl: './Notes.component.html'
}) export class Notes extends TaskBaseMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "Notes";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 500;
    private static readonly height: number = 240;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    X() {
        return Notes.x;
    }
    Y() {
        return Notes.y;
    }
    Width() {
        return Notes.width;
    }
    Height() {
        return Notes.height;
    }
    IsCenteredToWindow() {
        return Notes.isCenteredToWindow;
    }
    FormName() {
        return Notes.formName;
    }
    ShowTitleBar() {
        return Notes.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Notes.shouldCloseOnBackgroundClick;
    }
}