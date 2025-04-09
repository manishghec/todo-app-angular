import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/todos';

  getTodosFromApi(){
    return this.http.get<Array<Todo>>(this.url);
  }

  constructor() { }
}
