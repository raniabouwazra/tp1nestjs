import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
