import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseModalComponent
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-PartsListSelectionWC',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./PartsListSelectionWC.component.css'],
    templateUrl: './PartsListSelectionWC.component.html'
}) export class PartsListSelectionWC extends BaseModalComponent {
    private static readonly formName: string = "PartsListSelectionWC";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 900;
    private static readonly height: number = 650;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    get X() {
        return PartsListSelectionWC.x;
    }
    get Y() {
        return PartsListSelectionWC.y;
    }
    get Width() {
        return PartsListSelectionWC.width;
    }
    get Height() {
        return PartsListSelectionWC.height;
    }
    get IsCenteredToWindow() {
        return PartsListSelectionWC.isCenteredToWindow;
    }
    get FormName() {
        return PartsListSelectionWC.formName;
    }
    get ShowTitleBar() {
        return PartsListSelectionWC.showTitleBar;
    }
    get ShouldCloseOnBackgroundClick() {
        return PartsListSelectionWC.shouldCloseOnBackgroundClick;
    }
}