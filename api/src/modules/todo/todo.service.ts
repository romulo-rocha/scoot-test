import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Todo } from '../../core/entities/todo.entity';
import { TodoRepository } from '../../core/repositories/todo.repository';
import { TPaginateTodoOptions } from '../../core/repositories/dto/PaginateTodoOptions.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly todoRepository: TodoRepository,
  ) {}

  paginate(options: TPaginateTodoOptions): Promise<Pagination<Todo>> {
    return this.todoRepository.paginate(options);
  }
}
