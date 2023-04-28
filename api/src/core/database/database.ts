import { Todo } from '../entities/todo.entity';

export default <any>{
  type: 'sqlite',
  database: '.db/sql',
  synchronize: true,
  entities: [Todo],
};
