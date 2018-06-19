import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService, MgTableService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-PartsListViewWC",
	providers: [TaskMagicService,MgSubformService, MgTableService],
	styleUrls: ["./PartsListViewWC.component.css"],
	templateUrl: "./PartsListViewWC.component.html"
})
export class PartsListViewWC extends BaseTaskMagicComponent {}
