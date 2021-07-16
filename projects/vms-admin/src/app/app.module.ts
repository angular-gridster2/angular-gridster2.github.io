// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

// Lib
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GridsterModule } from 'angular-gridster2';
// Lib -> Primeng
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
// Lib -> Ngx Bootstrap
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Lib -> Color picker
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { AngularDraggableModule } from 'angular2-draggable';

// Vms-admin
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './components/_root/app.component';
import { DemoMaterialModule } from '../../../widgets/src/lib/material.module';
import { WidgetsModule } from '../../../widgets/src/public-api';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppConfigModule } from './app-config.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPwdComponent } from './components/reset-pwd/reset.component';
import { WebsiteComponent } from './components/website/website.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SiteDetail } from './components/site-detail/site-detail.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SelectTemplateComponent } from './components/select-template/select-template.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import { PublishWebsiteComponent } from './components/publish-website/publish-website.component';
import { EditToolComponent } from './components/editor/edit-tool/edit-tool.component';
import { PreviewComponent } from './components/editor/preview/preview.component';
import { GridComponent } from './components/editor/grid/grid.component';
import { EditorComponent } from './components/editor/editor.component';
import { DestinationComponent } from './components/destination/destination.component';
import { WidgetContainerComponent } from './components/editor/widget-container/widget-container.component';
import { TermComponentComponent } from './components/term-component/term-component.component';
import {
  ToolCustomiseComponent,
  BottomVariableComponent,
  CenterTopLeftIconComponent,
  CenterVariableComponent,
  CustomiseWidgetComponent,
  SelectColorComponent,
  SelectIconComponent,
  WidgetGaugeComponent,
  WidgetMapComponent,
  WidgetGraphComponent,
  CustomiseButtonComponent,
  CustomiseTextComponent,
  CustomiseTextboxComponent,
  CustomiseRectangleComponent
} from './components/editor/tool-customise/tool-customise.component';
import { CheckOtpComponent } from './components/check-otp/check-otp.component';
import { CreatePassComponent } from './components/create-pass/create-pass.component';
import { CustomColorPickerComponent } from './components/editor/custom-color-picker/custom-color-picker.component';
import { MyProjectAllResultComponent } from './components/my-project-all-result/my-project-all-result.component';
import { MysiteAllResultComponent } from './components/mysite-all-result/mysite-all-result.component';
import { MyprojectSearchComponent } from './components/myproject-search/myproject-search.component';
import { RouterModule, RouteReuseStrategy  } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { NotificationsAllComponent } from './components/notifications-all/notifications-all.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';
import { RouteReuseService } from './route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SidenavComponent,
    HomepageComponent,
    SignupComponent,
    ResetPwdComponent,
    WebsiteComponent,
    SiteDetail,
    CreateProjectComponent,
    SelectTemplateComponent,
    TemplatePreviewComponent,
    ProfileComponent,
    PublishWebsiteComponent,
    GridComponent,
    EditToolComponent,
    EditorComponent,
    DestinationComponent,
    WidgetContainerComponent,
    TermComponentComponent,
    ToolCustomiseComponent,
    BottomVariableComponent,
    CenterTopLeftIconComponent,
    CenterVariableComponent,
    CustomiseWidgetComponent,
    SelectColorComponent,
    SelectIconComponent,
    WidgetGaugeComponent,
    WidgetMapComponent,
    WidgetGraphComponent,
    CustomiseButtonComponent,
    CustomiseTextComponent,
    CustomiseTextboxComponent,
    CustomiseRectangleComponent,
    CheckOtpComponent,
    CreatePassComponent,
    PreviewComponent,
    CustomColorPickerComponent,
    MyProjectAllResultComponent,
    MysiteAllResultComponent,
    MyprojectSearchComponent,
    NotificationsAllComponent,
    NotificationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AppConfigModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    DialogModule,
    PaginationModule.forRoot(),

    GridsterModule,

    WidgetsModule,

    DropdownModule,
    ColorPickerModule,
    OverlayPanelModule,
    AngularDraggableModule,
    AutoCompleteModule,
    CheckboxModule,
    CalendarModule
  ],
  exports: [
    GridComponent
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    {provide: RouteReuseStrategy, useClass: RouteReuseService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
