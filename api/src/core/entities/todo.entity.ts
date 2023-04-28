import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoPriority } from '../enums/priority.enum';
import { BaseEntity } from './base-entity';

@Entity()
export class Todo extends BaseEntity {
  @Column({ type: 'varchar', length: '255', nullable: false })
  description: string;

  @Column({ type: 'tinyint', enum: Object.values(TodoPriority), default: TodoPriority.LOW })
  priority: TodoPriority;

  @Column({ type: 'datetime', nullable: true })
  dueAt: Date;
}
