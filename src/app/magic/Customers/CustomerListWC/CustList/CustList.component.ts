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
//     TitleMagicService,
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
// import {
//     MgMatTableService
// } from "@magic-xpa/angular-material-core";
// import {
//     Router,
//     ActivatedRoute
// } from '@angular/router';
// @Component({
//     selector: 'mga-CustList',
//     providers: [TaskMagicService, SubformMagicService, TitleMagicService, MgMatTableService],
//     styleUrls: ['./CustList.component.css'],
//     templateUrl: './CustList.component.html'
// }) export class CustList extends TaskBaseMagicComponent {
//     pageEvent:any;
//     @ViewChild(MatPaginator) paginator: MatPaginator;
//     @ViewChild(MatSort) sort: MatSort;
//     displayedColumns = ['Customer Id',
//         'Customer Name',
//         'Address',
//         'Currency',
//     ];
//     dataSource = new MatTableDataSource < Element > (this.task.Records.list);
//     selection = new SelectionModel < Element > (false, []);
//     constructor(public dialog: MatDialog, protected ref: ChangeDetectorRef,
//         public task: TaskMagicService, protected subformService: SubformMagicService, protected titleService: TitleMagicService, public tableService: MgMatTableService, protected componentList: ComponentListMagicService) {
//         super(ref, task, subformService, titleService, tableService);
//     }

//     ngOnInit() {
//         super.ngOnInit();
//         this.tableService.connect(this.dataSource, this.paginator, this.selection, this.dialog);
//     }
// }
