import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() background: string = 'blue';
  @Input() color: string = '';
  @Input() mode = 1;

  public isShowNotifications = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  login() {
    this.router.navigate(['login']);
  }

  signup() {
    this.router.navigate(['signup']);
  }

  onReload() {
    this.router.navigateByUrl('/mysite');
  }

  onDropdown() {
    this.isShowNotifications = false;
  }

  showNotifications() {
    this.isShowNotifications = !this.isShowNotifications;
  }

  @HostListener('window:click', ['$event.target'])
  onClickOutsite(e) {
    // Close notification
    if (this.isShowNotifications && e.className !== 'feather-bell cursor_pointer') {
      this.isShowNotifications = false;
    }
  }
}
