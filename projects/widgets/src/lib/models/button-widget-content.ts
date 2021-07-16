import { WidgetContent } from './widget-content';

export interface ButtonWidgetContent extends WidgetContent{
    apiName: string;
    apiParams: {fieldName: string, widgetId: string}[];
}