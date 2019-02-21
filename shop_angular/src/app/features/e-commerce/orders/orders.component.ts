import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from "angular2-flash-messages";

import { CommonService } from "@app/core/services";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders:any;
  constructor(private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.commonservice.get('order/get').subscribe(res=>{
      this.orders = res.order;
      console.log(this.orders);
    });
  }

}
