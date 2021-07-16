import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-project-all-result',
  templateUrl: './my-project-all-result.component.html',
  styleUrls: ['./my-project-all-result.component.scss'],
})
export class MyProjectAllResultComponent implements OnInit {
  selected = '1';
  type = 1;
  isList = true;
  title: string = 'Websites';
  statusProject = 0;

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
      text: 'Inactive',
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
      text: 'Draft',
    },
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
  ]

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
    },
  ];

  currentPage: number = 2;
  employee: any;
  searchResult = [];
  // Slice Fake
  returnedSliceItemProjects: any[] = [];
  currentPageProjects = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeType();
    this.initPagingFake();
  }

  initPagingFake() {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.itemProjects = [...this.itemProjects, ...this.itemProjects, ...this.itemProjects, ...this.itemProjects];
    this.pageChangedProjects({ page: 1, itemsPerPage: 12 });
  }

  searchEmps(event): void {
    this.searchResult = this.dataSearch.filter((c) =>
      c.name.startsWith(event.query)
    );
  }

  @ViewChild('keyword') keyword: ElementRef;
  closeSearchList() {
    this.searchResult = [];
    this.keyword.nativeElement.value = null;
  }

  searchData(keyword) {
    if (keyword) {
      this.searchResult = this.dataSearch.filter((rs) => {
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
      });
    } else {
      this.searchResult = [];
    }
  }
  createProject() {
    this.router.navigate(['create-project']);
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

  pageChangedProjects(event): void {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.currentPageProjects = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedSliceItemProjects = this.itemProjects.slice(startItem, endItem);
  }

  onEditSite(): void {
    this.router.navigateByUrl('/editor?page=login&layout=full');
  }

  previewSite() {
    localStorage.setItem('viewMode', 'preview');
    this.router.navigateByUrl('/editor?page=login&layout=full');
  }
}
