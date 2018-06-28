import { Component } from "@angular/core";

import {     
	BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";

@Component({
	selector: "mga-PartsListViewWC",
    providers: [...magicProviders],
	styleUrls: ["./PartsListViewWC.component.css"],
	templateUrl: "./PartsListViewWC.component.html"
})
export class PartsListViewWC extends BaseTaskMagicComponent {}
