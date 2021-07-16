import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConvertJson } from 'projects/vms-admin/src/app/shared/utils/convert-json.ulti';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

interface Icon {
  fa?: string;
  src?: string;
}

@Component({
  selector: 'app-center-top-left-icon',
  templateUrl: './center-top-left-icon.component.html',
  styleUrls: ['./center-top-left-icon.component.scss']
})
export class CenterTopLeftIconComponent implements OnInit, OnDestroy {
  @Input() currentWidget: any;
  @Input() myBounds: any;
  @Input() title: string;

  // Form threshold
  public cacheId: number;
  public colorChangerfor: string;

  public formArr: any[] = [];
  public threshold: any;
  public color: any;

  public subscriptions: Subscription[] = [];

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('topLeftIcon');
    this.toolCustomiseService.closeBox('selectIcon');
    this.toolCustomiseService.closeBox('selectColor');
    this.toolCustomiseService.closeBox('centerIcon');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
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
      if (value && this.colorChangerfor === 'icon') {
        if (this.cacheId === -1) {
          // Base color
          this.currentWidget.widget.config.colorIcon = value;
        } else if (this.cacheId >= 0) {
          // Graph color
          this.formArr[this.cacheId].color = value;
          this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
        }
      }
    }));
    // Event icon
    this.subscriptions.push(this.toolCustomiseService.eventIcon.subscribe((value: Icon) => {
      if (value) {
        if (this.cacheId === -1) {
          // Base icon
          if (this.canActivate('faCenter')) {
            // Apply /center/icon
            this.currentWidget.widget.config.faCenter = value.fa;
          } else {
            // Apply /Top Left/icon
            this.currentWidget.widget.config.faTopLeft = value.fa;
          }
        } else if (this.cacheId >= 0) {
          // Threshold icon
          this.formArr[this.cacheId].icon = value.fa;
          this.currentWidget.widget.config.thresholdIcon = ConvertJson.arrayToObjectKey(this.formArr, 'threshold');
        }
      }
    }));
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
    this.formArr.push({ color: '#959393', icon: 'feather-plus', threshold: this.formArr.length });
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
    this.toolCustomiseService.colorChangerfor('icon');
    this.toolCustomiseService.showBox('selectIcon');
    this.toolCustomiseService.showBox('selectColor', '/Icon/Select Color');
  }
  // Dynamic form -- End

  // Check hasOwnProperty
  public canActivate(field): boolean {
    return this.currentWidget.widget.config.hasOwnProperty(field);
  }
}
