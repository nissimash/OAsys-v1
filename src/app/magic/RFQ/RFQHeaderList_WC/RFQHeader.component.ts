import { Component } from "@angular/core";

import {
	Title
} from '@angular/platform-browser';

import { BaseTaskMagicComponent } from "@magic-xpa/angular";;

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService, MgTableService
} from "@magic-xpa/angular";
@Component({
	selector: 'mga-RFQHeader',
	providers: [TaskMagicService, MgSubformService, MgTableService],
	styleUrls: ['./RFQHeader.component.css'],
	templateUrl: './RFQHeader.component.html'
})
export class RFQHeader extends BaseTaskMagicComponent { }
