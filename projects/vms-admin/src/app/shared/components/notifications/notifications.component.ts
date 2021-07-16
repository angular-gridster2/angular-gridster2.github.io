import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private router: Router) { }

  dataNoti = [
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Jun1 Aug 2020 3:29 PM (4 days ago)"
    },
    {
      notiText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      notiDate: "1 Aug 2020 3:29 PM (4 days ago)"
    }
  ];


  ngOnInit(): void {
  }

  SeeAll() {
    this.router.navigate(['notification-all']);
  }

  notificationsDetail(){
    this.router.navigate(['notification-details']);
  }
}
