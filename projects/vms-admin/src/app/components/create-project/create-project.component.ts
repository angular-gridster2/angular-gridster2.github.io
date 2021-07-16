import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0); // Init scroll to top
  }

  public onNext() {
    this.router.navigateByUrl('/editor?page=login');
  }

}
