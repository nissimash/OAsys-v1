import {
    Component
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseModalComponent
} from "@magic-xpa/angular";
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
    selector: 'mga-CustomerAddressList',
    providers: [TaskMagicService, MgSubformService, MgTitleService, MgMatTableService],
    styleUrls: ['./CustomerAddressList.component.css'],
    templateUrl: './CustomerAddressList.component.html'
}) export class CustomerAddressList extends BaseModalComponent {
    pageEvent :any;
    private static readonly formName: string = "CustomerAddressList";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    get X() {
        return CustomerAddressList.x;
    }
    get Y() {
        return CustomerAddressList.y;
    }
    get Width() {
        return CustomerAddressList.width;
    }
    get Height() {
        return CustomerAddressList.height;
    }
    get IsCenteredToWindow() {
        return CustomerAddressList.isCenteredToWindow;
    }
    get FormName() {
        return CustomerAddressList.formName;
    }
    get ShowTitleBar() {
        return CustomerAddressList.showTitleBar;
    }
    get ShouldCloseOnBackgroundClick() {
        return CustomerAddressList.shouldCloseOnBackgroundClick;
    }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['Street1',
        'Street2',
        'Country',
        'State',
        'Postal code',
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
