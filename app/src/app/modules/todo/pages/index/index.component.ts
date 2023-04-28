import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filterForm = new FormGroup({
    description: new FormControl(''),
    priority: new FormControl(''),
  });

  displayedColumns: string[] = ['description', 'priority', 'dueAt'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private todoService: TodoService) {}

  ngAfterViewInit(): void {
    this.filterForm.valueChanges.subscribe(() => this.paginator.firstPage());
    merge(this.filterForm.valueChanges, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.todoService
            .getList(
              this.paginator.pageIndex,
              this.paginator.pageSize,
              this.filterForm.getRawValue() as any
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.meta?.totalItems || 0;
          return data.items;
        })
      )
      .subscribe((data) => (this.data = data));
  }
}
