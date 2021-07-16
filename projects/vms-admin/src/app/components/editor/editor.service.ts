import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep, uniqueId, merge } from 'lodash';
import Exampledata from './example';
import themes from './themes';

@Injectable({
  providedIn: 'root',
})

export class EditorService {

  public data = Exampledata;
  refresh = 0
  viewOnly: BehaviorSubject<boolean> = new BehaviorSubject(false);
  widgets: BehaviorSubject<any> = new BehaviorSubject([]);
  backupWidgets: any = [];
  public backupSelectedData = {
    layerIndex: '',
    x: '',
    y: '',
    rows: '',
    cols: ''
  }
  currentWidgetId: BehaviorSubject<any> = new BehaviorSubject(null);
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

  changePageConfig(key, obj, overwrite = true) {
    let newPageConfig = merge({}, this.pageConfig.value, obj);
    this.pageConfig.next(newPageConfig);
    let widgets = this.widgets.value.map((el) => {
      return cloneDeep(merge(
        {}, el,
        { widget: { config: newPageConfig[el.widget.name] } }
      ))
    })
    this.widgets.next(widgets)
    localStorage.setItem('theme', JSON.stringify(key))
  }

  getWidgets(page) {
    this.page = page;
    let data = this.data[page] ? cloneDeep(this.data[page].widgets) : []
    let type = this.data[page] ? this.data[page].type : ''
    this.backupWidgets = this.data[page] ? cloneDeep(this.data[page].widgets) : []
    let theme = JSON.parse(localStorage.getItem('theme'))
    if (theme) {
      this.pageConfig.next(themes[theme])
    }
    this.widgets.next(data)
    this.currentWidgetId.next(null)
    this.viewOnly.next(false)
    this.pageType.next(type)
  }

  toogleMode() {
    this.viewOnly.next(!this.viewOnly.value)
    let widgets = this.widgets.value.map((el) => {
      return {...el, dragEnabled: el.widget.name=='AreaContainerWidget'?false:!this.viewOnly.value }
    })
    this.widgets.next(widgets)
  }

  focusWidgetId(id) {
    let widgets = []
    if (id) {
      let max = 0
      this.widgets.value.map((el) => {
        if (el.layerIndex > max)
          max = el.layerIndex
      })
      widgets = this.widgets.value.map((el) => {
        if (el.id == id) {
          this.backupSelectedData = {
            layerIndex: el.layerIndex,
            x: el.x,
            y: el.y,
            rows: el.rows,
            cols: el.cols
          }
          return {...el, 
            layerIndex:max+1, 
            x:this.pageType.value=='dashboard'?0:el.x, 
            y:this.pageType.value=='dashboard'?0:el.y,  
            rows:this.pageType.value!='dashboard'?el.rows:(el.rows==el.cols || el.rows<el.cols)?1:2,
            cols:this.pageType.value!='dashboard'?el.cols:(el.rows==el.cols || el.cols<el.rows)?1:2,
            dragEnabled:false
          }
         
        }else
          return {...el, dragEnabled:false }
      }) 
    }else{
      widgets = this.widgets.value.map((el) => {
        if (el.id == this.currentWidgetId.value)
          return {...el, ...this.backupSelectedData, dragEnabled:el.widget.name=='AreaContainerWidget'?false:true }
        else 
          return {...el, dragEnabled:el.widget.name=='AreaContainerWidget'?false:true }
      }) 
    }
    this.currentWidgetId.next(id)
    this.widgets.next(widgets)
  }

  createWidget(widget) {
    let widgets = this.widgets.value.concat({ ...widget, id: uniqueId(this.page) })
    this.widgets.next(widgets)
  }

  changeWidget(widget) {
    let widgets = this.widgets.value
    let max = 0
    widgets.map((el) => {
      if (el.layerIndex > max)
        max = el.layerIndex
    })
    widgets = widgets.map((el) => {
      if (el.id == widget.id) {
        let layerChange = (widget.x == el.x && widget.y == el.y && (widget.rows != el.rows || widget.cols != el.cols))
        return { ...widget, layerIndex: layerChange ? max + 1 : el.layerIndex }
      } else return el
    })
    this.widgets.next(widgets)
  }

  duplicateTimeOut = null
  
  duplicate(widget) {
    let new_widget
    if (this.currentWidgetId.value)
      new_widget = { ...cloneDeep(widget), id: uniqueId(this.page), ...this.backupSelectedData }
    else
      new_widget = { ...cloneDeep(widget), id: uniqueId(this.page) }
    this.focusWidgetId(null)
    clearTimeout(this.duplicateTimeOut)
    this.duplicateTimeOut = setTimeout(() => {
      let data = this.widgets.value.concat(new_widget)
      this.widgets.next(data)
    }, 300)
  }

  removeWidget(widget) {
    let data = this.widgets.value.filter((el) => el.id != widget.id)
    this.focusWidgetId(null)
    this.widgets.next(data)
  }

  save() {
    this.data[this.page].widgets = this.widgets.value
  }

  revert() {
    this.widgets.next(cloneDeep(this.backupWidgets))
  }

  // resizeEnabled: true | false
  resizeWidgets(showHide) {
    let widgets = this.widgets.value;
    widgets = widgets.map((el) => {
      return el.hasOwnProperty('resizeEnabled') ? { ...el, resizeEnabled: showHide } : el;
    });
    this.widgets.next(widgets);
  }

  createDashBoard() {
    let pageKeys = Object.keys(this.data)
    let numberOfDashBoard = 0
    pageKeys.map((key) => {
      if (this.data[key].type == 'dashboard')
        numberOfDashBoard += 1
    })
    this.data['dashboard-' + (numberOfDashBoard + 1)] = {
      type: 'dashboard',
      name: 'Dashboard ' + (numberOfDashBoard + 1),
      widgets: []
    }
    this.router.navigateByUrl('/editor?page=' + 'dashboard-' + (numberOfDashBoard + 1))
  }

  duplicateDashboard(key) {
    let pageKeys = Object.keys(this.data)
    let numberOfDashBoard = 0
    pageKeys.map((key) => {
      if (this.data[key].type == 'dashboard')
        numberOfDashBoard += 1
    })
    this.data['dashboard-' + (numberOfDashBoard + 1)] = {
      type: 'dashboard',
      name: 'Dashboard ' + (numberOfDashBoard + 1) + ' duplicate of ' + this.data[key].name,
      widgets: cloneDeep(this.data[key].widgets)
    }
    this.router.navigateByUrl('/editor?page=' + 'dashboard-' + (numberOfDashBoard + 1))
  }

  deleteDashboard(key) {
    delete (this.data[key])
    if (this.page == key)
      this.router.navigateByUrl('/editor?page=dashboard')
    else
      this.router.navigateByUrl('/editor?page=' + this.page + '&refresh=' + key)
  }

  changeDashboardName(key, newName) {
    this.data[key].name = newName
    this.router.navigateByUrl('/editor?page=' + this.page + '&refresh=' + newName)
  }
}
