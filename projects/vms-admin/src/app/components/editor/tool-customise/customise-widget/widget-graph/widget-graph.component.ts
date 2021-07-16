// Angular
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// Lib
import { Color } from '@iplab/ngx-color-picker';
// App
import { ConvertJson } from 'projects/vms-admin/src/app/shared/utils/convert-json.ulti';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

@Component({
    selector: 'app-widget-graph',
    templateUrl: './widget-graph.component.html',
    styleUrls: ['./widget-graph.component.scss']
})
export class WidgetGraphComponent implements OnInit, OnDestroy {
    @Input() currentWidget: any;
    @Input() myBounds: any;

    // Form threshold
    public cacheId: number;
    public formArr: any[] = [];
    public threshold: any;
    public color: any;

    constructor(
        private editorService: EditorService,
        private toolCustomiseService: ToolCustomiseService
    ) { }

    ngOnInit(): void {
        this.initFormGroup();
    }

    public onClose(): void {
        this.toolCustomiseService.closeBox('graphBox');
        this.toolCustomiseService.closeBox('selectColor');
    }

    public onChangeWidget(item): void {
        this.editorService.changeWidget(item);
    }

    ngOnDestroy(): void {
    }

    // Dynamic form -- Start
    private initFormGroup(): void {
        // init formGroup
        this.loadFormGroup();
        // Event color
        this.toolCustomiseService.eventColor.subscribe((value: Color) => {
            if (value) {
                if (this.cacheId >= 0) {
                    // Graph color
                    this.formArr[this.cacheId].color = value.toHexString();
                    this.currentWidget.widget.config.thresholdColor = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
                }
                // Set color
                this.onChangeWidget(this.currentWidget);
            }
        });
    }

    private loadFormGroup(): void {
        const threshold = { ...this.currentWidget.widget.config.thresholdColor };
        Object.keys(threshold).forEach(e => {
            this.formArr.push({ color: threshold[e]['color'], threshold: e });
        });
    }

    public addControl() {
        this.formArr.push({ color: '#959393', threshold: this.formArr.length });
    }

    public removeControl(i: number) {
        this.formArr.splice(i, 1);
        this.currentWidget.widget.config.thresholdColor = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
    }

    public onChangeThreshold(value, i): void {
        this.formArr[i].threshold = value;
        this.currentWidget.widget.config.thresholdColor = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
    }

    public onShowSelectGraphBox(i): void {
        this.cacheId = i;
        this.toolCustomiseService.showBox('selectColor', '/Graph/Color');
    }
    // Dynamic form -- End

}
