import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridsterConfig } from 'angular-gridster2';
import Exampledata from '../editor/example';

@Component({
    selector: 'app-destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.scss'],
})

export class DestinationComponent implements OnInit {

    public bg = '#204D43';
    page = '';
    public options: GridsterConfig = {
        minCols: 32,
        minRows: 16,
        maxCols: 32,
        maxRows: 16,
        outerMargin: false,
        disableScrollHorizontal: true,
        disableScrollVertical: true,
        draggable: {
            enabled: false,
        },
        resizable: {
            enabled: false
        },
        allowMultiLayer: true,
    };
    public dataLayout: any[] = [];

    constructor(private router: Router,private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(params => {
            this.page = params['page'];
            if(params['page'])
                this.dataLayout = Exampledata[params['page']]?Exampledata[params['page']]:[]
        });
        this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
    }

    ngOnInit() {}

    public parseGradient(color): string {
        return `linear-gradient(0deg, rgba(18,17,18,1) 0%, #080808 48%, ${color} 100%)`;
    }
}
