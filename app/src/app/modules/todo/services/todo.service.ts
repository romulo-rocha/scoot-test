import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoPriority } from '../../../core/interceptors/enums/todo-priority.enum';

interface ITodoListQuery {
  description: string;
  priority: TodoPriority;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  getList(
    page?: number,
    limit?: number,
    query?: ITodoListQuery
  ): Observable<any> {
    let params = `?page=${page ? page + 1 : 1}&limit=${limit}`;
    const { description, priority } = query || {};

    if (description) params += `&description=${description}`;
    if (priority) params += `&priority=${priority}`;

    return this._http.get('/todo' + params);
  }
}
