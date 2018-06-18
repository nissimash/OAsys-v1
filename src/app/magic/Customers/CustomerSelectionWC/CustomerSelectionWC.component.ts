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
    selector: 'mga-CustomerSelectionWC',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./CustomerSelectionWC.component.css'],
    templateUrl: './CustomerSelectionWC.component.html'
}) export class CustomerSelectionWC extends BaseModalComponent {
    private static readonly formName: string = "Select Customer";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 600;
    private static readonly height: number = 600;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    get X() {
        return CustomerSelectionWC.x;
    }
    get Y() {
        return CustomerSelectionWC.y;
    }
    get Width() {
        return CustomerSelectionWC.width;
    }
    get Height() {
        return CustomerSelectionWC.height;
    }
    get IsCenteredToWindow() {
        return CustomerSelectionWC.isCenteredToWindow;
    }
    get FormName() {
        return CustomerSelectionWC.formName;
    }
    get ShowTitleBar() {
        return CustomerSelectionWC.showTitleBar;
    }
    get ShouldCloseOnBackgroundClick() {
        return CustomerSelectionWC.shouldCloseOnBackgroundClick;
    }
}