import { Component, OnInit, ViewChild, Compiler, ComponentFactory, ModuleWithComponentFactories, NgModule, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
//import { AppModule } from '../../app.module';
//import { templateFull, templateDashboard } from './template';
import { EditorService } from './editor.service';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
    @ViewChild('grid',{ static:false }) grid
    @ViewChild('container', { static: true, read: ViewContainerRef }) container;
    breadCrumb = "";
    viewOnly = true;

    currentWidget: any;
    widgets: any;
    globalConfig: any;
    currentId: any;
    type: any;
    delayView = false;

    constructor(
        private compiler: Compiler,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private editorService: EditorService,
        private cdr: ChangeDetectorRef
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.breadCrumb = params['page'];
            this.editorService.getWidgets(params['page']);
        });
        this.editorService.pageConfig.subscribe((pageConfig) => {
            this.globalConfig = pageConfig;
        });
        this.editorService.viewOnly.subscribe((viewOnly) => {
            this.viewOnly = viewOnly;
        });

        // DEMO FIX VMS_UI_Comparison_Urgent_20200805
        this.editorService.widgets.subscribe((widgets) => {
            this.widgets = widgets
            this.currentWidget = widgets.find(f => f.id === this.currentId);
        });
        this.editorService.currentWidgetId.subscribe((id) => {
            this.currentId = id;
            this.delayView = false;
            setTimeout(() => {
                this.delayView = true;
                this.cdr.detectChanges();
            }, 300);
            this.currentWidget = this.editorService.widgets.value.find(f => f.id === this.currentId);
        });
        this.editorService.pageType.subscribe((type)=>{
            this.type = type
        })
    }
    
    drop(e) {
        let data = JSON.parse(e.dataTransfer.getData("component"))
        if (data){
            const maxItem = (data.name === 'MapWidget' || data.name === 'ChartWidget') ? null : { maxItemCols: 2, maxItemRows: 2 };
            let widget = {
                cols: 1,
                rows: 1,
                minItemCols: 1,
                minItemRows: 1,
                layerIndex:2,
                ...maxItem,
                widget: { name: data.name, config: data.config },
                resizeEnabled: data.name == 'ImgWidget' ? true : undefined
            }
            if(this.grid.options.api.getNextPossiblePosition(widget))
                this.editorService.createWidget(widget)
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    /*
    public compileTemplate(template) {
        let metadata = {
            selector: `runtime-component-sample`,
            template: template
        };

        let factory = this.createComponentFactorySync(this.compiler, metadata, null);
        this.container.createComponent(factory);
    }

    private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
        const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys' };
        const decoratedCmp = Component(metadata)(cmpClass);

        const moduleClass = class RuntimeComponentModule { };
        const decoratedNgModule = NgModule({ imports: [AppModule], declarations: [decoratedCmp] })(moduleClass);

        let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(decoratedNgModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }
    */
}
