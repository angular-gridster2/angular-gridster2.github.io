import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bg-form',
  templateUrl: './bg-form.component.html',
  styleUrls: ['./bg-form.component.scss'],
})
export class BackgroundFormComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {}
}
