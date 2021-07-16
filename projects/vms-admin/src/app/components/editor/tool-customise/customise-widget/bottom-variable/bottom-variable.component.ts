import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

@Component({
  selector: 'app-bottom-variable',
  templateUrl: './bottom-variable.component.html',
  styleUrls: ['./bottom-variable.component.scss']
})
export class BottomVariableComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('bottomVariable');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }
}
