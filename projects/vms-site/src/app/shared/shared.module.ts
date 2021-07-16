import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Lib
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Project
import { TopbarPreviewComponent } from './components/topbar-preview/topbar-preview.component';

@NgModule({
  declarations: [
    TopbarPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  exports: [
    TopbarPreviewComponent
  ]
})
export class SharedModule { }
