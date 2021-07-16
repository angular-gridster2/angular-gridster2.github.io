import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../editor.service';
import { ToolCustomiseService } from '../tool-customise.service';

@Component({
  selector: 'app-customise-button',
  templateUrl: './customise-button.component.html',
  styleUrls: ['./customise-button.component.scss']
})
export class CustomiseButtonComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  public placeholder: string = 'TEXT';
  public buttonStyles: any = {
    roundCorner: 'round_corner',
    capsule: 'capsule',
    rectangle: 'rectangle'
  };
  public bgStyles: any = {
    solid: 'solid',
    gradient1: 'gradient1',
    gradient2: 'gradient2'
  };

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('customiseButton');
    this.editorService.focusWidgetId(null); // Close focus
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onChange(value): void {
    this.currentWidget.widget.config.value = value;
    this.onChangeWidget(this.currentWidget);
  }

  public onClickStyle(type): void {
    this.currentWidget.widget.config.buttonStyle = this.buttonStyles[type];
    this.onChangeWidget(this.currentWidget);
  }

  public onClickBgStyle(type): void {
    this.currentWidget.widget.config.bgStyle = this.bgStyles[type];
    this.onChangeWidget(this.currentWidget);
  }
}
