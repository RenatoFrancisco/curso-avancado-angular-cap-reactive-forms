import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';

import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit, OnDestroy {

  todoList$: Observable<any[]>;
  subscription: Subscription;

  @ViewChild('taskNameInput', { static: false }) taskNameInput: ElementRef;

  constructor(private taskService: TasksService, 
              private store: Store) { }

  ngOnInit() {
    this.todoList$ = this.store.getTodoList()
      .pipe(
        map(todoList => todoList.filter(task => !task.iniciado && !task.finalizado)));

      this.subscription = this.taskService.getTodoList$.subscribe();
  }

  adicionar(taskName: string) {

    const tasks = this.store.value.todoList;
    const lastTask = tasks[tasks.length -1];

    this.taskService.adicionar({
      id: ++lastTask.id,
      nome: taskName,
      iniciado: false,
      finalizado: false
    });

    this.taskNameInput.nativeElement.value = '';
  }

  onToggle(event) {
    this.taskService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
