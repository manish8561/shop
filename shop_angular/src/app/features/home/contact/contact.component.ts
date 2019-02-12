import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../home.component.css']
})
export class ContactComponent implements OnInit {
  validatorOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      name: {
        group: '.col-md-6',
        validators: {
          notEmpty: {
            message: 'The name is required'
          },
          stringLength: {
            max: 50,
            message: 'The name must be less than 50 characters long'
          }
        }
      },
      email: {
        group: '.col-md-6',
        validators: {
          notEmpty: {
            message: 'The email is required'
          },
          emailAddress: {
            message: 'The value is not a valid email address'
          }
        }
      },
      message: {
        group: '.col-md-12',
        validators: {
          notEmpty: {
            message: 'The message is required'
          },
          stringLength: {
            max: 200,
            message: 'The message must be less than 200 characters long'
          }
        }
      },
      subject: {
        group: '.col-md-12',
        validators: {
          notEmpty: {
            message: 'The subject is required'
          },
          stringLength: {
            max: 80,
            message: 'The subject must be less than 80 characters long'
          }
        }
      },
    }
  };

  constructor(private router: Router,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() { }

  save(form) {
    if (!form.invalid) {
      const data = form.value;
      console.log(data);
      console.log('submitted');
      form.reset();
      this._flashMessagesService.show('Thanks for contact us!', { cssClass: 'alert-success', timeout: 2000 });
    }
  }

}
