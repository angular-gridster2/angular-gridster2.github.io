import { Component, OnInit, ElementRef, Input, ViewChild, OnDestroy } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../../../components/editor/editor.service';
import { SaveModalComponent } from '../save-modal/save-modal.component';
import example from '../../../components/editor/example'; 

@Component({
  selector: 'app-editor-navbar',
  templateUrl: './editor-navbar.component.html',
  styleUrls: ['./editor-navbar.component.scss']
})
export class EditorNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('saveModal', { static: false }) saveModal: SaveModalComponent;
  @Input() public currentId: number;
  public items: any[] = [];
  public preview = true;
  public page = '';
  rename = null;
  newDashboardName = '';
  currentWidgetId = null
  pages = Object.keys(example).map((key)=>{
    return {
        link:key,
        name:example[key].name
    }
  })

  constructor(
    private router: Router,
    public elementRef: ElementRef,
    public editorService: EditorService,
    private aRoute: ActivatedRoute) {
    this.aRoute.queryParams.subscribe((params) => {
      if (params.page)
        this.page = params.page
      else
        this.aRoute.url.subscribe((url) => {
          this.page = url[0].path
        })
    })
  }

  showMenu: any = null;

  showDropdown(e, name) {
    e.target.className += ' show';
    this.showMenu = name;
  }

  hideDropdown(e) {
    e.target.className = e.target.className.replace(' show', '');
    this.showMenu = null;
  }

  ngOnInit(): void {

    this.editorService.viewOnly.subscribe((value) => {
      this.preview = value
    });

    this.editorService.currentWidgetId.subscribe((value)=>{
      this.currentWidgetId = value
    })

    var editMode = localStorage.getItem('editMode');
    if (editMode == "true") {
      this.editorService.toogleMode();
      localStorage.removeItem('editMode');
    }

    var viewMode = localStorage.getItem('viewMode');
    if (viewMode == "preview") {
      this.editorService.toogleMode();
      localStorage.removeItem('viewMode');
    }

    localStorage.setItem('switchMode', 'edit'); // fix bug hiden edit widget img login

    this.loadList();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('switchMode');
  }

  loadList() {
    let items = [];
    Object.keys(this.editorService.data).map((key) => {
      if (this.editorService.data[key].type == 'dashboard') {
        items.push({ id: key, name: this.editorService.data[key].name });
      }
    });
    this.items = items;
  }

  toggleMode() {
    this.editorService.toogleMode();
    localStorage.setItem('switchMode', this.preview ? 'preview' : 'edit'); // fix bug hiden edit widget img login
    this.editorService.resizeWidgets(this.preview ? false : true); // resizeEnabled: true | false
  }

  publish() {
    this.router.navigate(['publish-website']);
  }

  currentPageName() {
    let item = this.items.find((el)=>el.id==this.page)
    if(item)
      return item.name
    return this.page.replace('-', ' ')
  }

  isLinkActive(page): boolean {
    return this.aRoute.snapshot.queryParamMap.get('page') === page;
  }

  // Close the widget you are editing
  closeWidget() {
    if (this.currentId) {
      this.editorService.focusWidgetId(null); // Close widget
    }
  }

  // Duplicate page
  public onDuplicate(id) {
    this.editorService.duplicateDashboard(id)
  }

  onDeleteDashboard(id){
    this.editorService.deleteDashboard(id)
  }

  createDashboard(){
    this.editorService.createDashBoard()
  }
  
  renameDashBoard(){
    this.editorService.changeDashboardName(this.rename,this.newDashboardName)
  }

  nextPage(){
    let i = this.pages.findIndex((el)=> el.link== this.page)
      if(this.pages[i+1])
          this.router.navigateByUrl('/editor?page='+this.pages[i+1].link)
      else
      this.router.navigateByUrl('/editor?page='+this.pages[0].link)
  }

  prevPage(){
      let i = this.pages.findIndex((el)=> el.link== this.page)
      if(this.pages[i-1])
          this.router.navigateByUrl('/editor?page='+this.pages[i-1].link)
      else
          this.router.navigateByUrl('/editor?page='+this.pages[this.pages.length-1].link)
  }
}
