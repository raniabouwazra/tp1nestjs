import { Controller ,Get,Post,Delete,Put,Body,Param } from '@nestjs/common';
import {addDTO} from './DTO/todoDTO'
import {UpdatetodoDto} from './DTO/updateDTO'
<<<<<<< HEAD
import{TodoService} from './todo.service'
import{TodoModel} from './todo-model'
@Controller('todo')
export class TodoController {
  constructor (private todoService:TodoService ){} /* l'injection du service */
 
@Get ()
getToodos() {
  this.todoService.getTodos();
}
   
 @Post( )
 addTodos (Todo : addDTO){
 this.todoService.addTodos(Todo ) 
 }

 @Get (':id')
 getTodosbyId( @Param() params){
  this.todoService.getTodosbyId(params)
 }

 @Delete(':id')
 deletetodo(@Param()params){
    this.todoService.deletetodo(params);
 }
 @Put(':id')
  updatetodo(@Param()params, @Body() updatetodoDto: UpdatetodoDto) {
    this.todoService.updatetodo(params ,updatetodoDto )
=======
import { v4 as uuidv4 } from 'uuid';
@Controller('todo')
export class TodoController {
private todos=[];

@Get ()
    getTodos() {
     return this.todos ;
}
@Post( )
addTodos(@Body () Todo : addDTO) {
this.todos.push(Todo);
}
@Get (':id')
getTodosbyId( @Param() params){
    return this.todos.find((todo) => todo.id ==params.id);
}
@Delete(':id')
deletetodo(@Param()params){
    this.todos = this.todos.filter((todo) => todo.id != params.id);

}
@Put(':id')
  updatetodo(@Param()params, @Body() updatetodoDto: UpdatetodoDto) {
    const todo = this.todos.find((todo) => todo.id == params.id);

    if (updatetodoDto.name) {
      todo.name = updatetodoDto.name;
    }
    if (updatetodoDto.description) {
      todo.description = updatetodoDto.description;
    }
    if (updatetodoDto.status) {
      todo.status = updatetodoDto.status;
    }
    return todo;
  }
>>>>>>> 1bb9ae14bb3fa4b62d6c07831440ec7cc5e3d695
}

