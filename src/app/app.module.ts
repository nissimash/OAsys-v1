import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }         from "@angular/common";


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'


// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatIconModule
} from "@angular/material";

import { DynamicModule } from 'ng-dynamic-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentListService, MagicModule } from "@magic-xpa/angular";
import {magicGenComponents, magicGenCmpsHash, title} from './magic/component-list.g';
import { MagicAngularMaterialModule } from "@magic-xpa/angular-material-core";
import { LoginService } from './login.service';
import {routes} from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    // Magic Modules

    //AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
     MagicModule.forRoot(),
     MagicAngularMaterialModule,
    //MagicGenLibModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{
      useHash : true
    }),

    // Magic Modules
    MagicModule,
    DynamicModule.withComponents(magicGenComponents),
    InfiniteScrollModule,

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ...magicGenComponents
  ],
  providers: [
  LoginService,
   /// { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(componentList: ComponentListService) {
    componentList.addComponents(magicGenCmpsHash);
    componentList.title = title;

  }
}
