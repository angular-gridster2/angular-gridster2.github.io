import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications-all',
  templateUrl: './notifications-all.component.html',
  styleUrls: ['./notifications-all.component.scss']
})
export class NotificationsAllComponent implements OnInit {
  formGroup: FormGroup;
  form1: true;
  form2: false;
  selectedIndex = -1;

  // Demo paging
  returnedSliceItem: any[] = [];
  currentPage = 1;

  // Dumy data
  dataNoti = [
    {
      id: 1,
      notiText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 2,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 3,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 4,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 5,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Jun1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 6,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 7,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 8,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 9,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 10,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 11,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 12,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      id: 13,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    }, {
      id: 14,
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pageChangedProjects({ page: 1, itemsPerPage: 12 });
  }

  setSelected(id: number) {
    this.selectedIndex = id;
  }

  SeeDetails() {
    this.router.navigate(['notification-details']);
  }

  pageChangedProjects(event) {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedSliceItem = this.dataNoti.slice(startItem, endItem);
  }
}
