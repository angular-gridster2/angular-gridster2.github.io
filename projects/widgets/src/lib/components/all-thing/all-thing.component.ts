import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-all-thing',
  templateUrl: './all-thing.component.html',
  styleUrls: ['./all-thing.component.scss'],
})
export class AllThingComponent implements OnInit {
  @Input() globalConfig: any;
  constructor(private router: Router) { }

  ngOnInit(): void { 
  //   this.editorService.viewOnly.subscribe((viewOnly)=>{
  //     this.viewOnly = viewOnly
  // })
  }
  arrData: any = [
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
      title: 'Thing Name',
      sensor: 9,
    },
  ];
  gotoDetail() {
    this.router.navigate(['/thing-detail'])
  }
}
export const AllThingWidget = {
  type:'page',
  component:AllThingComponent,
  defaultconfig:[]
}