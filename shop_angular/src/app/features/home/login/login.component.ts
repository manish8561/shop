import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../home.component.css']
})
export class LoginComponent implements OnInit {
  validatorOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      password: {
        group: '.smart-form',
        validators: {
          notEmpty: {
            message: 'The password is required'
          },
          stringLength: {
            min: 8,
            message: 'The password must be greater than 8 characters long'
          }
        }
      },
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
  validatorOptions2 = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      password: {
        group: '.register-form',
        validators: {
          notEmpty: {
            message: 'The password is required'
          },
          stringLength: {
            min: 8,
            message: 'The password must be greater than 8 characters long'
          }
        }
      },
      email: {
        group: '.register-form',
        validators: {
          notEmpty: {
            message: 'The email is required'
          },
          emailAddress: {
            message: 'The value is not a valid email address'
          }
        }
      },
      name: {
        group: '.register-form',
        validators: {
          notEmpty: {
            message: 'The name is required'
          },
          stringLength: {
            min: 4,
            message: 'The name must be greater than 4 characters long'
          }
        }
      },
    }
  };
  constructor(private router: Router,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    if (localStorage.getItem('logged') === 'yes') {
      this.router.navigate(['/home/dashboard'])
    }
  }

  login(form) {
    console.log(form);
    if(form.invalid){
      this._flashMessagesService.show('Email or password is invalid!', { cssClass: 'alert-danger', timeout: 2000 });
    } else {
      localStorage.setItem('logged', 'yes');
      this.router.navigate(['/home/dashboard']);
    }
  }
  register(form){
    console.log(form);
    if(form.invalid){
      this._flashMessagesService.show('Email or password is invalid!', { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      localStorage.setItem('logged', 'yes');
      this.router.navigate(['/home/dashboard']);
      
    }
  }

}
