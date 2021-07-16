import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from "@angular/core";
import { EditorService } from '../../../components/editor/editor.service';
import example from '../../../components/editor/example';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})

export class TopBarPreviewComponent implements OnInit, OnChanges {
    @Input() breadcumb = '';
    @Input() viewOnly: any;
    @Input() globalConfig: any;
    sidebarActive: boolean = false;
    isShowLogo: boolean = true;
    logoUrl: any;
    isCollapsed = false;
    screenType: string;
    dashboardItems = []
    page = ''
    constructor(
        private cdf: ChangeDetectorRef,
        public editorService: EditorService,
        private router: Router
    ) {
        // Mode view/edit
        this.editorService.viewOnly.subscribe((preview) => {
            if (!preview) {
                this.sidebarActive = false;
                this.isCollapsed = false;
            }
        });
        // Screen type
        this.editorService.pageType.subscribe((type) => {
            this.screenType = type;
        });
        Object.keys(example).map((key) => {
            if (example[key].type == 'dashboard')
                this.dashboardItems.push({
                    link: key,
                    name: example[key].name
                })
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
        this.page = this.editorService.page
    }

    move() {
        this.sidebarActive = !this.sidebarActive;
        this.isCollapsed = false;
    }

    changeLogo(files) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            console.log('Only images are supported.');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.logoUrl = reader.result;
            this.cdf.detectChanges();
        };
    }

    showHideLogo() {
        this.isShowLogo = !this.isShowLogo;
    }

    nextPage() {
        let i = this.dashboardItems.findIndex((el) => el.link == this.page)
        if (this.dashboardItems[i + 1])
            this.router.navigateByUrl('/editor?page=' + this.dashboardItems[i + 1].link)
        else
            this.router.navigateByUrl('/editor?page=' + this.dashboardItems[0].link)
    }

    prevPage() {
        let i = this.dashboardItems.findIndex((el) => el.link == this.page)
        if (this.dashboardItems[i - 1])
            this.router.navigateByUrl('/editor?page=' + this.dashboardItems[i - 1].link)
        else
            this.router.navigateByUrl('/editor?page=' + this.dashboardItems[this.dashboardItems.length - 1].link)
    }

    previewDashboard(dashboardItem) {
        localStorage.setItem('viewMode', 'preview')
        this.router.navigateByUrl('/editor?page=' + dashboardItem.link);
    }

    getDashboardName() {
        const item = this.dashboardItems.find(f => f.link === this.breadcumb);
        return item && item['name'];
    }
}

