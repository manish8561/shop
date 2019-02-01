import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeaderModule } from "./header/header.module";

import { FooterComponent } from "./footer/footer.component";
import { NavigationModule } from "./navigation/navigation.module";
import { RibbonComponent } from "./ribbon/ribbon.component";
import { ShortcutComponent } from "./shortcut/shortcut.component";
import { ToggleActiveDirective } from "../utils/toggle-active.directive";
import { LayoutSwitcherComponent } from "./layout-switcher.component";
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { RouterModule } from "@angular/router";
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import { HomeLayoutComponent } from './app-layouts/home-layout.component';
import { FheaderComponent } from '../../features/home/fheader/fheader.component';
import { FfooterComponent } from '../../features/home/ffooter/ffooter.component';
import { SidebarComponent } from '../../features/home/sidebar/sidebar.component';
import { TooltipModule, BsDropdownModule } from "ngx-bootstrap";
import { RouteBreadcrumbsComponent } from './ribbon/route-breadcrumbs.component';
import { UtilsModule } from "../utils/utils.module";


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    FormsModule,
    RouterModule,

    UtilsModule,

    TooltipModule,
    BsDropdownModule,
  ],
  declarations: [
    FooterComponent,
    RibbonComponent,
    ShortcutComponent,
    LayoutSwitcherComponent,
    MainLayoutComponent,
    EmptyLayoutComponent,
    AuthLayoutComponent,
    HomeLayoutComponent,
    FheaderComponent,
    FfooterComponent,
    SidebarComponent,
    RouteBreadcrumbsComponent,
  ],
  exports: [
    HeaderModule,
    NavigationModule,
    FooterComponent,
    RibbonComponent,
    ShortcutComponent,
    LayoutSwitcherComponent,
    FheaderComponent,
    FfooterComponent,
    SidebarComponent,
  ]
})
export class SmartadminLayoutModule {

}
