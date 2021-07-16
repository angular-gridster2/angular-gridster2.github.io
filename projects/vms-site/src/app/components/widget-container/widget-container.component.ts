import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    Input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Lib
import { maxBy, merge, cloneDeep } from 'lodash';

import { widgetMap } from '../../../../../widgets/src/public-api';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
})
export class WidgetContainerComponent implements OnInit {
    @ViewChild('widgetHost', { static: true, read: ViewContainerRef }) widgetHost;
    @Input() public item: any;
    @Input() public globalConfig: any = {};

    type = 'input';
    screenType: string;
    screenParameter: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenParameter = params['page'] ? params['page'] : 'dashboard';
        });
    }

    ngOnInit() {
        this.loadComponentViewOnly(this.item.widget.name)
        this.type = widgetMap[this.item.widget.name].type
    }

    loadComponentViewOnly(componentTypeToRender) {
        const c = this.componentFactoryResolver.resolveComponentFactory(widgetMap[componentTypeToRender].component);
        const component = this.widgetHost.createComponent(c);
        let item = cloneDeep(this.item)
        if (this.globalConfig[componentTypeToRender]) {
            component.instance.widget = { ...item.widget, config: merge({}, this.globalConfig[componentTypeToRender], item.widget['config']) };
        } else {
            component.instance.widget = { ...item.widget };
        }
        component.instance.gridInfo = item;
        component.instance.globalConfig = this.globalConfig
    }

    notTransparentBgType() {
        return this.type == 'component' && this.item.widget.name != 'ImgWidget' && this.item.widget.name != 'LinkWidget'
    }

}
