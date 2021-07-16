import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImportComponentComponent } from './components/import-component/import-component.component';
import { ManageApproveWebsiteComponent } from './components/manage-approve-website/manage-approve-website.component';
import { ManageCustomerInformationComponent } from './components/manage-customer-information/manage-customer-information.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'import-component',
    component: ImportComponentComponent,
  },
  {
    path: 'manage-approve-website',
    component: ManageApproveWebsiteComponent,
  },
  {
    path: 'manage-customer-information',
    component: ManageCustomerInformationComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
