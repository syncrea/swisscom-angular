import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoItems: TodoItem[];
  @Output() outToggleDone = new EventEmitter<TodoItem>();
  @Output() outShowDetails = new EventEmitter<TodoItem>();

  toggleDone(todoItem: TodoItem) {
    this.outToggleDone.emit(todoItem);
  }

  showDetails(todoItem: TodoItem) {
    this.outShowDetails.emit(todoItem);
  }

  trackByNo(index: number, todoItem: TodoItem) {
    return todoItem.no;
  }
}
