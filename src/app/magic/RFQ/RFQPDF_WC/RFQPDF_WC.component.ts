import { Component } from "@angular/core";

import {     
	BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";

@Component({
	selector: "mga-RFQPDF_WC",
    providers: [...magicProviders],
	styleUrls: ["./RFQPDF_WC.component.css"],
	templateUrl: "./RFQPDF_WC.component.html"
})
export class RFQPDF_WC extends BaseTaskMagicComponent {}
