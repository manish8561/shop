
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";


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
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: { pageTitle: "Dashboard" }
  },
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule',
    data: { pageTitle: "User Orders" }
  },
  {
    path:'contact',
    component:ContactComponent
  }
  
];

export const routing = RouterModule.forChild(routes);
