// import {
//     Component
// } from '@angular/core';
// import {
//     Title
// } from '@angular/platform-browser';
// import {
//     BaseTaskMagicComponent
// } from "@magic-xpa/angular";;
// import {
//     TaskMagicService,
//     ComponentListService,
//     CommandsCollector,
//     MgSubformService
// } from "@magic-xpa/angular";
// import {
//     MatPaginator,
//     MatSort,
//     MatTableDataSource,
//     MatDialog
// } from '@angular/material';
// import {
//     SelectionModel
// } from '@angular/cdk/collections';
// import {
//     ViewChild
// } from "@angular/core";
// import {
//     ChangeDetectorRef
// } from '@angular/core';
// import {
//     Router,
//     ActivatedRoute
// } from '@angular/router';
// @Component({
//     selector: 'mga-RFQList',
//     providers: [TaskMagicService, MgSubformService],
//     styleUrls: ['./RFQList.component.css'],
//     templateUrl: './RFQList.component.html'
// }) export class RFQList extends BaseTaskMagicComponent {
//     @ViewChild(MatPaginator) paginator: MatPaginator;
//     @ViewChild(MatSort) sort: MatSort;
//     displayedColumns = ['RFQID',
//         'QuotedTo',
//         'Status',
//         'RevisionNo',
//         'QuoteDate',
//         'QuoteDue',
//         'Customer #',
//     ];
//     constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
//         public task: TaskMagicService, protected subformService: MgSubformService, protected componentList: ComponentListService ) {
//         super(ref, task, subformService, componentList);
//     }

//     ngOnInit() {
//         super.ngOnInit();
//         alert("ngOnInit()");
//     }

//     dataSource = new MatTableDataSource < Element > (this.task.Records.list);
//     selection = new SelectionModel < Element > (false, []);
//     refreshDataSource() {
//         this.dataSource.data = this.task.Records.list;
//         this.dataSource.paginator = this.paginator;
//     }
//     getPageSize(): number {
//         return this.paginator.pageSize;
//     }
//     selectRow(rowId: string): void {
//         this.selection.select(this.task.Records.list[rowId]);
//     }
//     GetDialog(): any {
//         return this.dialog;
//     }
// }