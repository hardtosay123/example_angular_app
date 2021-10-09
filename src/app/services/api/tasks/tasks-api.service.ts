import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/public/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksAPIService {

  private tasks:any;
  private subject = new Subject<any>();

  constructor(private apiService:ApiService) { }

  sendTask():Observable<any> {
    return this.subject.asObservable();
  }

  getTasks() {
    this.apiService.getTasks().subscribe(
      data => {
        this.tasks = data;
        this.subject.next(this.tasks);
      },
      error => {
        console.log(error);
      }
    );
  }

  addTask(task:any) {
    this.apiService.addTask(task).subscribe(
      data => {
        this.tasks.push(data);
        this.subject.next(this.tasks);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateTask(task:any, id:any) {
    this.apiService.updateTask(task,id).subscribe(
      data => {
        var i = "";
        for (var index in this.tasks) {
          if (this.tasks[index].id == id) {
            i = index;
          }
        }
        if (i != "") {
          this.tasks[i] = data;
        }
        this.subject.next(this.tasks);
      },
      error => {

      }
    );
  }

  deleteTask(id:number) {
    this.apiService.deleteTask(id).subscribe(
      data => {
        this.tasks = this.tasks.filter(
          function removedSpecificTask(e:any, i:any, arr:any) {
            return e.id !== id
          }
        );
        this.subject.next(this.tasks);
      }
    );
  }
}
