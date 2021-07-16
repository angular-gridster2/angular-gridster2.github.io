import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteModalComponent } from '../../shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  @ViewChild('deleteModal', { static: true }) deleteModal: DeleteModalComponent;
  @ViewChild('unpublishedModal', { static: true }) unpublishedModal: DeleteModalComponent;

  statusCard = [
    {
      id: 0,
      text: 'Pending',
    },
    {
      id: 1,
      text: 'Active',
    },
    {
      id: 2,
      text: 'Inactive'
    },
    {
      id: 3,
      text: 'Ban',
    },
    {
      id: 4,
      text: 'Terminated',
    },
    {
      id: 5,
      text: 'Draft'
    }
  ];

  itemSites = [
    {
      id: 1,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_default.png',
      status: 1
    },
    {
      id: 2,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_blue.png',
      status: 2
    },
    {
      id: 3,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_pink.png',
      status: 1
    },
    {
      id: 4,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_orange.png',
      status: 1
    },
    {
      id: 5,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_lightGreen.png',
      status: 1
    },
    {
      id: 6,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_purple.png',
      status: 3
    },
    {
      id: 7,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_violet.png',
      status: 2
    },
    {
      id: 8,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_teal.png',
      status: 4
    },
    {
      id: 9,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_darkGreen.png',
      status: 4
    },
    {
      id: 10,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_gray.png',
      status: 3
    },
    {
      id: 11,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_pink.png',
      status: 1
    },
    {
      id: 12,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_orange.png',
      status: 2
    },
    {
      id: 13,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_purple.png',
      status: 3
    },
    {
      id: 14,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_violet.png',
      status: 2
    },
    {
      id: 15,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_gray.png',
      status: 3
    },
    {
      id: 16,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_blue.png',
      status: 2
    },
    {
      id: 17,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_pink.png',
      status: 1
    },
    {
      id: 18,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_teal.png',
      status: 4
    },
    {
      id: 19,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      image: 'Screenshot_mysite_darkGreen.png',
      status: 4
    }
  ];

  itemProjects = [
    {
      id: 1,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 2,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 3,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 4,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 5,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 6,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 7,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 8,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 9,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 10,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 11,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 12,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 13,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 14,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 15,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 16,
      name: '{ProjectName}',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    }
  ];

  dataSearch = [
    {
      id: 1,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 2,
      name: 'Project A',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 3,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 2,
    },
    {
      id: 4,
      name: 'ProjectName1',
      time: ' 31 May 2020 ,12:00',
      status: 3,

    },
    {
      id: 5,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 6,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 7,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 8,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 2,
    },
    {
      id: 9,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 10,
      name: 'Project B',
      time: ' 31 May 2020 ,12:00',
      status: 0,
    },
    {
      id: 11,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 3,
    },
    {
      id: 12,
      name: 'ProjectName',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    {
      id: 12,
      name: 'Project A',
      time: ' 31 May 2020 ,12:00',
      status: 5,
    },
    {
      id: 12,
      name: 'Project B',
      time: ' 31 May 2020 ,12:00',
      status: 5,
    },
    {
      id: 12,
      name: 'Project B',
      time: ' 31 May 2020 ,12:00',
      status: 4,
    },
    {
      id: 12,
      name: 'Project B',
      time: ' 31 May 2020 ,12:00',
      status: 4,
    },
    {
      id: 12,
      name: 'Project B',
      time: ' 31 May 2020 ,12:00',
      status: 4,
    }
  ];

  currentPage: number = 2;
  employee: any;
  searchResult = [];
  selected = '1';
  type = 1;
  isList = true;
  title: string = 'Websites';
  statusProject = 0;
  rename = null
  // Slice Fake
  returnedSliceItemSites: any[] = [];
  returnedSliceItemProjects: any[] = [];
  currentPageSites = 1;
  currentPageProjects = 1;

  constructor(
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.aRouter.queryParams.subscribe(params => {
      if (params['page'] && params['page'] === 'my-project') {
        this.type = 2;
      }
      else if (params['type'] && params['type'] === 'list-view-project') {
        this.type = 2;
        this.isList = false;
      }
    });
  }

  //
  searchEmps(event): void {
    this.searchResult = this.dataSearch.filter(c => c.name.startsWith(event.query));
  }

  @ViewChild('keyword') keyword: ElementRef;
  closeSearchList() {
    this.searchResult = [];
    this.keyword.nativeElement.value = null;
  }

  searchData(keyword) {
    if (keyword) {
      this.searchResult = this.dataSearch.filter(rs => {
        switch (true) {
          case 'inactive'.startsWith(keyword.toLowerCase()):
            return rs.status === 2;
          case 'pending'.startsWith(keyword.toLowerCase()):
            return rs.status === 0;
          case 'active'.startsWith(keyword.toLowerCase()):
            return rs.status === 1;
          case 'ban'.startsWith(keyword.toLowerCase()):
            return rs.status === 3;
          case 'terminated'.startsWith(keyword.toLowerCase()):
            return rs.status === 4;
          case 'draft'.startsWith(keyword.toLowerCase()):
            return rs.status === 5;
          default:
            return rs.name.toLowerCase().includes(keyword.toLocaleLowerCase());
        }
      })

    } else {
      this.searchResult = [];
    }

  }
  //
  ngOnInit() {
    this.activeType();
    this.initPagingFake();
  }
  initPagingFake() {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.itemSites = [...this.itemSites, ...this.itemSites, ...this.itemSites, ...this.itemSites];
    this.pageChangedSites({ page: 1, itemsPerPage: 12 });
    this.itemProjects = [...this.itemProjects, ...this.itemProjects, ...this.itemProjects, ...this.itemProjects];
    this.pageChangedProjects({ page: 1, itemsPerPage: 12 });
  }
  createProject() {
    this.router.navigate(['/select-template'], { queryParams: { page: 'my-template' } });
  }
  toggle() {
    this.isList = !this.isList;
  }
  activeWebsite() {
    this.type = 1;
    this.title = 'Websites';
  }
  activeProject() {
    this.type = 2;
    this.title = 'Project';
  }
  activeType() {
    const TYPE_BUTTON = document.querySelectorAll('.btn-type');

    for (let i = 0; i < TYPE_BUTTON.length; i++) {
      TYPE_BUTTON[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('btn-active');
        current[0].className = current[0].className.replace(' btn-active', '');
        TYPE_BUTTON[i].className += ' btn-active';
        if (TYPE_BUTTON[0].classList.contains('btn-active')) {
          this.type = 1;
        }
        if (TYPE_BUTTON[1].classList.contains('btn-active')) {
          this.type = 2;
        }
      });
    }
  }

  onEditSite(): void {
    this.router.navigateByUrl('/editor?page=login');
    localStorage.setItem('editMode', 'false');
  }

  showDetail(e): void {
    this.searchResult = []
    setTimeout(()=>{
      if (this.type === 1) {
        this.router.navigateByUrl('/site-detail');
      } else {
        this.router.navigateByUrl('/myproject-search');
      }
    },200)
  }

  pageChangedSites(event): void {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.currentPageSites = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedSliceItemSites = this.itemSites.slice(startItem, endItem);
  }

  pageChangedProjects(event): void {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.currentPageProjects = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedSliceItemProjects = this.itemProjects.slice(startItem, endItem);
  }

  onViewSite() {
    localStorage.setItem('viewMode', 'preview');
    this.router.navigateByUrl('/editor?page=dashboard-1');
  }

  previewSite() {
    localStorage.setItem('viewMode', 'preview');
    this.router.navigateByUrl('/editor?page=login');
  }
}
