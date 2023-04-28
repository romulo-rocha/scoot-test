import { Repository, DataSource, EntityTarget } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';

export class BaseRepository<T extends BaseEntity> extends Repository<T> {
  constructor(
    readonly entity: EntityTarget<T>,
    readonly dataSource: DataSource,
  ) {
    super(entity, dataSource.createEntityManager());
  }
}
