import { WidgetType } from './widget-type';

export interface WidgetContent {
    id: string;
    type: WidgetType;
    label?: string;
    input?: string;
    styles?: any;
    styleClass?: string;
    [propName: string]: any;
}