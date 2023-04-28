import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TodoRoutingModule } from './todo-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
