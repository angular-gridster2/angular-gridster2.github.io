// Angular
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// App
import { Subscription } from 'rxjs';
import { ConvertJson } from 'projects/vms-admin/src/app/shared/utils/convert-json.ulti';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';
import { ColorUtil } from 'projects/vms-admin/src/app/shared/utils/color.util';

@Component({
  selector: 'app-widget-gauge',
  templateUrl: './widget-gauge.component.html',
  styleUrls: ['./widget-gauge.component.scss']
})
export class WidgetGaugeComponent implements OnInit, OnDestroy {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  // Form threshold
  public cacheId: number;
  public colorChangerfor: string;
  public formArr: any[] = [];
  public threshold: any;
  public color: any;

  private subscriptions: Subscription[] = [];

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('gaugeBox');
    this.toolCustomiseService.closeBox('selectColor');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public convertHexOpacity(hex): string {
    return ColorUtil.convertHexOpacity(hex, 20);
  }

  // Dynamic form -- Start
  private initFormGroup(): void {
    // init formGroup 
    this.loadFormGroup();
    // Detection for icon
    this.toolCustomiseService.eventColorChangerfor.subscribe((key: string) => {
      this.colorChangerfor = key;
    });
    // Event color
    this.subscriptions.push(this.toolCustomiseService.eventColor.subscribe((value: string) => {
      if (value && this.colorChangerfor === 'gauge') {
        if (this.cacheId === -1) {
          // Base color
          this.currentWidget.widget.config.foregroundColor = value;
        } else if (this.cacheId >= 0) {
          // Threshold gauge
          this.formArr[this.cacheId].color = value;
          this.currentWidget.widget.config.thresholdColor = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
        }
        // Set color
        this.onChangeWidget(this.currentWidget);
      }
    }));
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

  public onShowSelectColorBox(i): void {
    this.cacheId = i;
    this.toolCustomiseService.colorChangerfor('gauge');
    this.toolCustomiseService.showBox('selectColor', '/Guage/Color');
  }
  // Dynamic form -- End

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => { subscription.unsubscribe(); });
  }
}
