import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "@app/core/services";

import { FlashMessagesService } from "angular2-flash-messages";
@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html"
})
export class ChangePasswordComponent implements OnInit {
  loggedUser: any;

  constructor(
    private router: Router,
    private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService
  ) {
    if (localStorage.getItem("logged") !== "yes") {
      // console.log('hit by login');
      this.router.navigate(["/home/login"]);
    }
    this.loggedUser = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() {}
  save(form){
    if (form.invalid) {
      this._flashMessagesService.show("Both fields should not be empty!", {
        cssClass: "alert-danger",
        timeout: 2000
      });
    } else {
      const data = form.value;
      if(data.password !== data.cnf_password){
        this._flashMessagesService.show("Password and confrim password does not match.", {
          cssClass: "alert-danger",
          timeout: 2000
        });
      } else {
        console.log(data);
      }
      
    /*  this.commonservice.get('user/get').subscribe(res=>{
      console.log(res);
    }); */
    }
  }
}
