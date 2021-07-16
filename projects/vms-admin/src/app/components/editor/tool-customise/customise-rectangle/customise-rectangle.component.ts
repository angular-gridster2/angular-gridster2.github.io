import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../editor.service';
import { ToolCustomiseService } from '../tool-customise.service';

@Component({
  selector: 'app-customise-rectangle',
  templateUrl: './customise-rectangle.component.html',
  styleUrls: ['./customise-rectangle.component.scss']
})
export class CustomiseRectangleComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('customiseRectangle');
    this.editorService.focusWidgetId(null); // Close focus
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onOpacity(e): void {
    
  }

}
