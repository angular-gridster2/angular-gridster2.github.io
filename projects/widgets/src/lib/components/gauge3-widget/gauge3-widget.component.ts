import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-gauge3-widget',
  templateUrl: './gauge3-widget.component.html',
  styleUrls: ['./gauge3-widget.component.scss']
})
export class Gauge3WidgetComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('gauge3Ref') el: ElementRef;
  @Input() widget: any;
  @Input() gridInfo: any;

  public mode: number;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.gridInfo.rows === this.gridInfo.cols) {
      this.mode = 1; // Square
    }
    if (this.gridInfo.rows < this.gridInfo.cols) {
      this.mode = 2; // Rectangle
    }
    if (this.gridInfo.rows > this.gridInfo.cols) {
      this.mode = 3; // Vertical
    }
  }

  onResized(event: ResizedEvent) {
    setTimeout(() => {
      const wh = event.newWidth - event.newHeight;
      if (wh < 70) {
        this.mode = 1; // Square
      }
      if (wh > 70) {
        this.mode = 2; // Rectangle
      }
      if (wh < -50) {
        this.mode = 3; // Vertical
      }
      this.cdr.detectChanges();
    }, 0);
  }

  ngAfterViewInit(): void {
    // TODO
  }

  ngAfterViewChecked() {
    this.changeDataToElement(this.gridInfo, this.widget.config);
  }

  /**
   * Update value
   * Update centerVariable
   * Update bottomVariable
   * @param gridInfo
   * @param data
   */
  changeDataToElement(gridInfo, data) {
    if (this.el) {
      const rl = this.el.nativeElement.querySelector('.reading-label');
      const cv = this.el.nativeElement.querySelector('.center_variable');
      const bv = this.el.nativeElement.querySelector('.bottom_variable');
      if (gridInfo.cols > gridInfo.rows && cv && bv) {
        cv.innerHTML = `${data?.value}${data?.centerVariable}`;
        bv.innerHTML = `${data?.bottomVariable}`;
      } else if (rl) {
        rl.innerHTML = `${data?.bottomVariable} ${data?.value}${data?.centerVariable}`;
      }
    }
  }

  convertHexOpacity(hex): string {
    try {
      return Util.convertHexOpacity(hex, 20);
    } catch (er) {
      return null;
    }
  }

  // Check show/hiden
  public canActivate(filed): boolean {
    return this.widget.config.hasOwnProperty(filed);
  }

  /**
   * ThresholdIcon
   */
  public getThresholdIconByRange() {
    const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faCenter };
    if (this.canActivate('thresholdIcon')) {
      const value = Util.clamp(this.widget.config.value, this.widget.config.iconMin, this.widget.config.iconMax);
      const match = Object.keys(this.widget.config.thresholdIcon)
        .filter(function (item) { return Util.isNumber(item) && Number(item) <= value })
        .sort((a, b) => Number(a) - Number(b))
        .reverse()[0];
      return match ? this.widget.config.thresholdIcon[match] : base;
    } else {
      return base;
    }
  }

  /**
   * ThresholdColor
   */
  public getThresholdColorByRange() {
    const base = { color: this.widget.config.foregroundColor };
    if (this.canActivate('thresholdColor')) {
      const value = Util.clamp(this.widget.config.value, this.widget.config.gaugeMin, this.widget.config.gaugeMax);
      const match = Object.keys(this.widget.config.thresholdColor)
        .filter(function (item) { return Util.isNumber(item) && Number(item) <= value })
        .sort((a, b) => Number(a) - Number(b))
        .reverse()[0];
      return match ? this.widget.config.thresholdColor[match] : base;
    } else {
      return base;
    }
  }
}

export const Gauge3Widget = {
  name: 'Gauge 3',
  type: 'component',
  component: Gauge3WidgetComponent,
  defaultConfig: [
    { faCenter: 'feather-droplet', type: 'full', foregroundColor: '#70AFAA', colorIcon: '#70AFAA', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
    { faCenter: 'feather-thermometer', type: 'arch', foregroundColor: '#EA857A', colorIcon: '#EA857A', value: '25', centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 40, iconMin: 0, iconMax: 100 },
    { faCenter: 'feather-cloud-rain', type: 'semi', foregroundColor: '#97C9DE', colorIcon: '#97C9DE', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfail', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 }
  ]
}