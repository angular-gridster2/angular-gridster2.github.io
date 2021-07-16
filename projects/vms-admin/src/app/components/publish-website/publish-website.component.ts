import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {NgModule} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
@Component({
  selector: 'app-publish-website',
  templateUrl: './publish-website.component.html',
  styleUrls: ['./publish-website.component.scss'],
})
export class PublishWebsiteComponent implements OnInit {
  public selectForm = 1;
  public showEyePassword = false;
  public showEyeConfimPassword = false;
  public  date = new FormControl();
  public isList = true;
  public publishDate: Date;
  public publishTime: Date;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onContinue(): void {
    this.selectForm = 2;
  }
  public onLeterFirt(): void{
    this.selectForm = 1;
  }

  public onLeter(): void{
    this.selectForm = 2;
  }


  public onPublish(): void {
    this.selectForm = 3;
  }

  public onCreate(): void {
    this.selectForm = 4;
  }

  public onViewSite(): void {
    this.router.navigateByUrl('/mysite');
  }
  goToMySite() {
    this.router.navigate(['mysite']);
  }
}
