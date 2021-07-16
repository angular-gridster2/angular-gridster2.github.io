import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-thing-detail',
    templateUrl: './thing-detail.component.html',
    styleUrls: ['./thing-detail.component.scss']
})


export class ThingDetailComponent implements OnInit {
    @Input() globalConfig: any;

    sensorItems = [
        {
            icon: 'fas fa-border-all',
            content: '21.0007,105.7938112583,15',
            name: 'GPS'
        },
        {
            icon: 'fas fa-border-all',
            content: '37.5',
            name: 'Temperature'
        },
        {
            icon: 'fas fa-border-all',
            content: '44.06',
            name: 'Humidity'
        },
        {
            icon: 'fas fa-border-all',
            content: '1',
            name: 'Lamp'
        },
        {
            icon: 'fas fa-border-all',
            content: '97%',
            name: 'Batery'
        },
        {
            icon: 'fas fa-border-all',
            content: '58',
            name: 'Guage'
        },
        {
            icon: 'fas fa-border-all',
            content: '-59',
            name: 'RSSLNB'
        },
        {
            icon: 'fas fa-border-all',
            content: '0',
            name: 'RSSLWi-Fi'
        },
        {
            icon: 'fas fa-border-all',
            content: '1',
            name: 'Light'
        },
        {
            icon: 'fas fa-border-all',
            content: '100',
            name: 'RSSLWi-Fi'
        }



    ];

    constructor() { }

    ngOnInit() {
    }
}

export const ThingDetailWidget = {
    type: 'page',
    component: ThingDetailComponent,
    defaultconfig: []
};
