import { Todo } from '../entities/todo.entity';

export default <any>{
  type: 'sqlite',
  database: '.db/sql',
  synchronize: true,
  entities: [Todo],
  seeds: ['src/core/database/seeds/*.seed.ts'],
  factories: ['src/core/database/factories/*.factory.ts'],
};
