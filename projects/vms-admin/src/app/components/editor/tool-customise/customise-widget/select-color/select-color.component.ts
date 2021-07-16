import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../../editor.service';
import { ToolCustomiseService } from '../../tool-customise.service';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  @Input() title: string;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) {
  }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('selectColor');
  }

  public onChange(color): void {
    this.toolCustomiseService.selectColor(color);
  }
}
