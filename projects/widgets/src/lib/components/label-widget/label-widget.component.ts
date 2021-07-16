import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-label-widget',
  templateUrl: './label-widget.component.html',
  styleUrls: ['./label-widget.component.scss']
})
export class LabelWidgetComponent implements OnInit, OnDestroy {
  @Input() widget: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getColor(): string {
    // tslint:disable-next-line: max-line-length
    return Util.convertHexOpacity(this.widget.config.styles && this.widget.config.styles.color, this.widget.config.styles && this.widget.config.styles.opacity);
  }

}

export const LabelWidget = {
  type: 'label',
  component: LabelWidgetComponent,
  defaultConfig: []
};
