// Angular
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
// Lib
import { ColorPickerControl, Color } from '@iplab/ngx-color-picker';
import { widgetMap } from '../../../../../../widgets/src/public-api';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorUtil } from '../../../shared/utils/color.util';
import themes from '../themes.js';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.scss'],
})
export class EditToolComponent implements OnInit {
  @Output()
  public colorChange: EventEmitter<string> = new EventEmitter();
  // ...
  public editBtnActive = 0;
  public widgetSettingActive = 8;
  public widgetSettingActiveName: string;
  public dashboardItems = [];
  public currentItem: any = {};
  public globalConfig = {};
  public displayDensity = 'default';
  public sketchControl = new ColorPickerControl();
  public isDrag = false;
  public screenType: string;
  // Theme
  public showColorPickerTheme = false;
  // Widget
  public showColorPickerWidget = false;
  public togleWidgetEnable: boolean;

  newDashboardName = ''
  mainThemeKey = 'dark'
  secondaryThemeKey = 'default'
  rename = false
  constructor(
    private route: ActivatedRoute,
    private editorService: EditorService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Dashboard list
    const items: any[] = [];
    Object.keys(this.editorService.data).map((key) => {
      if (this.editorService.data[key].type == 'dashboard') {
        items.push({ id: key, name: this.editorService.data[key].name });
      }
      this.dashboardItems = items;
    });
    // Widget config
    this.editorService.pageConfig.subscribe((value) => {
      this.globalConfig = value;
    });
    // Screen type
    this.editorService.pageType.subscribe((type) => {
      this.screenType = type;
      if (type === 'dashboard') {
        this.togleWidgetEnable = true; // Dissable btn widget
      }
    });
  }

  ngOnInit(): void {
    // Base color
    this.sketchControl.setColorPresets([
      '#959393',
      '#000000',
      '#9FFFB1',
      '#97C9DE',
      '#919DEB',
      '#C58ECC',
      '#E8829A',
      '#EA857A',
      '#9DCB7A',
      '#73B18D',
      '#70AFAA',
    ]);
    // Event color
    this.sketchControl.valueChanges.subscribe((value: Color) =>
      this.colorChange.emit(value.toHexString())
    );
    // Show submenu
    const pageParams = this.route.snapshot.queryParamMap.get('page');
    if (this.screenType === 'dashboard') {
      this.currentItem = this.dashboardItems.find((f) => pageParams == f.id);
    }
    let theme = JSON.parse(localStorage.getItem('theme'))
    if(theme){
      this.mainThemeKey = theme.split('.')[0]
      this.secondaryThemeKey = theme.split('.')[1]
    }
  }

  onShowColorPickerTheme(hex = '#FFFFFF') {
    this.sketchControl.setValueFrom(hex);
    this.showColorPickerTheme = true;
  }

  onShowColorPickerWidget(hex = '#FFFFFF') {
    this.sketchControl.setValueFrom(hex);
    this.showColorPickerWidget = true;
  }

  onDragStart(e, name, config = {}) {
    e.dataTransfer.setData(
      'component',
      JSON.stringify({
        name: name,
        config: config,
      })
    );
    this.isDrag = true;
  }

  onDragEnd() {
    this.isDrag = !this.isDrag;
  }

  keys() {
    return Object.keys(widgetMap);
  }

  widgetName(key) {
    return widgetMap[key] && widgetMap[key].name;
  }

  widgetType(key) {
    return widgetMap[key].type;
  }

  widgetDefault(key) {
    return widgetMap[key].defaultConfig;
  }

  onToggleButton(i) {
    this.editBtnActive = this.editBtnActive === i ? 0 : i;
  }

  isLinkActive(page): boolean {
    return this.route.snapshot.queryParamMap.get('page') === page;
  }

  changeFontColor(e) {
    console.log(e);
  }

  // DEMO Dashboard
  onChangeDashboardBg(e) {
    //this.updateBackground(e);
  }

  // DEMO Static
  changeThemeColor(key) {
    this.secondaryThemeKey = key
    this.editorService.changePageConfig(this.mainThemeKey+'.'+this.secondaryThemeKey,themes[this.mainThemeKey+'.'+this.secondaryThemeKey])
  }

  public onDuplicate(id) {
    this.editorService.duplicateDashboard(id)
  }

  onDeleteDashboard(id){
    this.editorService.deleteDashboard(id)
  }
  
  createDashboard(){
    this.editorService.createDashBoard()
  }

  changeDashboardName(){
    this.editorService.changeDashboardName(this.rename,this.newDashboardName)
  }

  @HostListener('window:click', ['$event.target'])
  outsiteClick(e) {
    // Close sidebar - edit tool
    if (
      Number(this.editBtnActive) > 0 &&
      e.className.includes('backdrop-edit-tool-sidebar')
    ) {
      this.onToggleButton(0);
      this.changeDetectorRef.detectChanges();
    }
  }

  changeColor(e){
    console.log(e)
  }
}
