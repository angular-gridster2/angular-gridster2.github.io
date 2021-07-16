import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-gauge1-widget',
  templateUrl: './gauge1-widget.component.html',
  styleUrls: ['./gauge1-widget.component.scss']
})
export class Gauge1WidgetComponent implements OnInit {
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

export const Gauge1Widget = {
  name: 'Gauge 1',
  type: 'component',
  component: Gauge1WidgetComponent,
  defaultConfig: [
    { type: 'full', value: 75, centerVariable: '%', bottomVariable: 'Humidity', thick: 15, foregroundColor: '#919DEB', gaugeMin: 0, gaugeMax: 100 },
    { type: 'arch', value: 25, centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, foregroundColor: '#96C8DD', gaugeMin: 0, gaugeMax: 40 },
    { type: 'semi', value: '6.00', centerVariable: '', bottomVariable: 'pH', thick: 15, foregroundColor: '#EA857A', gaugeMin: 0, gaugeMax: 8 }
  ]
}