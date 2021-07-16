import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-shape-widget',
  templateUrl: './shape-widget.component.html',
  styleUrls: ['./shape-widget.component.scss']
})

export class ShapeWidgetComponent implements OnInit {
  @Input() widget: any;

  constructor() { }

  ngOnInit(): void {
  }

}

export const ShapeWidget = {
  type: 'shape',
  component: ShapeWidgetComponent,
  defaultConfig:[]
}
