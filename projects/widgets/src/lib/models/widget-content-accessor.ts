import { WidgetContent } from './widget-content';
import { WidgetType } from './widget-type';

export interface WidgetContentAccessor {
    getWidgetContents(type: WidgetType): WidgetContent[];
}