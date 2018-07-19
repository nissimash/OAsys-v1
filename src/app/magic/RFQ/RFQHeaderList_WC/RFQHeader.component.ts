import { Component } from "@angular/core";

import {
	TaskBaseMagicComponent,
    magicProviders

} from "@magic-xpa/angular";
@Component({
	selector: 'mga-RFQHeader',
    providers: [...magicProviders],
	styleUrls: ['./RFQHeader.component.css'],
	templateUrl: './RFQHeader.component.html'
})
export class RFQHeader extends TaskBaseMagicComponent { }
