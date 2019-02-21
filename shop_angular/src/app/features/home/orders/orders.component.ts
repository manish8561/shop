import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { CommonService } from "@app/core/services";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styles: ["./../home.component.css"]
})
export class OrdersComponent implements OnInit {
  bsModalRef: BsModalRef;
  public termsAgreed = false;
  loggedUser: any;
  orders:any;
  constructor(
    private router: Router,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private commonservice: CommonService
  ) {
    if (localStorage.getItem("logged") !== "yes") {
      // console.log('hit by login');
      this.router.navigate(["/home/login"]);
    } else {
      this.loggedUser = JSON.parse(localStorage.getItem("user"));
    }
  }

  ngOnInit() {
    this.ngxService.startLoader('loader-01');
   
    this.commonservice
      .get("order/user/" + this.loggedUser["_id"])
      .subscribe(res => {
        this.orders = res.order;
        this.ngxService.stopLoader('loader-01');
      });
  }

  openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this.modalService.show(template);
  }

  onTermsAgree() {
    this.termsAgreed = true;
    this.bsModalRef.hide();
  }

  onTermsClose() {
    this.bsModalRef.hide();
  }
}
