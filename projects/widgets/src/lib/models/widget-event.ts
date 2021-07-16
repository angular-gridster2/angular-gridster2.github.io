import { WidgetItem } from './widget-item';
import { WidgetEventType } from './widget-event-type';

export interface WidgetEvent {
    widgetEventType: WidgetEventType;
    widgetItem: WidgetItem;
    [propertyeName: string]: any;
}