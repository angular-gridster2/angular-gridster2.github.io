// Angular
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
// App
import { EditorService } from '../editor.service';
import { ToolCustomiseService } from './tool-customise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool-customise',
  templateUrl: './tool-customise.component.html',
  styleUrls: ['./tool-customise.component.scss']
})
export class ToolCustomiseComponent implements OnInit, OnDestroy {
  @ViewChild('myBounds') myBounds;

  public clientX: number;
  public clientY: number;

  public isShowCustomiseWidget = false;
  public isGaugeBox = false;
  public isMapBox = false;
  public isGraphBox = false;
  public isCenterVariable = false;
  public isBottomVariable = false;
  public isShowCenterIcon = false;
  public isShowTopLeftIcon = false;
  public isShowSelectIcon = false;
  public isShowSelectColor = false;
  public widgets: any[] = [];
  public currentWidget: any;
  public widgetsSubscription: Subscription;
  public viewOnlySubscription: Subscription;
  public pageConfigSubscription: Subscription;
  public currentWidgetIdSubscription: Subscription;
  public toolCustomiseSubcriptions: Subscription[] = [];

  public isShowCustomiseButton = false;
  public isShowCustomiseText = false;
  public isShowCustomiseTextbox = false;
  public isShowCustomiseRectangle = false;

  public viewOnly: boolean;
  public globalConfig: any;
  public currentId: string;

  public screenParameter: any;

