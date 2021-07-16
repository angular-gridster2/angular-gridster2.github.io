import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDataService } from '../../services/pageData.service';

@Component({
    selector: 'public-pages-component',
    templateUrl: './public-pages.component.html',
    styleUrls: ['./public-pages.component.scss'],
})
export class PublicPagesComponent implements OnInit {
    @ViewChild('grid',{ static:false }) grid
    @ViewChild('container', { static: true, read: ViewContainerRef }) container;
    globalConfig: any ={};
    type = ''
    public widgets: any[] = [];
    public options: GridsterConfig = {
        //displayGrid: DisplayGrid.Always,
        gridType: 'scrollVertical',
        minCols: 28,
        minRows: 18,
        maxCols: 28,
        maxRows: 18,
        outerMargin: false,
        margin:20,
        disableScrollHorizontal: true,
        disableScrollVertical: true,
        draggable: {
            enabled: false
        },
        resizable: {
            enabled: false
        },
        allowMultiLayer: true
    };
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private cdr: ChangeDetectorRef,
        private pageData: PageDataService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.pageData.widgets.subscribe((value)=>{
            this.widgets = value
        })
        this.pageData.pageConfig.subscribe((value)=>{
            this.globalConfig = value
        })
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.pageData.getWidgets(params.page)
        });
    }

    trackBy(index, item) {
        return item.id + JSON.stringify(item.widget)
    }
}
