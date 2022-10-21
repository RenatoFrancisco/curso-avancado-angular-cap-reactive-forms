import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  list: Task[];
}
