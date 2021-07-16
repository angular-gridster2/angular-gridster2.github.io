// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// Lib
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AgmCoreModule } from '@agm/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { AngularResizedEventModule } from 'angular-resize-event';
import { DropdownModule } from 'primeng/dropdown';

// App
import { LabelWidget } from './components/label-widget/label-widget.component';
import { ButtonWidget } from './components/button-widget/button-widget.component';
import { TextboxWidget } from './components/textbox-widget/textbox-widget.component';
import { LinkWidget } from './components/link-widget/link-widget.component';
import { AreaContainerWidget } from './components/area-container-widget/area-container-widget.component';
import { ImgWidget } from './components/img-widget/img-widget.component';
import { MapWidget } from './components/map-widget/map-widget.component';

import { Simple1Widget } from './components/simple1-widget/simple1-widget.component';
import { Simple2Widget } from './components/simple2-widget/simple2-widget.component';
import { ChartWidget } from './components/chart-widget/chart-widget.component';
import { Gauge1Widget } from './components/gauge1-widget/gauge1-widget.component';
import { Gauge2Widget } from './components/gauge2-widget/gauge2-widget.component';
import { Gauge3Widget } from './components/gauge3-widget/gauge3-widget.component';
import { ImgInputWidget } from './components/img-input-widget/img-input-widget.component';

import { ShapeWidget } from './components/shape-widget/shape-widget.component';
import { AllThingWidget } from './components/all-thing/all-thing.component';
import { ThingDetailWidget } from './components/thing-detail/thing-detail.component';
import { UserManagementWidget } from './components/user-management/user-management.component';
import { DateOptionComponent } from './components/thing-detail/date-option/date-option.component';

@NgModule({
  declarations: [
    LabelWidget.component,
    ButtonWidget.component,
    TextboxWidget.component,
    AreaContainerWidget.component,
    LinkWidget.component,
    ImgWidget.component,
    MapWidget.component,
    Simple1Widget.component,
    Simple2Widget.component,
    ChartWidget.component,
    Gauge1Widget.component,
    Gauge2Widget.component,
    Gauge3Widget.component,
    ShapeWidget.component,
    ImgInputWidget.component,
    AllThingWidget.component,
    ThingDetailWidget.component,
    UserManagementWidget.component,
    DateOptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ColorPickerModule,
    OverlayPanelModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKVk6PXfcnrvxcZ7yc8e8I_I-xmaNA3U0',
      libraries: ['places', 'geometry']
    }),
    NgxGaugeModule,
    AngularResizedEventModule,
    DropdownModule
  ],
  exports: [
    LabelWidget.component,
    ButtonWidget.component,
    TextboxWidget.component,
    AreaContainerWidget.component,
    LinkWidget.component,
    ImgWidget.component,
    MapWidget.component,
    Simple1Widget.component,
    Simple2Widget.component,
    ChartWidget.component,
    Gauge1Widget.component,
    Gauge2Widget.component,
    Gauge3Widget.component,
    ShapeWidget.component,
    ImgInputWidget.component,
    AllThingWidget.component,
    ThingDetailWidget.component,
    UserManagementWidget.component
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },]
})

export class WidgetsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetsModule
    };
  }
}

export const widgetMap = {
  AreaContainerWidget: AreaContainerWidget,
  Simple1Widget: Simple1Widget,
  Simple2Widget: Simple2Widget,
  Gauge1Widget: Gauge1Widget,
  Gauge2Widget: Gauge2Widget,
  Gauge3Widget: Gauge3Widget,
  ChartWidget: ChartWidget,
  MapWidget: MapWidget,
  TextboxWidget: TextboxWidget,
  LabelWidget: LabelWidget,
  ButtonWidget: ButtonWidget,
  LinkWidget: LinkWidget,
  ImgWidget: ImgWidget,
  ShapeWidget: ShapeWidget,
  ImgInputWidget: ImgInputWidget,
  AllThingWidget: AllThingWidget,
  ThingDetailWidget: ThingDetailWidget,
  UserManagementWidget: UserManagementWidget
};
