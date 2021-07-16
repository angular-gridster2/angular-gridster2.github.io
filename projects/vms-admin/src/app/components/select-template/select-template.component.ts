import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent implements OnInit {
  public selectTemplate = 'all-template';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['page']) {
        this.selectTemplate = params['page'];
      }
    });
  }

  ngOnInit(): void {
  }

  public onSelectTemplate(e): void {
    this.selectTemplate = e;
  }

  public onUseThisTemplate(): void {
    this.router.navigateByUrl('create-project');
  }

  public addToMyTemplate(): void {
    this.selectTemplate = 'my-template';
  }

  setTheme(key){
    localStorage.setItem('theme',JSON.stringify(key))
  }
}
