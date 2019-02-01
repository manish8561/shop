
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './forgot/forgot.module#ForgotModule'
  },
  {
    path: 'locked',
    loadChildren: './locked/locked.module#LockedModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
  ,
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule'
  }
];

export const routing = RouterModule.forChild(routes);
