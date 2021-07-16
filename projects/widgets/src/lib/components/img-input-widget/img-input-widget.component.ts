import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-img-input-widget.',
    templateUrl: './img-input-widget.component.html',
    styleUrls: ['./img-input-widget.component.scss'],
})
export class ImgInputWidgetComponent implements OnInit {
    @Input() widget: any;

    constructor() { }

    ngOnInit() {
    }

}

export const ImgInputWidget = {
    type: 'input',
    component: ImgInputWidgetComponent,
    defaultConfig:[]
  }
