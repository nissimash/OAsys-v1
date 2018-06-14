import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-CustomerMaster",
	providers: [TaskMagicService, MgSubformService],
	styleUrls: ["./CustomerMaster.component.css"],
	templateUrl: "./CustomerMaster.component.html"
})
export class CustomerMaster extends BaseTaskMagicComponent {}
