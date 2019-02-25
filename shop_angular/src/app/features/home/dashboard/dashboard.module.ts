import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TermsModalComponent } from './terms-modal/terms-modal.component';
import { ProfileEditComponent } from './terms-modal/profile-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SmartadminValidationModule } from '@app/shared/forms/validation/smartadmin-validation.module';
import { ChangePasswordComponent } from './terms-modal/change-password';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    SmartadminValidationModule
  ],
  exports: [],
  declarations: [DashboardComponent, TermsModalComponent, ProfileEditComponent, ChangePasswordComponent]
})
export class DashboardModule { }
