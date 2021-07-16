// Angular
import { Component, OnInit, Input } from '@angular/core';
// App
import { EditorService } from '../../editor.service';
import { ToolCustomiseService } from '../tool-customise.service';

@Component({
  selector: 'app-customise-widget',
  templateUrl: './customise-widget.component.html',
  styleUrls: ['./customise-widget.component.scss']
})
export class CustomiseWidgetComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;
  public isGaugeBox = false;
  public isMapBox = false;
  public isGraphBox = false;
  public isCenterVariable = false;
  public isBottomVariable = false;
  public isShowCenterIcon = false;
  public isShowTopLeftIcon = false;
  public isShowSelectIcon = false;
  public isShowSelectColor = false;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) {
    // Close box
    this.toolCustomiseService.eventClose.subscribe((key) => {
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
          break;
      }
    });
  }

  ngOnInit(): void {
  }

  public onGaugeBox(e): void {
    this.isGaugeBox = true;
    this.toolCustomiseService.showBox('gaugeBox');
  }

  public onMapBox(e): void {
    this.isMapBox = true;
    this.toolCustomiseService.showBox('mapBox');
  }

  public onGraphBox(e): void {
    this.isGraphBox = true;
    this.toolCustomiseService.showBox('graphBox');
  }

  public onShowTopLeftBox(e): void {
    this.isShowTopLeftIcon = true;
    this.toolCustomiseService.showBox('topLeftIcon');
  }

  public onShowCenterBox(e): void {
    this.isShowCenterIcon = true;
    this.toolCustomiseService.showBox('centerIcon');
  }

  public onShowCenterVariableBox(e): void {
    this.isCenterVariable = true;
    this.toolCustomiseService.showBox('centerVariable');
  }

  public onShowBottomVariableBox(e): void {
    this.isBottomVariable = true;
    this.toolCustomiseService.showBox('bottomVariable');
  }

  public onClose(): void {
    this.editorService.focusWidgetId(null); // Close focus
    this.toolCustomiseService.closeBox('widget');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onSquare(): void {
    this.currentWidget.cols = 1;
    this.currentWidget.rows = 1;
    this.onChangeWidget(this.currentWidget);
  }

  public onLandscape(): void {
    this.currentWidget.cols = 2;
    this.currentWidget.rows = 1;
    this.onChangeWidget(this.currentWidget);
  }

  public onVertical(): void {
    this.currentWidget.cols = 1;
    this.currentWidget.rows = 2;
    this.onChangeWidget(this.currentWidget);
  }

  // Check show button
  public canActivate(field): boolean {
    return this.currentWidget && this.currentWidget.widget.config.hasOwnProperty(field);
  }

}
