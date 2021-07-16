import { Component, OnInit, Input } from '@angular/core';
import { EditorService } from '../../editor.service';
import { ToolCustomiseService } from '../tool-customise.service';
import { Util } from 'projects/widgets/src/lib/common/util';

@Component({
  selector: 'app-customise-text',
  templateUrl: './customise-text.component.html',
  styleUrls: ['./customise-text.component.scss']
})
export class CustomiseTextComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  public fontFamilyItems: any[] = [
    { label: 'SF Pro Text', value: 'SF Pro Text' },
    { label: 'SF Pro Rounded', value: 'SF Pro Rounded' },
    { label: 'SF Pro Display', value: 'SF Pro Display' },
    { label: 'Helvetica Neue', value: 'Helvetica Neue' },
  ];
  public fontTypeItems: any[] = [
    { family: 'SF Pro Text', label: 'Heavy', value: 'Heavy' },
    { family: 'SF Pro Text', label: 'Bold', value: 'Bold' },
    { family: 'SF Pro Text', label: 'Semibold', value: 'Semibold' },
    { family: 'SF Pro Text', label: 'Medium', value: 'Medium' },
    { family: 'SF Pro Text', label: 'Regular', value: 'Regular' },
    { family: 'SF Pro Text', label: 'Thin', value: 'Thin' },
    { family: 'SF Pro Rounded', label: 'Bold', value: 'Bold' },
    { family: 'SF Pro Display', label: 'Medium', value: 'Medium' },
    { family: 'SF Pro Display', label: 'Regular', value: 'Regular' },
    { family: 'SF Pro Display', label: 'Thin', value: 'Thin' },
    { family: 'Helvetica Neue', label: 'Regular', value: 'Regular' }
  ];
  public fontFamily: string;
  public fontType: string;
  public fontSize: string;

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
    this.fontFamily = this.currentWidget.widget.config.styles['font-family'].split('-')[0];
    this.fontType = this.currentWidget.widget.config.styles['font-family'].split('-')[1];
    this.fontSize = this.currentWidget.widget.config.styles['font-size'];
    if (this.fontSize) {
      this.fontSize = this.fontSize.substr(0, this.fontSize.length - 2);
    }
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('customiseText');
    this.editorService.focusWidgetId(null); // Close focus
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onOpacity(value = 100): void {
    this.currentWidget.widget.config.styles.opacity = value;
    // tslint:disable-next-line: max-line-length
    this.currentWidget.widget.config.styles.color = Util.convertHexOpacity(this.currentWidget.widget.config.styles.color, this.currentWidget.widget.config.styles.opacity);
  }

  public onChangeFontFamily(value): void {
    this.fontFamily = value;
    this.fontType = this.fontTypeItems.filter(f => f.family === value)[0].value;
    if (this.fontFamily && this.fontType) {
      this.currentWidget.widget.config.styles['font-family'] = `${this.fontFamily}-${this.fontType}`;
      this.onChangeWidget(this.currentWidget);
    }
  }

  public onChangeFontType(value): void {
    this.fontType = value;
    if (this.fontFamily && this.fontType) {
      this.currentWidget.widget.config.styles['font-family'] = `${this.fontFamily}-${this.fontType}`;
      this.onChangeWidget(this.currentWidget);
    }
  }

  // Check field
  public canActivate(field): boolean {
    return this.currentWidget && this.currentWidget.widget.config.hasOwnProperty(field);
  }
}
