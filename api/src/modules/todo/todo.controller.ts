import { Controller, Get } from '@nestjs/common';
import { Todo } from '../../core/entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  list(): Promise<Todo[]> {
    return this.todoService.list();
  }
}
