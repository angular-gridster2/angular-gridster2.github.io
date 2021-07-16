import { WidgetContent } from './widget-content';
import { WidgetContentAccessor } from './widget-content-accessor';
import { GridsterItem } from 'angular-gridster2';

export interface WidgetItem {
    gridsterItem: GridsterItem;
    widgetContent: WidgetContent;
    widgetContentAccessor: WidgetContentAccessor;
}