  public selectColorTitle: string;
  public screenType: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private editorService: EditorService,
    private activatedRoute: ActivatedRoute,
    private toolCustomiseService: ToolCustomiseService
  ) {
    // URL Query param
    this.activatedRoute.queryParams.subscribe(params => {
      this.screenParameter = params['page'];
    });
    // Screen type
    this.editorService.pageType.subscribe((type) => {
      this.screenType = type;
    });
    // Show box
    this.toolCustomiseSubcriptions.push(this.toolCustomiseService.eventShow.subscribe((value) => {
      const key = value && value[0];
      const e = value && value[1];
      if (key) {
        this.clientY = e && e.clientY;
        // Get new data info
        this.getData();
        // Show box
        switch (key) {
          case 'gaugeBox':
            // Close Level 3: If Open for the first time
            if (!this.isGaugeBox) {
              this.toolCustomiseService.closeBox(['selectIcon', 'selectColor']);
            }
            // Close Level 2
            this.toolCustomiseService.closeBox(['centerIcon', 'centerVariable', 'bottomVariable']);
            // Open it
            this.isGaugeBox = true;
            break;
          case 'mapBox':
            this.isMapBox = true;
            break;
          case 'graphBox':
            this.isGraphBox = true;
            break;
          case 'topLeftIcon':
            this.isShowTopLeftIcon = true;
            // Close
            this.toolCustomiseService.closeBox(['centerVariable', 'bottomVariable']);
            break;
          case 'centerIcon':
            // Close Level 3: If Open for the first time
            if (!this.isShowCenterIcon) {
              this.toolCustomiseService.closeBox(['selectIcon', 'selectColor']);
            }
            // Close Level 2
            this.toolCustomiseService.closeBox(['gaugeBox', 'centerVariable', 'bottomVariable']);
            // Open it
            this.isShowCenterIcon = true;
            break;
          case 'centerVariable':
            this.isCenterVariable = true;
            // Close Level 2
            this.toolCustomiseService.closeBox(['gaugeBox', 'topLeftIcon', 'centerIcon', 'bottomVariable']);
            // Close Level 3
            this.toolCustomiseService.closeBox(['selectIcon', 'selectColor']);
            break;
          case 'bottomVariable':
            this.isBottomVariable = true;
            // Close Level 2
            this.toolCustomiseService.closeBox(['gaugeBox', 'centerIcon', 'topLeftIcon', 'centerVariable']);
            // Close Level 3
            this.toolCustomiseService.closeBox(['selectIcon', 'selectColor']);
            break;
          case 'selectIcon':
            this.isShowSelectIcon = true;
            break;
          case 'selectColor':
            this.selectColorTitle = e;
            this.isShowSelectColor = true;
            break;
          case 'customiseWidget': // Leve 1
            this.clientX = e && e.clientX;
            this.isShowCustomiseWidget = true;
            this.cdr.detectChanges();
            break;
          case 'customiseButton': // Leve 1
            this.clientX = e && e.clientX;
            this.isShowCustomiseButton = true;
            this.cdr.detectChanges();
            break;
          case 'customiseText': // Leve 1
            this.clientX = e && e.clientX;
            this.isShowCustomiseText = true;
            this.cdr.detectChanges();
            break;
          case 'customiseTextbox': // Leve 1
            this.clientX = e && e.clientX;
            this.isShowCustomiseTextbox = true;
            this.cdr.detectChanges();
            break;
          case 'customiseRectangle': // Leve 1
            this.clientX = e && e.clientX;
            this.isShowCustomiseRectangle = true;
            this.cdr.detectChanges();
            break;
          default:
            break;
        }
        // Clear observer
        this.toolCustomiseService.showBox(null);
      }
    }));
    // Close box
    this.toolCustomiseSubcriptions.push(this.toolCustomiseService.eventClose.subscribe((key) => {
      switch (key) {
        case 'gaugeBox':
          this.isGaugeBox = false;
          break;
        case 'mapBox':
          this.isMapBox = false;
          break;
        case 'graphBox':
          this.isGraphBox = false;
          break;
        case 'topLeftIcon':
          this.isShowTopLeftIcon = false;
          break;
        case 'centerIcon':
          this.isShowCenterIcon = false;
          break;
        case 'centerVariable':
          this.isCenterVariable = false;
          break;
        case 'bottomVariable':
          this.isBottomVariable = false;
          break;
        case 'selectIcon':
          this.isShowSelectIcon = false;
          break;
        case 'selectColor':
          this.isShowSelectColor = false;
          break;
        default:
          // Close all
          this.closeAll();
          break;
      }
    }));
  }

  public closeAll = () => {
    // Close all
    this.isGaugeBox = false;
    this.isMapBox = false;
    this.isGraphBox = false;
    this.isCenterVariable = false;
    this.isBottomVariable = false;
    this.isShowCenterIcon = false;
    this.isShowTopLeftIcon = false;
    this.isShowSelectIcon = false;
    this.isShowSelectColor = false;

    // Level 1
    this.isShowCustomiseWidget = false;
    this.isShowCustomiseButton = false;
    this.isShowCustomiseText = false;
    this.isShowCustomiseTextbox = false;
    this.isShowCustomiseRectangle = false;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toolCustomiseSubcriptions.forEach(e => { e.unsubscribe(); });
  }

  private getData(): void {
    // Check viewOnly
    this.viewOnlySubscription = this.editorService.viewOnly.subscribe((viewOnly) => {
      this.viewOnly = viewOnly;
      setTimeout(() => { this.viewOnlySubscription.unsubscribe(); }, 0);
    });
    // Get globalConfig
    this.pageConfigSubscription = this.editorService.pageConfig.subscribe((value) => {
      this.globalConfig = value;
      setTimeout(() => { this.pageConfigSubscription.unsubscribe(); }, 0);
    });
    // Get current widget
    this.currentWidgetIdSubscription = this.editorService.currentWidgetId.subscribe((id) => {
      this.currentId = id;
      setTimeout(() => { this.currentWidgetIdSubscription.unsubscribe(); }, 0);
    });
    // Get widgets
    this.widgetsSubscription = this.editorService.widgets.subscribe((widgets) => {
      this.widgets = widgets;
      if (!this.viewOnly) {
        this.widgets.forEach((e, i) => {
          this.widgets[i].widget.config = { ...this.globalConfig[e.widget.name], ...e.widget['config'] };
        });
      }
      this.currentWidget = this.widgets.find(f => f.id === this.currentId);
      setTimeout(() => { this.widgetsSubscription.unsubscribe(); }, 0);
    });
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  // Calculator Container
  public calcContainer() {
    // Check null
    if (!this.currentWidget) {
      return false;
    }

    if (this.screenType === 'dashboard') {
      // Dashboard
      const left = this.currentWidget ? this.calcLeftDashboard(this.currentWidget.rows, this.currentWidget.cols) : 0;
      return { 'top.px': 160, 'left.px': left };
    } else if (this.screenType === 'auth') {
      // Login
      const showLeft = this.currentWidget.x >= 14;
      const y = this.currentWidget ? this.calcY(this.currentWidget, 1030) : 0;
      const x = this.currentWidget ? this.calcX(this.currentWidget, showLeft) : 0;
      if (showLeft) {
        // Show left
        return { 'top.px': 0, 'paddingTop.px': y < 50 ? 50 : y, 'paddingLeft.px': x };
      } else {
        // Show right
        return { 'top.px': 0, 'paddingTop.px': y < 50 ? 50 : y, 'paddingLeft.px': x };
      }
    } else {
      // Other
      const showLeft = this.currentWidget.x >= 14;
      const y = this.currentWidget ? this.calcY(this.currentWidget, 920) : 0;
      const x = this.currentWidget ? this.calcX(this.currentWidget, showLeft) : 0;
      if (showLeft) {
        // Show left
        return { 'top.px': 0, 'paddingTop.px': y < 160 ? 160 : y, 'left.px': x };
      } else {
        // Show right
        return { 'top.px': 0, 'paddingTop.px': y < 160 ? 160 : y, 'left.px': x };
      }
    }
  }

  public calcLeftDashboard(rows, cols) {
    const check = ((cols - rows) === 1) && cols === 2;
    const mod = 80;
    if (check) {
      return this.clientX + (cols * 150) + mod;
    } else {
      return this.clientX + 150 + mod;
    }
  }

  public calcX(currentWidget, isLeft) {
    const width = window.innerWidth;
    const col = width / 28;
    if (isLeft) {
      return (currentWidget.x * col) - 320;
    } else {
      return (currentWidget.x * col) + (currentWidget.cols * col) + 20;
    }
  }

  public calcY(currentWidget, height) {
    const row = (height / 18);
    return (currentWidget.rows * row) + (currentWidget.y * row) - 250;
  }

}

export * from './customise-widget/bottom-variable/bottom-variable.component';
export * from './customise-widget/center-top-left-icon/center-top-left-icon.component';
export * from './customise-widget/center-variable/center-variable.component';
export * from './customise-widget/customise-widget.component';
export * from './customise-widget/select-color/select-color.component';
export * from './customise-widget/select-icon/select-icon.component';
export * from './customise-widget/widget-gauge/widget-gauge.component';
export * from './customise-widget/widget-graph/widget-graph.component';
export * from './customise-widget/widget-map/widget-map.component';

export * from './customise-text/customise-text.component';
export * from './customise-textbox/customise-textbox.component';
export * from './customise-button/customise-button.component';
export * from './customise-rectangle/customise-rectangle.component';
