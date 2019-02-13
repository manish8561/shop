import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SmartadminValidationModule } from '@app/shared/forms/validation/smartadmin-validation.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,    
    FlashMessagesModule.forRoot(),
    SmartadminValidationModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
