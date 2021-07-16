import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term-component.component.html',
  styleUrls: ['./term-component.component.scss'],
})
export class TermComponentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  back(){
    var params = this.route.snapshot.queryParamMap.get('source');
    this.router.navigate([`/${params}`]);
  }
  ngOnInit(): void {}
}
