import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { CommonService } from "@app/core/services";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html"
})
export class AddComponent {
  loggedUser: any;
  constructor(
    private router: Router,
    private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService
  ) {
    if (localStorage.getItem("logged") !== "yes") {
      // console.log('hit by login');
      this.router.navigate(["/home/login"]);
    } else {
      this.loggedUser = JSON.parse(localStorage.getItem("user"));
    }
  }
  save(amazon_order_id, phone, order_details) {
    if (amazon_order_id.trim() !== "" && phone.trim() !== "") {
      console.log(amazon_order_id, phone);

      let data = {
        amazon_order_id: amazon_order_id.trim(),
        phone: phone.trim(),
        order_details: amazon_order_id.trim(),
        orderBy: this.loggedUser["_id"]
      };
      if(order_details.trim()){
        data.order_details = order_details.trim();
      }
      this.commonservice.post("order/add", data).subscribe(
        res => {
          this._flashMessagesService.show("Your order is successfully added.", {
            cssClass: "success-danger",
            timeout: 2000
          });
          this.router.navigate(["/home/order"]);
        },
        err => {
          this._flashMessagesService.show("Some error while adding the order", {
            cssClass: "alert-danger",
            timeout: 2000
          });
          console.log(err);
        }
      );
    } else {
      this._flashMessagesService.show("Please add values in both fields!", {
        cssClass: "alert-danger",
        timeout: 2000
      });
    }
  }
}
