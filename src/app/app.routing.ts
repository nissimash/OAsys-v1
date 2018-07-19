import { Routes } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import {RouterContainerMagicComponent} from '@magic-xpa/angular';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { SecurityGuard } from "./security.guard";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    //loadChildren: './views/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'RFQHeaderList',
    canActivate: [SecurityGuard],
    component: RouterContainerMagicComponent,
    data: {
      title: 'RFQ Header List'
    }
  },
  {
    path: 'Login',
    component: RouterContainerMagicComponent,
  },
  {
    path: 'RFQHeader',
    canActivate: [SecurityGuard],
    component: RouterContainerMagicComponent,
  },
  {
    path: 'ProductConfig',
    canActivate: [SecurityGuard],
    component: RouterContainerMagicComponent,
  },
  {
    path: 'CostomerRegister',
    canActivate: [SecurityGuard],
    component: RouterContainerMagicComponent,
  },
  {
    path: 'PartsList',
    canActivate: [SecurityGuard],
    component: RouterContainerMagicComponent,
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
    path: 'login_old',
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
