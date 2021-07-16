import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-gauge2-widget',
  templateUrl: './gauge2-widget.component.html',
  styleUrls: ['./gauge2-widget.component.scss']
})
export class Gauge2WidgetComponent implements OnInit {
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

  convertHexOpacity(hex): string {
    try {
      return Util.convertHexOpacity(hex, 20);
    } catch (er) {
      return null;
    }
  }

  // Check hasOwnProperty
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

export const Gauge2Widget = {
  name: 'Gauge 2',
  type: 'component',
  component: Gauge2WidgetComponent,
  defaultConfig: [
    { faCenter: 'fa fa-battery-full', foregroundColor: '#73B18D', colorIcon: '#73B18D', type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Battery', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
    { faCenter: 'feather-droplet', foregroundColor: '#9DCB7A', colorIcon: '#9DCB7A', type: 'arch', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
    { faCenter: 'feather-layers', foregroundColor: '#919DEB', colorIcon: '#919DEB', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 }
  ]
}