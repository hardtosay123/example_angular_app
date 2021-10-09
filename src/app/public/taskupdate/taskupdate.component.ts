import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { UiUpdateTaskService } from '../../services/ui/ui-update-task.service';
import { TasksAPIService } from 'src/app/services/api/tasks/tasks-api.service';

@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.css']
})
export class TaskupdateComponent implements OnInit {

  id:any=0;
  task:any = [];
  title:any;
  description:any;
  constructor(private router:Router, private route:ActivatedRoute, private apiUrl:ApiService, private TasksAPIService:TasksAPIService, private uiUpdateTaskService:UiUpdateTaskService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiUrl.getTaskId(this.id).subscribe(
      data => {
        this.task = data;
        this.title = this.task.title;
        this.description = this.task.description;
      },
      error => {
        this.task = false;
      }
    );
  }

  CloseUpdateTask() {
    this.uiUpdateTaskService.CloseUpdateTask();
  }

  submit(task:NgForm) {
    this.TasksAPIService.updateTask(task, this.id);
    this.CloseUpdateTask();
    this.router.navigate(['/']);
  }
}
