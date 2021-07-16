import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import example from '../../../services/example';

@Component({
  selector: 'app-topbar-preview',
  templateUrl: './topbar-preview.component.html',
  styleUrls: ['./topbar-preview.component.scss']
})
export class TopbarPreviewComponent implements OnInit {
  @Input() breadcumb: string;
  @Input() pageType: string;
  @Input() globalConfig: any;

  public sidebarActive: boolean = false;
  public isShowLogo: boolean = true;
  public logoUrl: any;
  public isCollapsed = false;
  public dashboardItems = []
  public page = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    Object.keys(example).map((key) => {
      if (example[key].type == 'dashboard') {
        this.dashboardItems.push({
          link: key,
          name: example[key].name
        });
      }
    });
  }

  move() {
    this.sidebarActive = !this.sidebarActive;
    this.isCollapsed = false;
  }

  nextPage() {
    let i = this.dashboardItems.findIndex((el) => el.link == this.page)
    if (this.dashboardItems[i + 1]) {
      this.router.navigateByUrl('/private?page=' + this.dashboardItems[i + 1].link)
    } else {
      this.router.navigateByUrl('/private?page=' + this.dashboardItems[0].link)
    }
  }

  prevPage() {
    let i = this.dashboardItems.findIndex((el) => el.link == this.page)
    if (this.dashboardItems[i - 1]) {
      this.router.navigateByUrl('/private?page=' + this.dashboardItems[i - 1].link)
    } else {
      this.router.navigateByUrl('/private?page=' + this.dashboardItems[this.dashboardItems.length - 1].link)
    }
  }

  editProfile() {
    this.router.navigateByUrl('/public?page=user-information');
  }

  changePassword() {
    this.router.navigateByUrl('/public?page=user-information');
  }

  getDashboardName() {
    const item = this.dashboardItems.find(f => f.link === this.route.snapshot.queryParams['page']);
    return item && item['name'];
  }
}

