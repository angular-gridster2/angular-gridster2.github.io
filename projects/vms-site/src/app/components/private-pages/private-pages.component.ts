import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDataService } from '../../services/pageData.service';

@Component({
    selector: 'private-pages-component',
    templateUrl: './private-pages.component.html',
    styleUrls: ['./private-pages.component.scss'],
})
export class PrivatePagesComponent implements OnInit {
    @ViewChild('grid', { static: false }) grid;
    @ViewChild('container', { static: true, read: ViewContainerRef }) container;
    public globalConfig: any = {};
    public pageType = '';
    public breadcumb = '';
    public widgets: any[] = [];
    public options: GridsterConfig = {
        //displayGrid: DisplayGrid.Always,
        gridType: 'scrollVertical',
        minCols: 28,
        minRows: 18,
        maxCols: 28,
        maxRows: 18,
        outerMargin: false,
        margin: 20,
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
        private pageData: PageDataService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.pageData.widgets.subscribe((value) => {
            this.widgets = value
        });
        this.pageData.pageConfig.subscribe((value) => {
            this.globalConfig = value
        });
        this.pageData.pageType.subscribe((value) => {
            this.pageType = value
            if (value == 'dashboard') {
                this.options.minCols = 6;
                this.options.maxCols = 6;
                this.options.minRows = 5;
                this.options.maxRows = 100;
                try {
                    this.options.api.optionsChanged();
                    this.options.api.resize()
                } catch (err) { }
            }
        });
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
