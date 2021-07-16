import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() titleBanner: string;
  @Input() bgType: boolean;
  @Input() isHome: boolean = false;
  @Input() isMySite: boolean = false;
  @Input() isTemplate: boolean = false;
  @Input() isProfile: boolean = false;

  constructor(private router: Router) { }
  ngOnInit() { }

  getStarted() {
    this.router.navigate(['signup']);
  }
}
