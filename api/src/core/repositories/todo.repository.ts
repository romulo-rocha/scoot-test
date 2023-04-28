import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base-repository';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoRepository extends BaseRepository<Todo> {
  constructor(readonly dataSource: DataSource) {
    super(Todo, dataSource);
  }
}
