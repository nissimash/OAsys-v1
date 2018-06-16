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
    selector: 'mga-DisplayProductConfig',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./DisplayProductConfig.component.css'],
    templateUrl: './DisplayProductConfig.component.html'
}) export class DisplayProductConfig extends BaseModalComponent {
    private static readonly formName: string = "DisplayProductConfig";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    get X() {
        return DisplayProductConfig.x;
    }
    get Y() {
        return DisplayProductConfig.y;
    }
    get Width() {
        return DisplayProductConfig.width;
    }
    get Height() {
        return DisplayProductConfig.height;
    }
    get IsCenteredToWindow() {
        return DisplayProductConfig.isCenteredToWindow;
    }
    get FormName() {
        return DisplayProductConfig.formName;
    }
    get ShowTitleBar() {
        return DisplayProductConfig.showTitleBar;
    }
    get ShouldCloseOnBackgroundClick() {
        return DisplayProductConfig.shouldCloseOnBackgroundClick;
    }
}