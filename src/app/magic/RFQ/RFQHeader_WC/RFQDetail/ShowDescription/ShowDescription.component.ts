import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    TaskBaseMagicComponent
} from "@magic-xpa/angular";
import {
    TaskMagicService,
    ComponentListMagicService,
    CommandsCollectorMagicService,
    SubformMagicService,
    TitleMagicService,
    TableMagicService
} from "@magic-xpa/angular";
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
    MatDialog
} from '@angular/material';
import {
    SelectionModel
} from '@angular/cdk/collections';
import {
    ViewChild
} from "@angular/core";
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    MgMatTableService
} from "@magic-xpa/angular-material-core";
import {
    Router,
    ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'mga-ShowDescription',
    providers: [TaskMagicService, SubformMagicService,  TitleMagicService, MgMatTableService],
    styleUrls: ['./ShowDescription.component.css'],
    templateUrl: './ShowDescription.component.html'
}) export class ShowDescription extends TaskBaseMagicComponent {}