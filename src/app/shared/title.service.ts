import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TitleService {
 
  private titleSource = new BehaviorSubject('default');
  currentTitle = this.titleSource.asObservable();
 
  constructor() { }
 
  changeTitle(message: string) {
    console.log("Title service: ", this.titleSource.next(message));
    this.titleSource.next(message);
  }
}