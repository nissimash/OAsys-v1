import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-Attachment",
	providers: [TaskMagicService],
	styleUrls: ["./Attachment.component.css"],
	templateUrl: "./Attachment.component.html"
})
export class Attachment extends BaseTaskMagicComponent {}
