import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePagesComponent } from './components/private-pages/private-pages.component'
import { PublicPagesComponent } from './components/public-pages/public-pages.component'

const routes: Routes = [
  { path: 'private', component: PrivatePagesComponent },
  { path: 'public', component: PublicPagesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
