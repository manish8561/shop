import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from "angular2-flash-messages";

import { CommonService } from "@app/core/services";

import {config} from '@app/core/smartadmin.config';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders:any;
  url=config.frontend_api_url+'order/get';
  constructor(private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
   /*  this.commonservice.get('order/get').subscribe(res=>{
      this.orders = res.order;
      console.log(this.orders);
    }); */
  }

}
