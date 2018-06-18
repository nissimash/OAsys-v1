import {    Component} from '@angular/core';

import {
    Title
} from '@angular/platform-browser';

import {    BaseTaskMagicComponent} from "@magic-xpa/angular";;

import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-CustomerRegisterWC',
    providers: [TaskMagicService, MgSubformService],
    styleUrls: ['./CustomerRegisterWC.component.css'],
    templateUrl: './CustomerRegisterWC.component.html'
}) export class CustomerRegisterWC extends BaseTaskMagicComponent {}