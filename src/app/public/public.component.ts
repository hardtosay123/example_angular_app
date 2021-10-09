import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiUpdateTaskService } from '../services/ui/ui-update-task.service';
import { TasksAPIService } from '../services/api/tasks/tasks-api.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  tasks:any;
  updateTask:boolean = false;
  TasksSubscription:Subscription;
  UiSubscription:Subscription;
  tasksloading:boolean = false;
  constructor(private api: ApiService, private router: Router, private TasksAPIService:TasksAPIService, private uiUpdateTaskService:UiUpdateTaskService) {
    this.TasksSubscription = this.TasksAPIService.sendTask()
                                                  .subscribe(
                                                    tasks => {
                                                      this.tasks = tasks;
                                                    }
                                                  );
    this.UiSubscription = this.uiUpdateTaskService.ObserveUpdateTaskValue()
                                                  .subscribe(
                                                    value => {
                                                      this.updateTask = value;
                                                    }
                                                  );
    if (this.router.url !== '/') {
      this.uiUpdateTaskService.OpenUpdateTask();
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  updateHideData() {
    this.uiUpdateTaskService.OpenUpdateTask();
  }

  getData() {
    this.tasksloading = false;
    this.TasksAPIService.getTasks();
    this.tasksloading = true;
  }

  delete(task:any) {
    this.TasksAPIService.deleteTask(task.id);
  }

}
