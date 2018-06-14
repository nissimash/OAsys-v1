import { Component } from "@angular/core";

import { BaseTaskMagicComponent } from "@magic-xpa/angular";

import {
	TaskMagicService,
	ComponentListService,
	CommandsCollector,
	MgSubformService
} from "@magic-xpa/angular";

import {
	MatPaginator,
	MatSort,
	MatTableDataSource,
	MatDialog
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { ViewChild } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {title} from '../../../component-list.g';

@Component({
	selector: "mga-CustRegList",
	providers: [TaskMagicService],
	styleUrls: ["./CustRegList.component.css"],
	templateUrl: "./CustRegList.component.html"
})
export class CustRegList extends BaseTaskMagicComponent {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	displayedColumns = ["Customer Id", "Customer Name", "Address", "Currency"];
	constructor(
		public dialog: MatDialog,
		protected ref: ChangeDetectorRef,
		public task: TaskMagicService,
		public mgSub: MgSubformService,
		protected componentList: ComponentListService
	) {
		super(
			ref,
			task,
			mgSub,
			componentList
		);
	}
	dataSource = new MatTableDataSource<Element>(this.task.Records.list);
	selection = new SelectionModel<Element>(false, []);

	refreshDataSource() {
		this.dataSource.data = this.task.Records.list;
		this.dataSource.paginator = this.paginator;
	}

	getPageSize(): number {
		return this.paginator.pageSize;
	}

	selectRow(rowId: string): void {
		this.selection.select(this.task.Records.list[rowId]);
	}

	GetDialog(): any {
		return this.dialog;
	}
}
