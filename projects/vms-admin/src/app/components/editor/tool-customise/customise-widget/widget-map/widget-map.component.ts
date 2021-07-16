// Angular
import { Component, OnInit, Input } from '@angular/core';
// App
import { ConvertJson } from 'projects/vms-admin/src/app/shared/utils/convert-json.ulti';
import { Color } from '@iplab/ngx-color-picker';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

interface Icon {
    fa?: string;
    src?: string;
}

@Component({
    selector: 'app-widget-map',
    templateUrl: './widget-map.component.html',
    styleUrls: ['./widget-map.component.scss']
})
export class WidgetMapComponent implements OnInit {
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
        this.toolCustomiseService.closeBox('mapBox');
        this.toolCustomiseService.closeBox('selectIcon');
        this.toolCustomiseService.closeBox('selectColor');
    }

    public onChangeWidget(item): void {
        this.editorService.changeWidget(item);
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
                    this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
                }
            }
        });
        // Event icon
        this.toolCustomiseService.eventIcon.subscribe((value: Icon) => {
            if (value) {
                if (this.cacheId >= 0) {
                    // Graph color
                    this.formArr[this.cacheId].icon = (value.hasOwnProperty('fa') ? value.fa : value.src);
                    this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
                }
            }
        });
    }

    private loadFormGroup(): void {
        const threshold = { ...this.currentWidget.widget.config.thresholdIcon };
        Object.keys(threshold).forEach(e => {
            this.formArr.push({
                color: threshold[e]['color'],
                icon: threshold[e]['icon'],
                threshold: e
            });
        });
    }

    public addControl() {
        this.formArr.push({ color: '#97C9DE', icon: 'fas fas fa-map-marker-alt', threshold: `Pin ${this.formArr.length + 1}` });
    }

    public removeControl(i: number) {
        this.formArr.splice(i, 1);
        this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
    }

    public onChangeThreshold(value, i): void {
        this.formArr[i].threshold = value;
        this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
    }

    public onShowSelectIconBox(i): void {
        this.cacheId = i;
        this.toolCustomiseService.showBox('selectIcon');
        this.toolCustomiseService.showBox('selectColor', '/Icon/Select Color');
    }
    // Dynamic form -- End
}
