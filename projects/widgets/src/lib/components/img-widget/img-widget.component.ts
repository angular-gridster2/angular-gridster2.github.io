import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'lib-img-widget',
  templateUrl: './img-widget.component.html',
  styleUrls: ['./img-widget.component.scss']
})
export class ImgWidgetComponent implements OnInit, AfterViewChecked {
  @Input() widget: any;
  public hiden = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.hiden = localStorage.getItem('switchMode') === 'preview' ? true : false;
  }
}

export const ImgWidget = {
  type: 'image',
  component: ImgWidgetComponent,
  defaultConfig:[{disabled: false, alt: 'image'}]
}
