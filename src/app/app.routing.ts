import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import {MagicRouterContainer} from '@magic-xpa/angular';
import {DashboardComponent} from './views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    //loadChildren: './views/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'RFQHeaderList',
    component: MagicRouterContainer,
    data: {
      title: 'RFQHeaderList'
    }
  },
  {
    path: 'RFQHeader',
    component: MagicRouterContainer,
  },
  {
    path: 'aa',
    redirectTo: 'RFQHeaderList',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'xx',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
