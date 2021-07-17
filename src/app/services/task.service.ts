import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers : new HttpHeaders({
    'ContentType' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTasks(task : Task): Observable<Task>{
    return this.http.delete<Task>(this.apiURL+"/"+task.id);
  }

  updateTaskReminder(task : Task) : Observable<Task>{
    return this.http.put<Task>(this.apiURL + '/' + task.id, task, httpOptions);
  }

  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
