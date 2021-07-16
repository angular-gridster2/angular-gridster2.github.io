// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Lib
import { DialogModule } from 'primeng/dialog';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// vms-admin
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BackgroundFormComponent } from './components/bg-form/bg-form.component';
import { TopBarPreviewComponent } from './components/topbar-preview/topbar.component';
import { EditorNavbarComponent } from './components/editor-navbar/editor-navbar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { UnpublishedModalComponent } from './components/unpublished-modal/unpublished-modal.component';
import { SaveModalComponent } from './components/save-modal/save-modal.component';
import { LayoutLoginBaseComponent } from './components/layout-login-base/layout-login-base.component';
import { FilterByAreaPipe } from './pipes/filter-by-area.pipe';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BackgroundFormComponent,
    TopBarPreviewComponent,
    EditorNavbarComponent,
    NotificationsComponent,
    SaveModalComponent,
    DeleteModalComponent,
    UnpublishedModalComponent,
    LayoutLoginBaseComponent,
    FilterByAreaPipe,
    NumbersOnlyDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BackgroundFormComponent,
    TopBarPreviewComponent,
    EditorNavbarComponent,
    NotificationsComponent,
    SaveModalComponent,
    DeleteModalComponent,
    UnpublishedModalComponent,
    LayoutLoginBaseComponent,
    FilterByAreaPipe,
    NumbersOnlyDirective
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //   };
  // }
}
