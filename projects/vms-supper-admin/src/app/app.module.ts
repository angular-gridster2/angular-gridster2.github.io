import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/_root/app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ManageCustomerInformationComponent } from './components/manage-customer-information/manage-customer-information.component';
import { ManageApproveWebsiteComponent } from './components/manage-approve-website/manage-approve-website.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ImportComponentComponent } from './components/import-component/import-component.component';
import { AddMemberComponent } from './components/user-management/add-member/add-member.component';
import { EditMemberComponent } from './components/user-management/edit-member/edit-member.component';
import { RoleManagementComponent } from './components/user-management/role-management/role-management.component';
import { DetailComponent } from './components/manage-approve-website/detail/detail.component';
import { CustomerInformationComponent } from './components/manage-customer-information/customer-information/customer-information.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ViewReportComponent,
    HomeComponent,
    SigninComponent,
    ResetPasswordComponent,
    ManageCustomerInformationComponent,
    ManageApproveWebsiteComponent,
    OrderDetailComponent,
    UserManagementComponent,
    ImportComponentComponent,
    AddMemberComponent,
    EditMemberComponent,
    RoleManagementComponent,
    DetailComponent,
    CustomerInformationComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
