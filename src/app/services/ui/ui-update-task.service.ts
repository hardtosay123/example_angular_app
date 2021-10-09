import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiUpdateTaskService {

  private updateTask:boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  OpenUpdateTask():void {
    this.updateTask = true;
    this.subject.next(this.updateTask);
  }

  CloseUpdateTask():void {
    this.updateTask = false;
    this.subject.next(this.updateTask);
  }

  ObserveUpdateTaskValue():Observable<any> {
    return this.subject.asObservable();
  }
}
