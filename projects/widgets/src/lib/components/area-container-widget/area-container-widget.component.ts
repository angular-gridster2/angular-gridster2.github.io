import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-area-container-widget.',
    templateUrl: './area-container-widget.component.html',
    styleUrls: ['./area-container-widget.component.scss'],
})
export class AreaContainerWidgetComponent implements OnInit {
    @Input() widget: any;
    @Input() gridInfo: any;

    constructor() { }

    ngOnInit() {}

}

export const AreaContainerWidget = {
    type: 'rectangle',
    component: AreaContainerWidgetComponent,
    defaultConfig: []
}
