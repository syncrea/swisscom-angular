import {Inject, Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {
  loadTodos(): Observable<TodoItem[]> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET /api/todos
    return of([]);
  }

  loadTodo(id: number): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET /api/todos/:id
    return of({} as TodoItem);
  }

  createTodo(title: string, description: string): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST /api/todos
    // Data: {title: string; description: string; done: boolean}
    return of({} as TodoItem);
  }

  updateTodo(id: number, data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST /api/todos/:id
    // Data: {title: string; description: string; done: boolean}
    return of({} as TodoItem);
  }

  constructor(@Inject(HttpClient) private http: HttpClient) {}
}
