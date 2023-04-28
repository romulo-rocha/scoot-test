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
    const params = new HttpParams();
    const { description, priority } = query || {};

    params.set('page', page ? page + 1 : 1);
    params.set('limit', limit || 10);

    if (description) params.set('description', encodeURI(description));
    if (priority) params.set('priority', priority);

    return this._http.get('/todo', { params });
  }
}
