import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from "./orders.component";
import { AddComponent } from './components/add.component';


const routes: Routes = [
  {
  path: '',
  component: OrdersComponent,
}, {
  path: 'add',
  component: AddComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrdersRoutingModule { }
