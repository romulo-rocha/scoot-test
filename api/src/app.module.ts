import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import database from './core/database/database';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(database), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
