import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../editor.service';
import { ToolCustomiseService } from '../tool-customise.service';

@Component({
  selector: 'app-customise-textbox',
  templateUrl: './customise-textbox.component.html',
  styleUrls: ['./customise-textbox.component.scss']
})
export class CustomiseTextboxComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  public placeholder: string = 'TEXT BOX';
  public inputStyles: any = {
    roundCorner: 'round_corner',
    underline: 'underline',
    capsule: 'capsule',
    rectangle: 'rectangle'
  };

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('customiseTextbox');
    this.editorService.focusWidgetId(null); // Close focus
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onChange(value): void {
    this.currentWidget.widget.config.placeholder = value;
    this.onChangeWidget(this.currentWidget);
  }

  public onClickStyle(type): void {
    this.currentWidget.widget.config.inputStyle = this.inputStyles[type];
    this.onChangeWidget(this.currentWidget);
  }

}
