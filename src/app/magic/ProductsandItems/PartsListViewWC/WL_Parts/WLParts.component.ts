import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseTaskMagicComponent
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService, 
    MgTableService
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
    selector: 'mga-WLParts',
    providers: [TaskMagicService, MgSubformService, MgMatTableService],
    styleUrls: ['./WLParts.component.css'],
    templateUrl: './WLParts.component.html'
}) export class WLParts extends BaseTaskMagicComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['Source',
        'Item NO',
        'Description',
        'Legacy',
        'UOM',
        'CommodityCode',
        'ListPrice',
        'MakeBuy',
    ];
    dataSource = new MatTableDataSource < Element > (this.task.Records.list);
    selection = new SelectionModel < Element > (false, []);
    constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
        public task: TaskMagicService, protected subformService: MgSubformService, public tableService: MgMatTableService, protected componentList: ComponentListService, protected titleService: Title) {
        super(ref, task, subformService, tableService,  titleService);
    }
    ngOnInit() {
        super.ngOnInit();
        this.tableService.connect(this.dataSource, this.paginator, this.selection, this.dialog);
    }
}