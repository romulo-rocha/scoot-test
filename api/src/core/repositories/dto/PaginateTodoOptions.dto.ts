import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { TodoPriority } from '../../../core/enums/priority.enum';

export class PaginateTodoOptionsDTO {
  description: string;
  priority: TodoPriority;
}

export type TPaginateTodoOptions = PaginateTodoOptionsDTO & IPaginationOptions;
