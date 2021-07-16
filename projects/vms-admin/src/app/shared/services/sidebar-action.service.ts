import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarActionService {
  private message = new BehaviorSubject<string>('');
  sharedMessage = this.message.asObservable();

  constructor() {}

  nextMessage(message: string) {
    this.message.next(message);
  }

}
