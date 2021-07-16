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

import { EditorService } from '../editor.service';
import { widgetMap } from '../../../../../../widgets/src/public-api';
import { ToolCustomiseService } from '../tool-customise/tool-customise.service';

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
})
export class WidgetContainerComponent implements OnInit {
    @ViewChild('widgetHost', { static: true, read: ViewContainerRef }) widgetHost;
    @Input() public item: any;
    @Input() public globalConfig: any = {};
    @Input() public viewOnly: any;
    @Input() public gridOptions: any;
    @Input() public disableResizeAndButton = true;

    type = 'input';
    screenType: string;
    currentFoscusId = null;
    draged = false;
    component
    screenParameter: string;
    eyeShowHide = true;

    maxIndex: number;
    widgets: any;
    duplicateAble = true;

    constructor(
        private editorService: EditorService,
        private activatedRoute: ActivatedRoute,
        private toolCustomiseService: ToolCustomiseService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.editorService.pageType.subscribe((type) => {
            this.screenType = type;
        });
        this.editorService.currentWidgetId.subscribe((id) => {
            this.currentFoscusId = id;
            if (id == null) {
                this.toolCustomiseService.closeBox(['customiseRectangle', 'customiseTextbox', 'customiseText', 'customiseButton', 'customiseWidget']);
            }
        });
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenParameter = params['page'] ? params['page'] : 'dashboard';
        });
        this.editorService.widgets.subscribe((widgets: any[]) => {
            if (widgets.length > 0) {
                this.widgets = widgets;
                this.maxIndex = maxBy(widgets, 'layerIndex').layerIndex;
            }
        });
    }

    ngOnInit() {
        if (this.viewOnly)
            this.loadComponentViewOnly(this.item.widget.name)
        else
            this.loadComponent(this.item.widget.name);
        this.type = widgetMap[this.item.widget.name].type

    }

    loadComponent(componentTypeToRender) {
        const c = this.componentFactoryResolver.resolveComponentFactory(widgetMap[componentTypeToRender].component);
        const component = this.widgetHost.createComponent(c);
        const item = cloneDeep(this.item);
        if (this.globalConfig[componentTypeToRender]) {
            item.widget.config = merge({}, this.globalConfig[componentTypeToRender], item.widget['config']);
        }
        component.instance.widget = item.widget;
        component.instance.gridInfo = item;
        component.instance.globalConfig = this.globalConfig;
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

    showHideImage(e, item) {
        this.eyeShowHide = !this.eyeShowHide;
        item.widget.config.disabled = !(item.widget.config && item.widget.config.disabled);
        item.resizeEnabled = !item.widget.config.disabled;
        this.editorService.changeWidget(item);
        e.stopPropagation();
    }

    duplicateWidget(e) {
        e.stopPropagation();
        if (this.gridOptions.api.getNextPossiblePosition({ ...this.item }) && this.duplicateAble)
            this.editorService.duplicate(this.item);
    }

    removeWidget(e) {
        e.stopPropagation();
        this.editorService.removeWidget(this.item);
    }

    changeImage(files, item) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            console.log('Only images are supported.');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            if (item) {
                item.widget.config.src = reader.result;
                this.editorService.changeWidget(item);
            }
        };
    }

    notTransparentBgType() {
        return this.type == 'component' && this.item.widget.name != 'ImgWidget' && this.item.widget.name != 'LinkWidget'
    }

    /**
     * Click on brush
     */
    clickToggleFocus(e, item) {
        if (!this.viewOnly) {
            this.duplicateAble = this.gridOptions.api.getNextPossiblePosition({ ...this.item })
            if (this.item.id == this.currentFoscusId) {
                this.editorService.focusWidgetId(null);
            } else {
                if (this.screenType !== 'dashboard' || !this.currentFoscusId) {
                    this.editorService.focusWidgetId(this.item.id);
                    // Show [customise/widget]
                    setTimeout(() => {
                        const el = document.querySelector('.active-btn-customise');
                        const rect = el && el.getBoundingClientRect();
                        this.showCustomiseBox({ clientX: rect && rect.left, clientY: window.innerHeight }, item);
                    }, 150);
                }
            }
        }
    }

    /**
     * Navigate to the box Level 1
     * @param e
     * @param item
     */
    public showCustomiseBox(e, item): void {
        // Close
        if (this.screenType !== 'dashboard') {
            this.toolCustomiseService.closeBox(['customiseButton', 'customiseText', 'customiseTextbox', 'customiseText', 'customiseRectangle']);
        }
        // Open
        switch (item.widget.name) {
            case 'ButtonWidget':
                // Login
                this.toolCustomiseService.showBox('customiseButton', e);
                break;
            case 'LabelWidget':
                // Login
                this.toolCustomiseService.showBox('customiseText', e);
                break;
            case 'TextboxWidget':
                // Login
                this.toolCustomiseService.showBox('customiseTextbox', e);
                break;
            case 'LinkWidget':
                // Login
                this.toolCustomiseService.showBox('customiseText', e);
                break;
            case 'AreaContainerWidget':
                // User-information
                this.toolCustomiseService.showBox('customiseRectangle', e);
                break;
            default:
                // Dashborad
                if (this.screenType === 'dashboard') {
                    this.toolCustomiseService.showBox('customiseWidget', e);
                }
                break;
        }
    }

}
