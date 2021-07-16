import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarActionService } from '../../shared/services/sidebar-action.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  
  currentPage: string;

  pages: {name: string, routeLink: string}[] = [
    {name : "Login", routeLink: "design-login"},
    {name : "Dashboard", routeLink: "design-dashboard"},
    {name : "Publish", routeLink: "publish"},
  ];

  constructor(private router: Router, private sidebarActionService: SidebarActionService) { }

  ngOnInit(): void {
    this.currentPage = this.pages[0].name;
  }

  changePage(event) {
    this.router.navigate([this.pages.find(p => p.name === this.currentPage).routeLink]);
  }

  dragStartHandler(ev, widgetType) {
    ev.dataTransfer.setData('text/plain', widgetType);
    ev.dataTransfer.dropEffect = 'copy';
  }

  doPublish() {
    if(this.currentPage === "Publish") {
      this.sidebarActionService.nextMessage('publish');
    }
  }
}
