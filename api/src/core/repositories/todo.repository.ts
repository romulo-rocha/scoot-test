import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { BaseRepository } from './base-repository';
import { Todo } from '../entities/todo.entity';
import { TPaginateTodoOptions } from './dto/PaginateTodoOptions.dto';

@Injectable()
export class TodoRepository extends BaseRepository<Todo> {
  constructor(readonly dataSource: DataSource) {
    super(Todo, dataSource);
  }

  paginate(options: TPaginateTodoOptions): Promise<Pagination<Todo>> {
    const queryBuilder = this.createQueryBuilder('t');
    const { description, priority } = options;

    if (description) {
      queryBuilder.andWhere(`t.description LIKE '%${description}%'`);
    }

    if (priority) {
      queryBuilder.andWhere(`t.priority = ${priority}`);
    }

    return paginate(queryBuilder, options);
  }
}
