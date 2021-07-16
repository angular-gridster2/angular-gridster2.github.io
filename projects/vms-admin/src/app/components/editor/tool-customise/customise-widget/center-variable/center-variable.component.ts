import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

@Component({
  selector: 'app-center-variable',
  templateUrl: './center-variable.component.html',
  styleUrls: ['./center-variable.component.scss']
})
export class CenterVariableComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('centerVariable');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }
}
