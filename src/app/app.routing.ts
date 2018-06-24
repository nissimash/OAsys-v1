import { Routes } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import {MagicRouterContainer} from '@magic-xpa/angular';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { LoginGuardService } from './login.guard.service';
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
    component: MagicRouterContainer,
    data: {
      title: 'RFQ Header List'
    }
  },
  {
    path: 'login',
    component: MagicRouterContainer,
  },
  {
    path: 'RFQHeader',
    canActivate: [LoginGuardService],
    component: MagicRouterContainer,
  },
  {
    path: 'ProductConfig',
    canActivate: [SecurityGuard],
    component: MagicRouterContainer,
  },
  {
    path: 'CostomerRegister',
    canActivate: [SecurityGuard],
    component: MagicRouterContainer,
  },
  {
    path: 'PartsList',
    canActivate: [SecurityGuard],
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
