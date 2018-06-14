import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-CustomerSelectionWC",
	providers: [TaskMagicService,MgSubformService],
	styleUrls: ["./CustomerSelectionWC.component.css"],
	templateUrl: "./CustomerSelectionWC.component.html"
})
export class CustomerSelectionWC extends BaseTaskMagicComponent {}
