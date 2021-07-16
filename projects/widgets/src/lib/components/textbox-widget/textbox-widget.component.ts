import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-textbox-widget',
  templateUrl: './textbox-widget.component.html',
  styleUrls: ['./textbox-widget.component.scss']
})
export class TextboxWidgetComponent implements OnInit, OnDestroy {
  @Input() widget: any;
  public inputStyles: any = {
    roundCorner: 'round_corner',
    underline: 'underline',
    capsule: 'capsule',
    rectangle: 'rectangle'
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}

export const TextboxWidget = {
  type: 'textbox',
  component: TextboxWidgetComponent,
  defaultConfig: []
}
