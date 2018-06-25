import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent
} from "@magic-xpa/angular";;
import {
    TaskMagicService,
    ComponentListService,
    CommandsCollector,
    MgSubformService,
    MgTitleService,
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
@Component({
    selector: 'mga-Attachment',
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgMatTableService],
    styleUrls: ['./Attachment.component.css'],
    templateUrl: './Attachment.component.html'
}) export class Attachment extends BaseTaskMagicComponent {
    pageEvent:any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['Document ID',
        'Document Name',
        'Extention',
    ];
    dataSource = new MatTableDataSource < Element > (this.task.Records.list);
    selection = new SelectionModel < Element > (false, []);
    constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
        public task: TaskMagicService, protected subformService: MgSubformService, protected titleService: MgTitleService, public tableService: MgMatTableService, protected componentList: ComponentListService) {
        super(ref, task, subformService, titleService, tableService);
    }
    ngOnInit() {
        super.ngOnInit();
        this.tableService.connect(this.dataSource, this.paginator, this.selection, this.dialog);
    }
}
