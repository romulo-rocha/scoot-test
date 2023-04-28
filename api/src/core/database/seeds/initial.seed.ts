import { Factory, Seeder } from 'typeorm-seeding';

import { Todo } from '../../entities/todo.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Todo)().createMany(15);
  }
}
