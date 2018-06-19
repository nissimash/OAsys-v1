import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService, MgTableService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-MainScreen",
	providers: [TaskMagicService, MgSubformService, MgTableService],
	styleUrls: ["./MainScreen.component.css"],
	templateUrl: "./MainScreen.component.html"
})
export class MainScreen extends BaseTaskMagicComponent {}
