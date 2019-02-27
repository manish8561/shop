
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {ProductsViewComponent} from "./products-view/products-view.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import { UpdateComponent } from "./orders/update.component";
import { UsersComponent } from "./users/users.component";

export const routes:Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'order-update/:id',
    component: UpdateComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'products-view',
    component: ProductsViewComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  }
];

export const routing = RouterModule.forChild(routes)
