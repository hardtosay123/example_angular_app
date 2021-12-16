import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({
    'Accept' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL:string = 'http://127.0.0.1:8000';
  
  constructor(private http: HttpClient) { }

  getTasks() {
    const url:string = this.apiURL + '/api/tasks';
    return this.http.get(url, httpOptions);
  }
  getTaskId(id:any) {
    const url:string = this.apiURL + '/api/tasks/' + id;
    return this.http.get(url, httpOptions);
  }
  addTask(task:any) {
    const url:string = this.apiURL + '/api/tasks';
    return this.http.post(url, task, httpOptions);
  }
  updateTask(task:any, id:any) {
    const url:string = this.apiURL + '/api/tasks/' + id;
    var formData:any = task;
    /*
    Form Data have to set again and add the "_method" for endpoint "PUT or DELETE"
    */
    return this.http.put(url, formData, httpOptions);
  }
  deleteTask(id:number) {
    const url:string = this.apiURL + '/api/tasks/' + id;
    return this.http.delete(url, httpOptions);
  }
}
