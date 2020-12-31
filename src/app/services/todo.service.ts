import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'http://localhost:4201';
  
  constructor(private http: HttpClient) {}

  // get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  // create new todo

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.todosUrl}/add`, todo, httpOptions);
  }
  // mark as completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/completed/${todo._id}`;
    return this.http.put(url, todo, httpOptions);
  }
  //delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/remove/${todo._id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
