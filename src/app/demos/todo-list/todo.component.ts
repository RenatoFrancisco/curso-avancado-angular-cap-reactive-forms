import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Task } from './task';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {

  taskForm: FormGroup;
  task: Task;

  constructor(private fb: FormBuilder,
            private tasksService: TasksService) {}

  addTask() {
    if (this.taskForm.dirty && this.taskForm.valid) {
      this.task = Object.assign({}, this.task, this.taskForm.value);

      console.log(this.task.nome);

      this.tasksService.add(this.task);
      this.taskForm.reset();
    }
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      nome: ['']
    });
  } 

}
