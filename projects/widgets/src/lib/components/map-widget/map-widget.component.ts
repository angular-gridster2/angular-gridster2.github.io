import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {

  constructor() { }

  location: Location

  ngOnInit() {
    this.location = {
      latitude: 9.17682,
      longitude: 109.32094
    }
  }
}

interface Location {
  latitude: number;
  longitude: number
}

export const MapWidget = {
  name: 'Map',
  type: 'component',
  component: MapWidgetComponent,
  defaultConfig:[{
    lat: '1231',
    lng: '12312'
  }]
}
