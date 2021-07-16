import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash';
import Exampledata from './example';
import themes from './themes';

@Injectable({
  providedIn: 'root',
})

export class PageDataService {

  public data = Exampledata;
  widgets: BehaviorSubject<any> = new BehaviorSubject([]);
  page = '';
  pageType: BehaviorSubject<any> = new BehaviorSubject(null);
  pageConfig: BehaviorSubject<any> = new BehaviorSubject({
    themeAuthBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
    themeBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #103F36 0%, #001A23 22%, #000012 52%, #121212 100%)'
    },
    TextboxWidget: {
      styles: { background: "transparent" }
    },
    ButtonWidget: {
      background: "#9FFFB1"
    },
    Gauge1Widget: {
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge2Widget: {
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge3Widget: {
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Simple1Widget: {
      colorIcon: '#9FFFB1',
    },
    LinkWidget: {
      styles: {
        color: '#9FFFB1'
      },
    },
    ChartWidget: {
      graphOption: {
        defaulColor: '#9FFFB1'
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      }
    }
  });

  constructor(private router: Router) { }

  getWidgets(page) {
    this.page = page;
    let data = this.data[page] ? cloneDeep(this.data[page].widgets) : []
    let type = this.data[page] ? this.data[page].type : ''
    let theme = JSON.parse(localStorage.getItem('theme'))
    if (theme) {
      this.pageConfig.next(themes[theme])
    }
    this.widgets.next(data)
    this.pageType.next(type)
  }

}
