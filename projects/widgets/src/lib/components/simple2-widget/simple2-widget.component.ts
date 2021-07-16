import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-simple2-widget',
  templateUrl: './simple2-widget.component.html',
  styleUrls: ['./simple2-widget.component.scss']
})
export class Simple2WidgetComponent implements OnInit {

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
      const value = this.widget.config && this.widget.config.value;
      const match = Object.keys(this.widget.config.thresholdIcon)
        .filter(function (item) { return (item && value) ? item.toLowerCase() === value.toLowerCase() : item === value; })[0];
      return match ? this.widget.config.thresholdIcon[match] : base;
    } else {
      return base;
    }
  }

}

export const Simple2Widget = {
  name: 'Simple 2',
  type: 'component',
  component: Simple2WidgetComponent,
  defaultConfig: [
    { faTopLeft: 'feather-sun', colorIcon: '#E8829A', format: 'square', value: 'On', centerVariable: '', bottomVariable: 'Light' },
    { faTopLeft: 'feather-wifi', colorIcon: '#9FFFB1', format: 'square', value: 'On', centerVariable: '', bottomVariable: 'Wifi' },
  ]
}
