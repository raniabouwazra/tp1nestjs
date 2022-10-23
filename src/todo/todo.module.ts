import { Module } from '@nestjs/common';
<<<<<<< HEAD
import {  TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({controllers: [ TodoController], providers: [TodoService] 
=======
import {  TodoController } from 'src/todo/todo.controller';

@Module({controllers: [ TodoController] 
>>>>>>> 1bb9ae14bb3fa4b62d6c07831440ec7cc5e3d695
})

export class TodoModule {}
