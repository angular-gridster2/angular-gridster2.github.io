import { Component, OnInit, Input } from '@angular/core';
import { Util } from '../../common/util';

@Component({
  selector: 'lib-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.scss']
})
export class LinkWidgetComponent implements OnInit {
  @Input() widget: any;

  constructor() { }

  ngOnInit(): void { }

  getColor(): string {
    // tslint:disable-next-line: max-line-length
    return Util.convertHexOpacity(this.widget.config.styles && this.widget.config.styles.color, this.widget.config.styles && this.widget.config.styles.opacity);
  }

  // Check hasOwnProperty
  public canActivate(filed): boolean {
    return this.widget.config.hasOwnProperty(filed);
  }

}

export const LinkWidget = {
  type: 'link',
  component: LinkWidgetComponent,
  defaultConfig: []
}
