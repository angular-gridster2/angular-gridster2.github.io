import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.scss']
})
export class ButtonWidgetComponent implements OnInit, OnDestroy {
  @Input() widget: any;

  public buttonStyles: any = {
    roundCorner: 'round_corner', // class
    capsule: 'capsule',
    rectangle: 'rectangle'
  };
  public bgStyles: any = {
    solid: 'solid', // class
    gradient1: 'gradient1',
    gradient2: 'gradient2'
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getBackground(bgStyle, color = '#9FFFB1'): string {
    if (bgStyle === this.bgStyles.gradient1) {
      return Util.bgGradient2(180, color, -220);
    } else if (bgStyle === this.bgStyles.gradient2) {
      return Util.bgGradient2(90, color, -220);
    } else {
      return color;
    }
  }

}

export const ButtonWidget = {
  type: 'button',
  component: ButtonWidgetComponent,
  defaultConfig: []
}