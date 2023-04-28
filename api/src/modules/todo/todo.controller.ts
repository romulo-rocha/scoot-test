import { Controller, Get, Query } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Todo } from '../../core/entities/todo.entity';
import { TodoService } from './todo.service';
import { TPaginateTodoOptions } from '../../core/repositories/dto/PaginateTodoOptions.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  list(@Query() query: TPaginateTodoOptions): Promise<Pagination<Todo>> {
    const { limit, page, route, description, priority } = query;

    return this.todoService.paginate({
      limit,
      page,
      route,
      description,
      priority,
    });
  }
}
