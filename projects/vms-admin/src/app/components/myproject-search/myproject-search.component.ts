import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproject-search',
  templateUrl: './myproject-search.component.html',
  styleUrls: ['./myproject-search.component.scss']
})
export class MyprojectSearchComponent implements OnInit {

  constructor(private router: Router) { }

  isList: any = false;

  itemProjects = [
    {
      id: 1,
      name: 'Project A',
      time: ' 31 May 2020 ,12:00',
      status: 1,
    },
    // {
    //   id: 2,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 0,
    // },
    // {
    //   id: 3,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 4,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 0,

    // },
    // {
    //   id: 5,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 6,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 7,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 8,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 0,
    // },
    // {
    //   id: 9,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 10,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 11,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // },
    // {
    //   id: 12,
    //   name: '{ProjectName}',
    //   time: ' 31 May 2020 ,12:00',
    //   status: 1,
    // }
  ];

  formatGrid() {
    this.isList = true;
  }

  formatList() {
    this.isList = false;
  }

  ngOnInit(): void {
  }

  onEditSite(): void {
    this.router.navigateByUrl('/editor?page=login');
    localStorage.setItem('editMode', 'false');
  }

}
