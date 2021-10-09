import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksAPIService } from 'src/app/services/api/tasks/tasks-api.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  
  title:any;
  description:any;
  formdata:any;
  constructor(private apiUrl: ApiService, private TasksAPIService:TasksAPIService) { }

  ngOnInit(): void {

  }

  submit(newtask:NgForm) {
    this.formdata = newtask;
    this.TasksAPIService.addTask(newtask);
    this.title = '';
    this.description = '';
  }
}
