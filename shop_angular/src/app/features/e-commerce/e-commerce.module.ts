import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersComponent } from "./orders/orders.component";
import { ProductsViewComponent } from "./products-view/products-view.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { routing } from "./e-commerce.routing";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CarouselModule } from "ngx-bootstrap";
import { SmartadminLayoutModule } from "@app/shared/layout";
import { SmartadminWidgetsModule } from "@app/shared/widgets/smartadmin-widgets.module";
import { StatsModule } from "@app/shared/stats/stats.module";
import { SmartadminDatatableModule } from "@app/shared/ui/datatable/smartadmin-datatable.module";
import { SmartadminValidationModule } from "@app/shared/forms/validation/smartadmin-validation.module";
import { SmartadminInputModule } from "@app/shared/forms/input/smartadmin-input.module";

import { FlashMessagesModule } from "angular2-flash-messages";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule } from '@angular/forms';

import { UpdateComponent } from "./orders/update.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  imports: [
    CommonModule,

    routing,

    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    SmartadminInputModule,
    CarouselModule,
    FlashMessagesModule.forRoot(),
    NgxUiLoaderModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ShoppingCartComponent,
    OrdersComponent,
    UpdateComponent,
    ProductsViewComponent,
    ProductDetailsComponent,
    UsersComponent
  ]
})
export class ECommerceModule {}
