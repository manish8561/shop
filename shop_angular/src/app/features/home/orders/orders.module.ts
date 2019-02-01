import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { TermsModalComponent } from './components/terms-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AddComponent } from  './components/add.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
  ],
  exports: [],
  declarations: [OrdersComponent, TermsModalComponent, AddComponent]
})
export class OrdersModule { }
