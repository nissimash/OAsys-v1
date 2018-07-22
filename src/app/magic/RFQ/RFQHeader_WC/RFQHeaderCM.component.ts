import { Component } from "@angular/core";

import { 
	TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQHeaderCM",
    providers: [...magicProviders],
	styleUrls: ["./RFQHeaderCM.component.css"],
	templateUrl: "./RFQHeaderCM.component.html"
})
export class RFQHeaderCM extends TaskBaseMagicComponent {}
