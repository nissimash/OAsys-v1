// import {
//     Component
// } from '@angular/core';
// import {
//     Title
// } from '@angular/platform-browser';
// import {
//     TaskBaseMagicComponent
// } from "@magic-xpa/angular";;
// import {
//     TaskMagicService,
//     ComponentListMagicService,
//     CommandsCollectorMagicService,
//     SubformMagicService,
//     TableMagicService
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
// // import {
// //     TableMagicService
// // } from "@magic-xpa/angular-angular";
// import {
//     MgMatTableService
// } from "@magic-xpa/angular-material-core";
// @Component({
//     selector: 'mga-RFQList',
//     providers: [TaskMagicService, SubformMagicService, MgMatTableService],
//     styleUrls: ['./RFQList.component.css'],
//     templateUrl: './RFQList.component.html'
// }) export class RFQList extends TaskBaseMagicComponent {
//     @ViewChild(MatPaginator) paginator: MatPaginator;
//     @ViewChild(MatSort) sort: MatSort;
//     displayedColumns = ['RFQID',
//         'QuotedTo',
//         'Status',
//         'RevisionNo',
//         'Quote Date',
//         'Quote Due',
//         'Customer #',
//     ];
//     dataSource = new MatTableDataSource<Element>(this.task.Records.list);
//     selection = new SelectionModel<Element>(false, []);
//     constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
//         public task: TaskMagicService, protected subformService: SubformMagicService, protected titleService: TitleMagicService, public tableService: MgMatTableService, protected componentList: ComponentListMagicService) {
//         super(ref, task, subformService, titleService, tableService);
//     }
//     ngOnInit() {
//         super.ngOnInit();
//         this.tableService.connect(this.dataSource, this.paginator, this.selection, this.dialog);
//     }
// }