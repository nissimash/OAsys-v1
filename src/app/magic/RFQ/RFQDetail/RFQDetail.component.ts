// import {
//     Component
// } from '@angular/core';
// import {
//     Title
// } from '@angular/platform-browser';
// import {
//     BaseModalComponent, TitleMagicService
// } from "@magic-xpa/angular";
// import {
//     TaskMagicService,
//     ComponentListMagicService,
//     CommandsCollectorMagicService,
//     SubformMagicService,
//     TableMagicService
// } from "@magic-xpa/angular";
// @Component({
//     selector: 'mga-RFQDetail',
//     providers: [TaskMagicService, SubformMagicService, TitleMagicService, TableMagicService],
//     styleUrls: ['./RFQDetail.component.css'],
//     templateUrl: './RFQDetail.component.html'
// }) export class RFQDetail extends BaseModalComponent {
//     private static readonly formName: string = "RFQDetail";
//     private static readonly showTitleBar: boolean = true;
//     private static readonly x: number = 0;
//     private static readonly y: number = 0;
//     private static readonly width: number = 650;
//     private static readonly height: number = 500;
//     private static readonly isCenteredToWindow: boolean = true;
//     private static readonly shouldCloseOnBackgroundClick = true;
//     get X() {
//         return RFQDetail.x;
//     }
//     get Y() {
//         return RFQDetail.y;
//     }
//     get Width() {
//         return RFQDetail.width;
//     }
//     get Height() {
//         return RFQDetail.height;
//     }
//     get IsCenteredToWindow() {
//         return RFQDetail.isCenteredToWindow;
//     }
//     get FormName() {
//         return RFQDetail.formName;
//     }
//     get ShowTitleBar() {
//         return RFQDetail.showTitleBar;
//     }
//     get ShouldCloseOnBackgroundClick() {
//         return RFQDetail.shouldCloseOnBackgroundClick;
//     }
// }