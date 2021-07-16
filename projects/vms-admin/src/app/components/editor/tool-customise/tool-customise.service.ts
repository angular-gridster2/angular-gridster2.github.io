import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolCustomiseService {

  public eventColor: BehaviorSubject<any> = new BehaviorSubject(null);
  public eventIcon: BehaviorSubject<any> = new BehaviorSubject(null);
  public eventColorChangerfor: BehaviorSubject<any> = new BehaviorSubject(null);
  public eventShow: BehaviorSubject<any> = new BehaviorSubject(null);
  public eventClose: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public selectIcon(e = null) {
    this.eventIcon.next(e);
  }

  public selectColor(e = null) {
    this.eventColor.next(e);
  }

  public colorChangerfor(e = null) {
    this.eventColorChangerfor.next(e);
  }

  public showBox(key = null, e = null, item = null) {
    this.eventShow.next([key, e, item]);
  }

  public closeBox(e = null) {
    if (typeof e === 'string') {
      this.eventClose.next(e);
    }
    if (typeof e === 'object') {
      if (e && e.length > 0) {
        e.forEach(f => {
          this.eventClose.next(f);
        });
      }
    }
  }
}
