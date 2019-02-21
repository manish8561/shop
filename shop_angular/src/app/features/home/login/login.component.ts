import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FlashMessagesService } from "angular2-flash-messages";

import { CommonService } from "@app/core/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./../home.component.css"]
})
export class LoginComponent implements OnInit {
  validatorOptions = {
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      password: {
        group: ".smart-form",
        validators: {
          notEmpty: {
            message: "The password is required"
          },
          stringLength: {
            min: 8,
            message: "The password must be greater than 8 characters long"
          }
        }
      },
      email: {
        group: ".smart-form",
        validators: {
          notEmpty: {
            message: "The email is required"
          },
          emailAddress: {
            message: "The value is not a valid email address"
          }
        }
      }
    }
  };
  validatorOptions2 = {
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      password: {
        group: ".register-form",
        validators: {
          notEmpty: {
            message: "The password is required"
          },
          stringLength: {
            min: 8,
            message: "The password must be greater than 8 characters long"
          }
        }
      },
      email: {
        group: ".register-form",
        validators: {
          notEmpty: {
            message: "The email is required"
          },
          emailAddress: {
            message: "The value is not a valid email address"
          }
        }
      },
      name: {
        group: ".register-form",
        validators: {
          notEmpty: {
            message: "The name is required"
          },
          stringLength: {
            min: 4,
            message: "The name must be greater than 4 characters long"
          }
        }
      }
    }
  };
  constructor(
    private router: Router,
    private commonservice: CommonService,
    private _flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("logged") === "yes") {
      this.router.navigate(["/home/dashboard"]);
    }
  }

  login(form) {
    // console.log(form);
    if (form.invalid) {
      this._flashMessagesService.show("Email or password is invalid!", {
        cssClass: "alert-danger",
        timeout: 2000
      });
    } else {
      const data = form.value;
      this.commonservice.post("user/login", data).subscribe(
        res => {
          if (res.user) {
            delete res.user.password;
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("login_token", res.token);
            localStorage.setItem("logged", "yes");
            if (res.user.role === "admin") {
              this.router.navigate(["/dashboard/analytics"]);
            } else {
              this.router.navigate(["/home/dashboard"]);
            }
          }
        },
        error => {
          // console.log(error);
          this._flashMessagesService.show("Email or password is invalid!", {
            cssClass: "alert-danger",
            timeout: 2000
          });
        }
      );
    }
  }
  register(form) {
    if (form.invalid) {
      this._flashMessagesService.show("Email or password is invalid!", {
        cssClass: "alert-danger",
        timeout: 3000
      });
    } else {
      const data = form.value;
      this.commonservice.post("user/add", data).subscribe(
        res => {
          if (res.user) {
            delete res.user.password;
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("login_token", res.token);
            localStorage.setItem("logged", "yes");
            this.router.navigate(["/home/dashboard"]);
          } else {
            this._flashMessagesService.show("Email already exists!", {
              cssClass: "alert-danger",
              timeout: 2000
            });
          }
        },
        error => {
          // console.log(error);
          this._flashMessagesService.show("Email or password is invalid!", {
            cssClass: "alert-danger",
            timeout: 2000
          });
        }
      );
    }
  }
}
