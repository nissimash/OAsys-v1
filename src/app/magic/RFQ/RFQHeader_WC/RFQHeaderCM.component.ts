import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector, 
	MgSubformService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQHeaderCM",
	providers: [TaskMagicService, MgSubformService],
	styleUrls: ["./RFQHeaderCM.component.css"],
	templateUrl: "./RFQHeaderCM.component.html"
})
export class RFQHeaderCM extends BaseTaskMagicComponent {}
