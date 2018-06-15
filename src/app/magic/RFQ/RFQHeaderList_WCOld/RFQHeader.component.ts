import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQHeader",
	providers: [TaskMagicService],
	styleUrls: ["./RFQHeader.component.css"],
	templateUrl: "./RFQHeader.component.html"
})
export class RFQHeader extends BaseTaskMagicComponent {}
