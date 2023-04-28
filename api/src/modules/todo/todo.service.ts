import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../core/entities/todo.entity';
import { TodoRepository } from '../../core/repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly todoRepository: TodoRepository,
  ) {}

  list(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
}
