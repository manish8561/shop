import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./../home.component.css']
})
export class ForgotComponent implements OnInit {
  validatorOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      email: {
        group: '.smart-form',
        validators: {
          notEmpty: {
            message: 'The email is required'
          },
          emailAddress: {
            message: 'The value is not a valid email address'
          }
        }
      },

    }
  };
  constructor(private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
    if (form.invalid) {
      this._flashMessagesService.show('Email or password is invalid!', { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      this.router.navigate(['/home/login']);
    }

  }
}
