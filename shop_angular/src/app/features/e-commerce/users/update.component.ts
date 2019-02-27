import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { CommonService } from "@app/core/services";

import { config } from "@app/core/smartadmin.config";

@Component({
  selector: "app-order-update",
  templateUrl: "./update.component.html"
})
export class UpdateComponent implements OnInit {
  order_id: any;
  url = config.frontend_api_url + "order/get";
  constructor(
    private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}
  public validationOptions = {
    rules : {
      amazon_order_id : {
        required : true
      },
      ip : {
        required : true
      },
      email : {
        required : true,
        email : true
      },
      phone : {
        required : true
      },
      status : {
        required : true
      },
      remark : {
        required : true
      },
      order_details : {
        required : true,
      },
    },

    // Messages for form validation
    messages : {
      amazon_order_id : {
        required : 'Please enter your amazon order id'
      },
      ip : {
        required : 'Please enter your ip'
      },
      email : {
        required : 'Please enter your email address',
        email : 'Please enter a VALID email address'
      },
      phone : {
        required : 'Please enter your phone number'
      },
      status : {
        required : 'Please select status'
      },
      remark : {
        required : 'Please enter remark'
      },
      order_details : {
        required : 'Please enter order_details'
      },
     
    },
    submitHandler: this.save

  };

  ngOnInit() {
    /* get url variables */
    this.activatedroute.params.subscribe(params => {
      this.order_id = params.id;
    });
    console.log(this.order_id);
    /*  this.commonservice.get('order/get').subscribe(res=>{
      this.orders = res.order;
      console.log(this.orders);
    }); */
  }
  save(){
    console.log('form submit');
    this.router.navigate(['/e-commerce/orders']);
  }
}
