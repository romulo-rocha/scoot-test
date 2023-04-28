import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';

import { Todo } from '../../entities/todo.entity';
import { TodoPriority } from '../../../core/enums/priority.enum';

define(Todo, (faker: Faker) => {
  const todo = new Todo();

  todo.description = faker.lorem.words(4);
  todo.priority = Math.floor(Math.random() * (TodoPriority.LOW + 1));
  todo.dueAt = faker.date.future();

  return todo;
});
