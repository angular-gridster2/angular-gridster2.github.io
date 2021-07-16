// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPwdComponent } from './components/reset-pwd/reset.component';
import { WebsiteComponent } from './components/website/website.component';
import { SiteDetail } from './components/site-detail/site-detail.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SelectTemplateComponent } from './components/select-template/select-template.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublishWebsiteComponent } from './components/publish-website/publish-website.component';
import { EditorComponent } from './components/editor/editor.component';
import { DestinationComponent } from './components/destination/destination.component';
import { TermComponentComponent } from './components/term-component/term-component.component';
import { CheckOtpComponent } from './components/check-otp/check-otp.component';
import { CreatePassComponent } from './components/create-pass/create-pass.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { MyProjectAllResultComponent } from './components/my-project-all-result/my-project-all-result.component';
import { MysiteAllResultComponent } from './components/mysite-all-result/mysite-all-result.component';
import { MyprojectSearchComponent } from './components/myproject-search/myproject-search.component';
import { NotificationsAllComponent } from './components/notifications-all/notifications-all.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DesignLoginComponent,
  //   canActivate: [AuthGuardService],
  // },

  /***create by tiennx*****/
  {
    path: 'term',
    component: TermComponentComponent,
  },
  {
    path: 'check-otp',
    component: CheckOtpComponent,
  },
  {
    path: 'create-password',
    component: CreatePassComponent
  },
  {
    path: 'myproject-all',
    component: MyProjectAllResultComponent
  },
  {
    path: 'myproject-search',
    component: MyprojectSearchComponent
  },
  {
    path: 'notification-all',
    component: NotificationsAllComponent
  },
  {
    path: 'notification-details',
    component: NotificationDetailsComponent
  },
  /*******end tiennx**********/

  { path: 'notifications', component: NotificationsComponent },
  { path: 'login', component: LoginComponent, data:{ reuse:true, reuseWhenLeftFrom:['check-otp'] } },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent },
  { path: 'reset', component: ResetPwdComponent },
  {
    path: 'mysite',
    component: WebsiteComponent,
    data:{ reuse:true, reuseWhenLeftFrom:['site-detail','myproject-search','myproject-all'] },
    children: []
  },
  {
    path: 'mysite-all-result',
    component: MysiteAllResultComponent
  },
  {
    path: 'site-detail',
    component: SiteDetail,
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'destination', component: DestinationComponent },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'select-template', component: SelectTemplateComponent },
  { path: 'template-preview', component: TemplatePreviewComponent },
  { path: 'publish-website', component: PublishWebsiteComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    RouterModule.forRoot(
      routes,
      { scrollPositionRestoration: 'enabled' }
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
