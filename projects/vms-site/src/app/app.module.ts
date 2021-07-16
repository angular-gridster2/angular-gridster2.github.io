// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Lib
import { GridsterModule } from 'angular-gridster2';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
// Project
import { SharedModule } from './shared/shared.module';
import { AppConfigModule } from './app-config.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/_root/app.component';
import { WidgetsModule } from 'projects/widgets/src/public-api';
import { DemoMaterialModule } from 'projects/widgets/src/lib/material.module';
import { PrivatePagesComponent } from './components/private-pages/private-pages.component';
import { PublicPagesComponent } from './components/public-pages/public-pages.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPagesComponent,
    PrivatePagesComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    GridsterModule,
    WidgetsModule,
    AppConfigModule,
    SharedModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
