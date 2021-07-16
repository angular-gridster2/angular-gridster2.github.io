import { Component, OnInit, ViewChild, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GridsterConfig, GridsterComponent, DisplayGrid } from 'angular-gridster2';
import { EditorService } from '../editor.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {
    @Input('viewOnly') viewOnly = true
    @Input('rows') rows:number = 0
    @Input('cols') cols:number = 0
    globalConfig = {}
    type = ''

    public options: GridsterConfig = {
        //displayGrid: DisplayGrid.Always,
        gridType: 'scrollVertical',
        itemChangeCallback: (item, itemComponent) => this.editorService.changeWidget(item),
        minCols: this.cols,
        minRows: this.rows,
        maxCols: this.cols,
        maxRows: this.rows,
        outerMargin: false,
        margin:20,
        disableScrollHorizontal: true,
        disableScrollVertical: true,
        draggable: {
            enabled: true
        },
        resizable: {
            enabled: true
        },
        allowMultiLayer: true,
        pushItems: true,
    };

    public toolCustomiseClientX: number = 0;
    public toolCustomiseClientY: number = 50;
    public dataLayout: any[] = [];

    delayChange = null
    refreshed = true
    constructor(private editorService: EditorService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.editorService.pageType.subscribe((type)=>{
            this.type = type
        })
        this.editorService.widgets.subscribe((data) => {
            this.dataLayout = data;
            if (this.options.api) {
                clearTimeout(this.delayChange)
                this.delayChange = setTimeout(() => {
                    // tslint:disable-next-line: no-unused-expression
                    this.options.api && this.options.api.resize();
                    // tslint:disable-next-line: no-unused-expression
                    this.options.api && this.options.api.optionsChanged();
                }, 200);
            }
        })
        this.editorService.pageConfig.subscribe((value) => {
            this.refreshed = false
            this.globalConfig = value;
            setTimeout(()=>{
                this.refreshed = true
                this.cdr.detectChanges();
            },200)
        });
        this.editorService.currentWidgetId.subscribe((value)=>{
            try{
                if(this.type=='dashboard'){
                    let isFocused = value
                    this.options.draggable.enabled = !isFocused;
                    this.options.resizable.enabled = !isFocused;
                    this.options.api.optionsChanged();
                    this.options.api.resize()
                }
            }catch(er){}
        })
    }

    ngOnChanges() {
        try {
            this.options.draggable.enabled = !this.viewOnly;
            this.options.resizable.enabled = !this.viewOnly;
            this.options.minCols = this.cols
            this.options.maxCols = this.cols
            this.options.minRows = this.rows
            this.options.maxRows = this.rows == 5 ? 100: this.rows
            this.options.api.optionsChanged();
            this.options.api.resize()
        } catch (er) { }
    }

    trackBy(index, item) {
        return item.id + JSON.stringify(item.widget)
    }

}
