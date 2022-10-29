import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from './task';
import { Store } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, 
              private store: Store) { }

  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todoList')
    .pipe(
      tap(next => this.store.set('todoList', next)));

  // getTodoList(): Observable<Task[]>  {
  //     return this.http.get<Task[]>('http://localhost:3000/todoList');
  // }

  toggle(event: any) {
    this.http
      .put(`http://localhost:3000/todoList/${event.task.id}`, event.task)
      .subscribe(() => {

        const value = this.store.value.todoList;

        const todoList = value.map((task: Task) => {
          if (event.task.id == task.id) {
            return { ...task, ...event.task };
          } else {
            return task;
          }
        });

        this.store.set('todoList', todoList);

      });
  }
}
