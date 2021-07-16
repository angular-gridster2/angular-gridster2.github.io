import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  showTemplatePreview(key) {
    localStorage.setItem('theme',JSON.stringify(key))
    this.router.navigateByUrl('/template-preview');
  }

}
