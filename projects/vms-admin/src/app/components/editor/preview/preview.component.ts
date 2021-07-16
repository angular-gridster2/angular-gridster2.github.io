import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import Exampledata from '../example';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('page') page: any;

  // tslint:disable-next-line:no-input-rename
  @Input('pageConfig') pageConfig: any = {
    themeBackground: 'linear-gradient(0deg, rgb(18, 17, 18) 0%, rgb(8, 8, 8) 40%, rgb(32, 77, 67) 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(0deg, #040207 0%, #000011 48%, #103D34 100%)'
    },
    TextboxWidget: {
      styles: { background: 'transparent' }
    },
    ButtonWidget: {
      background: '#9FFFB1'
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
    Simple2Widget: {
      colorIcon: '#9FFFB1'
    },
    Simple1Widget: {
      colorIcon: '#9FFFB1'
    }
  };

  public options: GridsterConfig = {
    minCols: 28,
    minRows: 18,
    maxCols: 28,
    maxRows: 18,
    outerMargin: false,
    disableScrollHorizontal: true,
    disableScrollVertical: true,
    draggable: {
      enabled: false,
    },
    resizable: {
      enabled: false
    },
    allowMultiLayer: true,
  };

  public options2: GridsterConfig = {
    minCols: 6,
    minRows: 5,
    maxCols: 6,
    maxRows: 5,
    outerMargin: false,
    disableScrollHorizontal: true,
    disableScrollVertical: true,
    draggable: {
      enabled: false,
    },
    resizable: {
      enabled: false
    },
    allowMultiLayer: true,
  };

  public dataLayout: any[];
  refreshed = true;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {

  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(change) {
    this.refreshed = false;
    this.dataLayout = Exampledata[this.page.key] && Exampledata[this.page.key].widgets.map((el) => {
      return { ...el, resizeEnabled: false };
    });
    setTimeout(() => {
      this.refreshed = true;
      if (this.options.api) {
        this.options.api.resize();
        this.options.api.optionsChanged();
      }
      if (this.options2.api) {
        this.options2.api.resize();
        this.options2.api.optionsChanged();
      }
      this.ref.detectChanges();
    }, 200);
  }
}
