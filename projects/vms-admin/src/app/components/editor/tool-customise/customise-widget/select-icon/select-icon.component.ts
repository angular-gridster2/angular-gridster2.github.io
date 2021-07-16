import { Component, OnInit, Input } from '@angular/core';
import { ToolCustomiseService } from '../../tool-customise.service';
import { EditorService } from '../../../editor.service';

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss']
})
export class SelectIconComponent implements OnInit {
  @Input() currentWidget: any;
  @Input() myBounds: any;

  public baseIcons: any[] = [];

  constructor(
    private editorService: EditorService,
    private toolCustomiseService: ToolCustomiseService
  ) { }

  ngOnInit(): void {
    // https://fontawesome.com
    // https://dropways.github.io/feathericons
    this.baseIcons = [
      { fa: 'fas fa-battery-empty' },
      { fa: 'fas fa-battery-quarter' },
      { fa: 'fas fa-battery-half' },
      { fa: 'fas fa-battery-three-quarters' },
      { fa: 'fas fa-battery-full' },
      { fa: 'fas fa-thermometer-empty' },
      { fa: 'fas fa-thermometer-quarter' },
      { fa: 'fas fa-thermometer-half' },
      { fa: 'fas fa-thermometer-three-quarters' },
      { fa: 'fas fa-thermometer-full' },
      { fa: 'fas fa-layer-group' },
      { fa: 'feather-layers' },
      { fa: 'fas fa-wifi' },
      { fa: 'fas fa-cloud-showers-heavy' },
      { fa: 'fas fa-cloud-rain' },
      { fa: 'fas fa-cloud-sun-rain' },
      { fa: 'fas fa-cloud-moon-rain' },
      { fa: 'fas fa-cloud' },
      { fa: 'fas fa-cloud-sun' },
      { fa: 'fas fa-cloud-moon' },
      { fa: 'fas fa-tint' },
      { fa: 'fas fa-tint-slash' },
      { fa: 'fas fa-burn' },
      { fa: 'feather-sun' },
      { fa: 'feather-wifi-off' },
      { fa: 'feather-wifi' },
      { fa: 'fas fas fa-map-marker-alt' },
    ];
  }

  public onClose(): void {
    this.toolCustomiseService.closeBox('selectIcon');
  }

  public onChangeWidget(item): void {
    this.editorService.changeWidget(item);
  }

  public onSelect(row): void {
    this.toolCustomiseService.selectIcon(row);
  }
}
