import { Component } from "@angular/core";

import { BaseTaskMagicComponent, MgTitleService } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService, MgTableService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-CustomerMaster",
	providers: [TaskMagicService, MgSubformService, MgTitleService, MgTableService],
	styleUrls: ["./CustomerMaster.component.css"],
	templateUrl: "./CustomerMaster.component.html"
})
export class CustomerMaster extends BaseTaskMagicComponent {}
