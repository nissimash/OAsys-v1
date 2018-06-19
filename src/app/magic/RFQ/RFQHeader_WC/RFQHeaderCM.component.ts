import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector, 
	MgSubformService, MgTableService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQHeaderCM",
	providers: [TaskMagicService, MgSubformService, MgTableService],
	styleUrls: ["./RFQHeaderCM.component.css"],
	templateUrl: "./RFQHeaderCM.component.html"
})
export class RFQHeaderCM extends BaseTaskMagicComponent {}
