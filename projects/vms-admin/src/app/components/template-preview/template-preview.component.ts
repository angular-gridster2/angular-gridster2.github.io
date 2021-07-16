import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import pages from '../editor/example';
import themes from '../editor/themes';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePreviewComponent implements OnInit {
  constructor(private router: Router, private ref: ChangeDetectorRef) { }
  //variables
  backgroundReview = 'rgb(0,0,0)';
  backgroundGradient =
    'linear-gradient(120deg, rgba(0,0,0,.8) 5%, rgba(0,0,0,1) 95%)';
  pagesList: any[] = [];
  page = { key: 'login', name: 'Login', type: 'auth' };
  mainTheme = 'light';
  themeActive = 'default';
  themeConfig: any;

  ngOnInit(): void {
    window.scroll(0, 0);
    let theme = JSON.parse(localStorage.getItem('theme'));
    if (theme) {
      this.mainTheme = theme.split('.')[0]
    }
    this.themeConfig = themes[this.mainTheme + '.' + this.themeActive];

    // Page list - only one dashboard 1 -
    const p = Object.keys(pages).map((key) => { return { key: key, name: pages[key].name, type: pages[key].type } });
    const dashboardFirst = p.find(f => f.name.includes('Dashboard'));
    this.pagesList = p.filter(f => !f.name.includes('Dashboard'));
    if (dashboardFirst) {
      dashboardFirst.name = 'Dashboard';
      this.pagesList.splice(1, 0, dashboardFirst);
    }
    // Page list - only one dashboard 1 -
  }

  public onUseThisTemplate(): void {
    this.router.navigateByUrl('create-project');
    localStorage.setItem('theme', JSON.stringify(this.mainTheme + '.' + this.themeActive));
  }

  selectTheme(key) {
    this.themeActive = key;
    this.themeConfig = themes[this.mainTheme + '.' + key];
  }
}
