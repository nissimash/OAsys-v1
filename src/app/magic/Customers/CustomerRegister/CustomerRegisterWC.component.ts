import {    Component} from '@angular/core';

import {
    Title
} from '@angular/platform-browser';

import {    BaseTaskMagicComponent} from "@magic-xpa/angular";;

import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService, MgTableService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-CustomerRegisterWC',
    providers: [TaskMagicService, MgSubformService, MgTableService],
    styleUrls: ['./CustomerRegisterWC.component.css'],
    templateUrl: './CustomerRegisterWC.component.html'
}) export class CustomerRegisterWC extends BaseTaskMagicComponent {}