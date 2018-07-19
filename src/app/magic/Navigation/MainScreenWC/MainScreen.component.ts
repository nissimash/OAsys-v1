import { Component } from "@angular/core";

import { TaskBaseMagicComponent, TitleMagicService } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListMagicService,
	CommandsCollectorMagicService,
	SubformMagicService, TableMagicService
} from "@magic-xpa/angular";

@Component({
	selector: "mga-MainScreen",
	providers: [TaskMagicService, SubformMagicService, TitleMagicService, TableMagicService],
	styleUrls: ["./MainScreen.component.css"],
	templateUrl: "./MainScreen.component.html"
})
export class MainScreen extends TaskBaseMagicComponent {}
