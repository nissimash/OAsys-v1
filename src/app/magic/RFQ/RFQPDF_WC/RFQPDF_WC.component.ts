import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQPDF_WC",
	providers: [TaskMagicService],
	styleUrls: ["./RFQPDF_WC.component.css"],
	templateUrl: "./RFQPDF_WC.component.html"
})
export class RFQPDF_WC extends BaseTaskMagicComponent {}
