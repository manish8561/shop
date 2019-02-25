import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ProfileEditComponent } from "./terms-modal/profile-edit.component";
import { ChangePasswordComponent } from "./terms-modal/change-password";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "profile-edit",
    component: ProfileEditComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
