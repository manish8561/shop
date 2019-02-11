import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from "./home.routing";
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [HomeComponent, ContactComponent],
  exports: []
})
export class HomeModule { }
