import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  userList = [
    {
      id: 1,
      name: 'Rachel Bradley',
      role: 1,
      email: 'Kevin_ot@gmarachel.bl@gmail.com',
      status: 0,
      lastAttended: '15 May 2020',
    },
    {
      id: 2,
      name: 'Kevin Elliot',
      role: 2,
      email: 'Kevin_ot@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 3,
      name: 'Larry Holland',
      role: 1,
      email: 'larry.holland@gmail.com',
      status: 0,
      lastAttended: '15 May 2020',
    },
    {
      id: 4,
      name: 'Jerry Reynolds',
      role: 2,
      email: 'Kevin_ojerry_reynolds@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 5,
      name: 'Randy Wells',
      role: 2,
      email: 'Krandy.wells01@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 6,
      name: 'Roy Lynch',
      role: 2,
      email: 'roy_lynch@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 7,
      name: 'Denise Griffin',
      role: 1,
      email: 'denise1984@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 8,
      name: 'Adam Vargas',
      role: 1,
      email: 'adam.vargas@gmail.com',
      status: 1,
      lastAttended: '15 May 2020',
    },
    {
      id: 9,
      name: 'Kathryn Gray',
      role: 2,
      email: 'kathryn_gray_real@gmail.com',
      status: 0,
      lastAttended: '15 May 2020',
    },
    {
      id: 10,
      name: 'Kevin Elliot',
      role: 3,
      email: 'Kevin_ot@gmail.com',
      status: 0,
      lastAttended: '15 May 2020',
    },
  ];
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  previewUserInfo() {
    if (localStorage.getItem('switchMode') === 'preview') {
      localStorage.setItem('viewMode', 'preview');
      this.router.navigateByUrl('/editor?page=user-information');
    }
  }

}

export const UserManagementWidget = {
  type: 'page',
  component: UserManagementComponent,
  defaultconfig: [],
};
