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
// import {
//     MgTableService
// } from "@magic-xpa/angular-angular";
import {
    MgMatTableService
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-RFQList',
    providers: [TaskMagicService, MgSubformService, MgMatTableService],
    styleUrls: ['./RFQList.component.css'],
    templateUrl: './RFQList.component.html'
}) export class RFQList extends BaseTaskMagicComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['RFQID',
        'QuotedTo',
        'Status',
        'RevisionNo',
        'Quote Date',
        'Quote Due',
        'Customer #',
    ];
    dataSource = new MatTableDataSource<Element>(this.task.Records.list);
    selection = new SelectionModel<Element>(false, []);
    constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
        public task: TaskMagicService, protected subformService: MgSubformService, public tableService: MgMatTableService, protected componentList: ComponentListService, protected titleService: Title) {
        super(ref, task, subformService, tableService, titleService);
    }
    ngOnInit() {
        super.ngOnInit();
        this.tableService.connect(this.dataSource, this.paginator, this.selection, this.dialog);
    }
}