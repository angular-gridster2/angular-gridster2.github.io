import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysite-all-result',
  templateUrl: './mysite-all-result.component.html',
  styleUrls: ['./mysite-all-result.component.scss']
})
export class MysiteAllResultComponent implements OnInit {
  isList: string = 'grid';
  currentPage: number = 2;

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

  // Slice Fake
  returnedSliceItemSites: any[] = [];
  currentPageSites = 1;

  constructor() { }

  ngOnInit(): void {
    this.initPagingFake();
  }

  initPagingFake() {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.itemSites = [...this.itemSites, ...this.itemSites, ...this.itemSites, ...this.itemSites];
    this.pageChangedSites({ page: 1, itemsPerPage: 12 });
  }

  pageChangedSites(event): void {
    // DEMO https://valor-software.com/ngx-bootstrap/#/pagination
    this.currentPageSites = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedSliceItemSites = this.itemSites.slice(startItem, endItem);
  }

  formatMode(mode: string) {
    this.isList = mode;
  }

}