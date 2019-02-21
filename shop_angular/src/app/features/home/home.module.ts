import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { routing } from "./home.routing";
import { HomeComponent } from './home.component';

import { ContactComponent } from './contact/contact.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NotfoundComponent } from './errors/notfound.component';
import { SmartadminValidationModule } from '@app/shared/forms/validation/smartadmin-validation.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    SmartadminValidationModule,
    FlashMessagesModule.forRoot(),
  ],
  declarations: [HomeComponent, ContactComponent, ForgotComponent, NotfoundComponent],
  exports: []
})
export class HomeModule { }
