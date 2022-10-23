import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
<<<<<<< HEAD
import { TodoServiceService } from './todo-service/todo-service.service';
=======
>>>>>>> 1bb9ae14bb3fa4b62d6c07831440ec7cc5e3d695

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController, TodoController],
<<<<<<< HEAD
  providers: [AppService, TodoServiceService],
=======
  providers: [AppService],
>>>>>>> 1bb9ae14bb3fa4b62d6c07831440ec7cc5e3d695
})
export class AppModule {}
