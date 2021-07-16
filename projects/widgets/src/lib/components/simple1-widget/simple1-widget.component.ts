import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-simple1-widget',
  templateUrl: './simple1-widget.component.html',
  styleUrls: ['./simple1-widget.component.scss']
})
export class Simple1WidgetComponent implements OnInit {

  @Input() widget: any;
  @Input() gridInfo: any;

  public width: number;
  public height: number;
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

  // Check hasOwnProperty
  public canActivate(filed): boolean {
    return this.widget.config.hasOwnProperty(filed);
  }

  /**
   * ThresholdIcon
   */
  public getObjByRange() {
    const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faTopLeft };
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

}

export const Simple1Widget = {
  name: 'Simple 1',
  type: 'component',
  component: Simple1WidgetComponent,
  defaultConfig: [
    { faTopLeft: 'fa fa-battery-full', colorIcon: '#E8829A', format: 'square', value: '100', centerVariable: '%', bottomVariable: 'Battery', iconMin: 0, iconMax: 100 },
    { faTopLeft: 'feather-thermometer', colorIcon: '#E8829A', format: 'square', value: '25', centerVariable: '℃', bottomVariable: 'Temperature', iconMin: 0, iconMax: 100 },
    { faTopLeft: 'feather-layers', colorIcon: '#73B18D', format: 'square', value: '77', centerVariable: '%', bottomVariable: 'RH%', iconMin: 0, iconMax: 100 },
    { faTopLeft: 'feather-droplet', colorIcon: '#97C9DE', format: 'square', value: '6.00', centerVariable: '', bottomVariable: 'pH', iconMin: 0, iconMax: 100 },
    { faTopLeft: 'feather-droplet', colorIcon: '#C58ECC', format: 'square', value: '67.1', centerVariable: '%', bottomVariable: 'Humidity', iconMin: 0, iconMax: 100 },
    { faTopLeft: 'feather-cloud-rain', colorIcon: '#C58ECC', format: 'square', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfail', iconMin: 0, iconMax: 100 }
  ]
}