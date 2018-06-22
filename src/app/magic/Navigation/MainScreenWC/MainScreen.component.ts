import { Component } from "@angular/core";

import { BaseTaskMagicComponent, MgTitleService } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService, MgTableService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-MainScreen",
	providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
	styleUrls: ["./MainScreen.component.css"],
	templateUrl: "./MainScreen.component.html"
})
export class MainScreen extends BaseTaskMagicComponent {}
