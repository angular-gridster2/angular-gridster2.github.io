import { Injectable } from '@angular/core';
import { WidgetItem } from '../models/widget-item';
import { WidgetType } from '../models/widget-type';
import {v4 as uuidv4 } from 'uuid';
import { WidgetContent } from '../models/widget-content';
import { ButtonWidgetContent } from '../models/button-widget-content';
import { WidgetContentAccessor } from '../models/widget-content-accessor';
import { GridsterItem } from 'angular-gridster2';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private _widgets : {
    dashboardId: string;
    widgetItem: WidgetItem;
  }[] = [];

  private _dashboards: {
    dashboardId: string;
    widgetContentAccessor: WidgetContentAccessor;
  }[] = [];

  constructor() {}

  public addDashboardIfNotExist(dashboardId: string) {
    if (this._dashboards.findIndex(w => w.dashboardId === dashboardId) < 0) {
      this.addDashboard(dashboardId);
    }
  }

  public addDashboard(dashboardId: string) {
    let widgetsService: WidgetsService = this;
    
    const widgetContentAccessor: WidgetContentAccessor = {
      getWidgetContents(type: WidgetType) {
        return widgetsService.getWidgetContentsByType(dashboardId, type);
      }
    }
    this._dashboards.push({dashboardId: dashboardId, widgetContentAccessor: widgetContentAccessor});
  }

  public removeDashboard(dashboardId: string) {
    this._dashboards.splice(this._dashboards.findIndex(d => dashboardId == dashboardId), 1);
    this._widgets = this._widgets.filter(w => w.dashboardId != dashboardId);
  }

  public addWidget(dashboardId: string, widgetItem: WidgetItem) {
    this._widgets.push({
      dashboardId: dashboardId,
      widgetItem: widgetItem
    });
  }

  public getWidgetContentsByType(dashboardId: string, type: WidgetType) {
    return this._widgets.filter(w => w.dashboardId === dashboardId && w.widgetItem.widgetContent.type === type).map(w => w.widgetItem.widgetContent);
  }

  public getWidgetById(widgetId: string): WidgetItem {
    return this._widgets.find(w => w.widgetItem.widgetContent.id === widgetId).widgetItem;
  }

  public removeWidget(widgetId: string) {
    this._widgets.splice(this._widgets.findIndex(w => w.widgetItem.widgetContent.id = widgetId), 1);
  }

  public getDashboardWidgets(dashboardId: string): WidgetItem[] {
    return this._widgets.filter(w => w.dashboardId == dashboardId).map(w => w.widgetItem);
  }

  public serialize(dashboardId: string): string {
    return JSON.stringify(this.getDashboardWidgets(dashboardId));
  }

  public deserialize(dashboardId: string, jsonString: string): WidgetItem[] {
    this.removeDashboard(dashboardId);
    this.addDashboard(dashboardId);

    let widgetContentAccessor = this._dashboards.find(d => d.dashboardId === dashboardId).widgetContentAccessor;

    let widgetItems: WidgetItem[] = JSON.parse(jsonString);

    widgetItems.forEach(w => {
      w.widgetContentAccessor = widgetContentAccessor;
      /*
      switch(w.widgetContent.type) {
        case WidgetType.BUTTON_WIDGET:
          w.widgetContent = <ButtonWidgetContent>(w.widgetContent);
          break;
      }
      */
      this.addWidget(dashboardId, w);
    });

    return widgetItems;
  }

  public createAddWidget(dashboardId: string, type: WidgetType, gridsterItem: GridsterItem): WidgetItem {
    
    const widgetContentAccessor = this._dashboards.find(w => w.dashboardId === dashboardId).widgetContentAccessor;

    const id: string = this.generateWidgetId(widgetContentAccessor, type);

    let content: WidgetContent;
    
    switch(type) {
      case WidgetType.ALARM_WIDGET:
        content = {
          id: id,
          type: type,
          label: "Alarm",
        };
        break;

      case WidgetType.ALERT_WIDGET:
        content = {
          id: id,
          type: type,
          label: "Alert",
        };
        break;

      case WidgetType.BUTTON_WIDGET:
        const buttonContent: ButtonWidgetContent = {
          id: id,
          type: type,
          label: "Button",
          apiName: "",
          apiParams: [],
        };
        content = buttonContent;
        break;

      case WidgetType.LABEL_WIDGET:
        content = {
          id: id,
          type: type,
          label: "Label",
        };
        break;

      case WidgetType.TEXTBOX_WIDGET:
        content = {
          id: id,
          type: type,
          label: "Textbox",
        };
        break;
      default:
        throw console.error("Unsupported content type ", type);
    }

    let widgetItem: WidgetItem = {gridsterItem: gridsterItem, widgetContent: content, widgetContentAccessor: widgetContentAccessor}; 
    
    this.addWidget(dashboardId, widgetItem);
    
    return widgetItem;
  }

  private generateWidgetId(widgetContentAccessor: WidgetContentAccessor, type: WidgetType): string {
    return uuidv4();
  }

  public clearAll(){
    this._dashboards = [];
    this._widgets = [];
  }
}