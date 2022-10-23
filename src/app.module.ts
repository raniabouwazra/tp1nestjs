import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoServiceService } from './todo-service/todo-service.service';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoServiceService],
})
export class AppModule {}
