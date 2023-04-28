import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../core/entities/todo.entity';
import { TodoRepository } from '../../core/repositories/todo.repository';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
